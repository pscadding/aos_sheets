import { Unit } from '../models/Unit';
import { lowerCaseArray } from './AbilityUtils';

/**
 * If the passed keyword is not found in the list of units it will return false otherwise true
 * @param keyword
 * @param abilities
 * @param units
 */
export function unitsHaveKeyword(keyword: string, units: Unit[]): boolean {
  return (
    units.filter((unit) => {
      const unitKeywords = lowerCaseArray(unit.keywords);
      return unitKeywords.includes(keyword);
    }).length > 0
  );
}
