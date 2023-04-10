import { Unit } from '../models/Unit';
import { Unit as ThinUnit } from 'thin-backend';
import { UnitType, UnitTypeStrings } from '../models/Unit';
import { removeQuotesArray, snakeToPascal } from '../utils/string_utils';
import { Weapon } from '../models/Weapon';
import { Ability } from '../models/Ability';

export function unitParser(unit: ThinUnit, weapons: Weapon[], abilities: Ability[]): Unit {
  const unitTypeString = snakeToPascal(unit.uType) as UnitTypeStrings;

  return {
    id: unit.id,
    name: unit.name,
    subName: unit.subName,
    keywords: removeQuotesArray(unit.keywords),
    type: UnitType[unitTypeString],
    stats: {
      wounds: unit.wounds,
      bravery: unit.bravery,
      save: unit.save,
      move: unit.move
    },
    weapons: weapons,
    abilities: abilities
  };
}
