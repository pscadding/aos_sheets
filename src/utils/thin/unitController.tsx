import { UnitData } from '../../models/JsonModels';
import { createRecord, deleteRecord, query, UnitType } from 'thin-backend';
import { Unit } from '../../models/Unit';
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
    return deleteRecord('units', unitId);
  }

  export function loadFromIds(unitIds: string[]) {
    return query('units')
      .whereIn('id', unitIds)
      .fetch()
      .then(async (thinUnits) => {
        const units: Unit[] = [];
        for (let i = 0; i < thinUnits.length; i++) {
          const thinUnit = thinUnits[i];
          const weapons = await WeaponController.load(thinUnit.id);
          const abilities = await AbilityController.loadByUnit(thinUnit.id);
          units.push(unitParser(thinUnit, weapons, abilities));
        }
        return units;
      });
  }
}
