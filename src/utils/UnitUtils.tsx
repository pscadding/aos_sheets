import { Unit } from '../models/Unit';
import { hasKeyword } from './string_utils';

/**
 * If the passed keyword is not found in the list of units it will return false otherwise true
 * @param keyword
 * @param abilities
 * @param units
 */
export function unitsHaveKeyword(keyword: string, units: Unit[]): boolean {
  return (
    units.filter((unit) => {
      return hasKeyword(unit.keywords, keyword);
    }).length > 0
  );
}
