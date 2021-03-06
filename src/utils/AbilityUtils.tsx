import { Ability } from '../models/Ability';
import { Phase, PhaseType } from '../models/Phase';
import { Profile } from '../models/Profile';
import { Unit } from '../models/Unit';
import { unitsHaveKeyword } from './UnitUtils';

/**
 * Attaches abilities with the passed keyword to the unit if it has the keyword
 * @param keyword
 * @param unit
 * @param abilities
 */
export const attachByKeyword = (keyword: string, unit: Unit, abilities: Ability[]): void => {
  const lowerKeyword = keyword.toLowerCase();
  const unitKeywords = lowerCaseArray(unit.keywords);
  // The unit doesn't have the keyword so don't bother checking the abilities.
  if (!unitKeywords.includes(lowerKeyword)) return;

  // Gather an array of abilities that attach with the passed keyword
  const filteredAbilities = abilities.filter(
    (ability) => ability.attachKeyword && ability.attachKeyword.toLowerCase() === lowerKeyword
  );

  // Only add the abilities if they haven't already been added.
  addAbilitiesToUnit(unit, filteredAbilities);
};

/**
 * Attach abilities listed in the profile against each unit to the respective unit.
 * @param profile
 * @param units
 * @param abilities
 */
export const attachByProfileUnit = (
  profile: Profile,
  units: Unit[],
  abilities: Ability[]
): void => {
  Object.keys(profile.unitNames).forEach((profileUnitName) => {
    const profileUnitAbilities = profile.unitNames[profileUnitName].abilityNames;
    if (profileUnitAbilities != null && profileUnitAbilities.length) {
      const unit = units.find((unit) => unit.name.toLowerCase() === profileUnitName.toLowerCase());

      if (unit != null) {
        const abilitiesToAdd = profileUnitAbilities
          .map((abilityName) => {
            return abilities.find(
              (ability) => ability.name.toLowerCase() === abilityName.toLowerCase()
            );
          })
          .filter((ability) => ability != null) as Ability[];

        addAbilitiesToUnit(unit, abilitiesToAdd);
      }
    }
  });
};

export const filterAbilitiesByNames = (abilities: Ability[], abilityNames: string[]): Ability[] => {
  const lowerAbilityNames = lowerCaseArray(abilityNames);
  return abilities.filter((ability) => lowerAbilityNames.includes(ability.name.toLowerCase()));
};

/**
 * If the passed keyword is not found in the list of units it will return false otherwise true
 * @param keyword
 * @param abilities
 * @param units
 */
export const filterAbilitiesByUnitKeyword = (abilities: Ability[], units: Unit[]): Ability[] => {
  return abilities.filter((ability) => {
    const abilityFilterKeywords = ability.filterUnitKeywords;

    // Don't filter out any abilities that don't have filter keywords
    if (abilityFilterKeywords == null) return true;
    else {
      // an "and" check over all filter keywords, if one of the filter keywords is found then we include the ability
      for (var i = 0; i < abilityFilterKeywords.length; i++) {
        const keyword = abilityFilterKeywords[i].toLowerCase();
        if (unitsHaveKeyword(keyword, units)) return true;
      }
    }
  });
};

export function sortAbilities(abilities: Ability[]): void {
  abilities.sort((a, b) => (a.type < b.type ? 1 : a.name === b.name ? 1 : -1));
}

/**
 * Loops through all the Abilities phase rules and checks to see if there is a phase rule that includes the passed phase.
 * Providing a type means it also checks that the phase exists in the desired phase type.
 * @param ability
 * @param phase
 * @param phaseType
 * @returns
 */
export function abilityHasPhase(ability: Ability, phase: Phase, phaseType?: PhaseType): boolean {
  return ability.phaseRules.some((phaseRule) => {
    const phaseTypeCheck = phaseType !== null ? phaseRule.type === phaseType : true;
    return (
      (phaseTypeCheck && phaseRule.phases.includes(phase)) ||
      (phaseTypeCheck && phaseRule.phases.includes(Phase.Any))
    );
  });
}

export function lowerCaseArray(items: string[]): string[] {
  return items.map((item) => item.toLowerCase());
}

function addAbilitiesToUnit(unit: Unit, abilities: Ability[]): void {
  const filteredAbs = abilities.filter((item) => unit.abilities.indexOf(item) < 0);
  unit.abilities = unit.abilities.concat(filteredAbs);
}
