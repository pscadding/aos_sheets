import { AbilityData, ProfileData, UnitData } from '../../models/JsonModels';
import { UnitController } from './unitController';
import { WeaponController } from './weaponController';
import { AbilityController } from './abilityController';
import { ProfileController } from './profileController';

export namespace ThinImport {
  export const importUnit = async (unitJson: UnitData) => {
    console.log('starting ', unitJson.name);
    await deleteExistingUnit(unitJson);
    const unit = await UnitController.create(unitJson);
    await WeaponController.createBatch(unitJson.weapons, unit.id);
    await AbilityController.createBatch(unitJson.abilities, unit.id);
    console.log('finished importing ', unit.name);
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
    const existing_unit = await UnitController.loadFromName(unitJson.name);
    if (existing_unit != null) {
      console.log('found existing unit, deleting before creating', existing_unit);
      await AbilityController.removeByUnit(existing_unit.id);
      await WeaponController.remove(existing_unit.id);
      await UnitController.remove(existing_unit.id);
    }
  };
}
