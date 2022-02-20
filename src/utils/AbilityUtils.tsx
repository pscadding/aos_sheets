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
  const unitKeywords = unit.keywords.map((keyword) => keyword.toLowerCase());
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
