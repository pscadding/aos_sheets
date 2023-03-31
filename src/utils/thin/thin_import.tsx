import {
  query,
  createRecord,
  UnitType,
  deleteRecord,
  WeaponType,
  Unit,
  AbilityType,
  Ability,
  Phase,
  PhaseType,
  Turn
} from 'thin-backend';
import {
  AbilityData,
  ImportData,
  PhaseRuleData,
  UnitData,
  WeaponData
} from '../../models/JsonModels';
import { UnitController } from './unitController';
import { WeaponController } from './weaponController';
import { AbilityController } from './abilityController';

const importUnit = async (unitJson: UnitData) => {
  await deleteExistingUnit(unitJson);

  const unit = await UnitController.create(unitJson);
  await WeaponController.createBatch(unitJson.weapons, unit.id);
  await AbilityController.createBatch(unitJson.abilities, unit.id);
};

const deleteExistingUnit = async (unitJson: UnitData) => {
  const existing_unit = await query('units').where('name', unitJson.name).fetchOne();
  if (existing_unit != null) {
    console.log('found existing unit, deleting before creating', existing_unit);
    await deleteUnitConfigurations(existing_unit);
    await AbilityController.remove(existing_unit.id);
    await WeaponController.remove(existing_unit.id);
    await UnitController.remove(existing_unit.id);
  }
};

const deleteUnitConfigurations = async (unit: Unit) => {
  const configs = await query('unit_configurations').where('unitId', unit.id).fetch();
  if (configs) {
    configs.forEach(async (config) => {
      console.log('found existing unit config, deleting before creating', config);
      await deleteRecord('unit_configurations', config.id);
    });
  }
};

const importAbility = (abilityJson: AbilityData) => {};

export const importJsonToThin = (data: ImportData[]) => {
  data.forEach((entry) => {
    switch (entry.type) {
      case 'unit':
        importUnit(entry.content as UnitData);
        break;
      case 'ability':
        importAbility(entry.content as AbilityData);
        break;
    }
  });
};
