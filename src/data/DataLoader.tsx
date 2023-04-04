import { Profile, UnitConfiguration } from '../models/Profile';
import { Unit } from '../models/Unit';
import { Ability } from '../models/Ability';
import { ThinLoad } from './thin/thinLoad';
import { hasKeyword, lowerCaseArray } from '../utils/string_utils';
import { UnitController } from './thin/unitController';
import { AbilityController } from './thin/abilityController';
import { sortAbilities } from '../utils/AbilityUtils';

export function loadAbilities(profile: Profile, units: Unit[]): Promise<Ability[]> {
  const unitKeywords = new Set(units.flatMap((unit) => lowerCaseArray(unit.keywords)));

  return loadArmyAbilities(profile)
    .then((abilities) => {
      return loadBattleTraits(profile).then((battleTraits) => [...abilities, ...battleTraits]);
    })
    .then((abilities) => filterAbilitiesByKeywords(abilities, unitKeywords));
}

export function loadProfiles() {
  return ThinLoad.loadProfiles();
}

export function loadProfile(profileId: string) {
  return ThinLoad.loadProfile(profileId);
}

export function loadProfileUnits(profile: Profile) {
  return loadUnitsFromConfig(profile.units);
}

// Load abilities not directly associated with units
function loadNonUnitAbilities() {
  return AbilityController.loadNonUnitAbilities();
}

function attachAbilities(unit: Unit, abilities: Ability[], abilityNames: string[]) {
  abilities.forEach((ability) => {
    if (ability.attachKeyword && hasKeyword(unit.keywords, ability.attachKeyword)) {
      unit.abilities.push(ability);
    }
    if (hasKeyword(abilityNames, ability.name)) {
      unit.abilities.push(ability);
    }
  });
}

function loadBattleTraits(profile: Profile): Promise<Ability[]> {
  return ThinLoad.loadProfileBattleTraits(profile);
}

function loadArmyAbilities(profile: Profile): Promise<Ability[]> {
  return ThinLoad.loadProfileAbilities(profile);
}

function filterAbilitiesByKeywords(abilities: Ability[], keywords: Set<string>): Ability[] {
  return abilities.filter((ability) => {
    const abilityFilterKeywords = ability.filterUnitKeywords;

    // Don't filter out any abilities that don't have filter keywords
    if (abilityFilterKeywords === undefined || abilityFilterKeywords.length === 0) return true;
    else {
      // an "and" check over all filter keywords, if one of the filter keywords is found then we include the ability
      for (var i = 0; i < abilityFilterKeywords.length; i++) {
        if (keywords.has(abilityFilterKeywords[i].toLowerCase())) return true;
      }
    }
    return false;
  });
}

function filterAbilities(units: Unit[], keywords: Set<string>): Unit[] {
  return units.map((unit) => {
    unit.abilities = filterAbilitiesByKeywords(unit.abilities, keywords);
    // TODO sorting not working
    sortAbilities(unit.abilities);
    return unit;
  });
}

function filterNull(units: (Unit | null)[]): Unit[] {
  return units.filter((u): u is Unit => u !== null);
}

const loadUnitsFromConfig = (unitConfigs: UnitConfiguration[]): Promise<Unit[]> => {
  return loadNonUnitAbilities().then((abilities) => {
    const allUnitKeywords: Set<string> = new Set();

    return Promise.all(
      unitConfigs.map((uConfig) => {
        return UnitController.loadFromName(uConfig.unitName).then((unit) => {
          if (unit) {
            unit.keywords.forEach((keyword) => allUnitKeywords.add(keyword.toLowerCase()));
            attachAbilities(unit, abilities, uConfig.abilityNames);
          }
          return unit;
        });
      })
    )
      .then(filterNull)
      .then((u) => filterAbilities(u, allUnitKeywords));
  });
};
