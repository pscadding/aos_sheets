import { UnitData } from '../../models/JsonModels';
import { createRecord, deleteRecord, query, UnitType, Unit as ThinUnit } from 'thin-backend';
import { WeaponController } from './weaponController';
import { AbilityController } from './abilityController';
import { unitParser } from '../../parsers/UnitParser';

export namespace UnitController {
  export function create(unitJson: UnitData) {
    return createRecord('units', {
      name: unitJson.name,
      uType: unitJson.type.toLowerCase() as UnitType,
      subName: unitJson.subName ? unitJson.subName : '',
      keywords: unitJson.keywords,
      move: unitJson.stats.move,
      save: unitJson.stats.save,
      wounds: unitJson.stats.wounds,
      bravery: unitJson.stats.bravery
    });
  }

  export function remove(unitId: string) {
    return deleteRecord('units', unitId).then(() => console.log(`removed unit ${unitId}`));
  }

  export function loadFromIds(unitIds: string[]) {
    return query('units')
      .whereIn('id', unitIds)
      .fetch()
      .then(async (thinUnits) => {
        return thinUnits.map((thinUnit) => loadUnit(thinUnit));
      });
  }
  export function loadFromName(name: string) {
    return query('units')
      .where('name', name)
      .fetchOne()
      .then((thinUnit) => {
        if (thinUnit) {
          return loadUnit(thinUnit);
        }
        return null;
      });
  }
}

function loadUnit(thinUnit: ThinUnit) {
  return WeaponController.load(thinUnit.id).then((weapons) => {
    return AbilityController.loadByUnit(thinUnit.id).then((abilities) => {
      return unitParser(thinUnit, weapons, abilities);
    });
  });
}
