import { Ability } from '../models/Ability';
import { Unit } from '../models/Unit';

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
  unit.abilities = unit.abilities.concat(
    filteredAbilities.filter((item) => unit.abilities.indexOf(item) < 0)
  );
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

/**
 * If the passed keyword is not found in the list of units it will return false otherwise true
 * @param keyword
 * @param abilities
 * @param units
 */
function unitsHaveKeyword(keyword: string, units: Unit[]): boolean {
  return (
    units.filter((unit) => {
      const unitKeywords = lowerCaseArray(unit.keywords);
      return unitKeywords.includes(keyword);
    }).length > 0
  );
}

function lowerCaseArray(items: string[]): string[] {
  return items.map((item) => item.toLowerCase());
}
