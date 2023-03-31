import { UnitData } from '../../models/JsonModels';
import { createRecord, deleteRecord, UnitType } from 'thin-backend';

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
    return deleteRecord('units', unitId);
  }
}
