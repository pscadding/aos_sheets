import { query, deleteRecord, Unit } from 'thin-backend';
import { AbilityData, ImportData, ProfileData, UnitData } from '../../models/JsonModels';
import { UnitController } from './unitController';
import { WeaponController } from './weaponController';
import { AbilityController } from './abilityController';
import { ProfileController } from './profileController';

export namespace ThinImport {
  export const importUnit = async (unitJson: UnitData) => {
    await deleteExistingUnit(unitJson);

    const unit = await UnitController.create(unitJson);
    await WeaponController.createBatch(unitJson.weapons, unit.id);
    await AbilityController.createBatch(unitJson.abilities, unit.id);
  };

  export const importAbility = async (abilityJson: AbilityData) => {
    await AbilityController.removeByName(abilityJson.name);
    await AbilityController.create(abilityJson, null);
  };

  export const importProfile = async (profileJson: ProfileData) => {
    await ProfileController.removeByName(profileJson.name);
    await ProfileController.create(profileJson);
  };

  const deleteExistingUnit = async (unitJson: UnitData) => {
    const existing_unit = await query('units').where('name', unitJson.name).fetchOne();
    if (existing_unit != null) {
      console.log('found existing unit, deleting before creating', existing_unit);
      await deleteUnitConfigurations(existing_unit);
      await AbilityController.removeByUnit(existing_unit.id);
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
}
