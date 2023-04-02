import { Profile, UnitConfiguration } from '../models/Profile';
import { enhancements } from './abilities/abilities';
import { Unit } from '../models/Unit';
import { Ability } from '../models/Ability';
import { ThinLoad } from './thin/thinLoad';
import { hasKeyword } from '../utils/string_utils';
import { UnitController } from './thin/unitController';
import { AbilityController } from './thin/abilityController';
import { sortAbilities } from '../utils/AbilityUtils';

export function loadBattleTraits(profile: Profile): Promise<Ability[]> {
  return ThinLoad.loadProfileBattleTraits(profile);
}

export function loadArmyAbilities(profile: Profile): Promise<Ability[]> {
  return ThinLoad.loadProfileAbilities(profile);
}

export function loadEnhancements(): Promise<Ability[]> {
  return new Promise((resolve) => {
    resolve(enhancements);
  });
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

const loadUnitsFromConfig = (unitConfigs: UnitConfiguration[]): Promise<Unit[]> => {
  return loadNonUnitAbilities().then((abilities) => {
    return Promise.all(
      unitConfigs.map((uConfig) => {
        return UnitController.loadFromName(uConfig.unitName).then((unit) => {
          if (unit) {
            attachAbilities(unit, abilities, uConfig.abilityNames);
            console.log('before', unit.abilities);
            sortAbilities(unit.abilities);
            console.log('after', unit.abilities);
          }

          return unit;
        });
      })
    ).then((units) => units.filter((u): u is Unit => u !== null));
  });
};
