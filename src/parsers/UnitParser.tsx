import { Unit } from '../models/Unit';
import { Unit as thinUnit } from 'thin-backend';
import { UnitType, UnitTypeStrings } from '../models/Unit';
import { snakeToPascal } from '../utils/string_utils';

export function unitParser(unit: thinUnit): Unit {
  const unitTypeString = snakeToPascal(unit.uType) as UnitTypeStrings;

  return {
    name: unit.name,
    subName: unit.subName,
    keywords: unit.keywords,
    type: UnitType[unitTypeString],
    stats: {
      wounds: unit.wounds,
      bravery: unit.bravery,
      save: unit.save,
      move: unit.move
    },
    weapons: [],
    abilities: []
  };
}
