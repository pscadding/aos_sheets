import { UnitData, WeaponData } from '../../models/JsonModels';
import { createRecord, deleteRecord, query, Unit, UnitType, WeaponType } from 'thin-backend';
import { Weapon } from '../../models/Weapon';
import { weaponParser } from '../../parsers/WeaponParser';

export namespace WeaponController {
  // Creates multiple weapons and attaches them to the unit
  export function createBatch(weaponsJson: WeaponData[], unitId: string) {
    return Promise.all(
      weaponsJson.map((weaponData) => WeaponController.create(weaponData, unitId))
    );
  }

  export function create(weaponJson: WeaponData, unitId: string) {
    return createRecord('weapons', {
      name: weaponJson.name,
      weaponType: weaponJson.type.toLowerCase() as WeaponType,
      range: weaponJson.range,
      attacks: weaponJson.attacks,
      toHit: weaponJson.toHit,
      toWound: weaponJson.toWound,
      rend: weaponJson.rend,
      damage: weaponJson.damage,
      unitId: unitId
    });
  }

  export function remove(unitId: string) {
    return query('weapons')
      .where('unitId', unitId)
      .fetch()
      .then((weapons) => {
        return Promise.all(
          weapons.map((weapon) =>
            deleteRecord('weapons', weapon.id).then(() =>
              console.log(`removed weapon ${weapon.id}`)
            )
          )
        );
      });
  }

  export function load(unitId: string): Promise<Weapon[]> {
    return query('weapons')
      .where('unitId', unitId)
      .fetch()
      .then((thinWeapons) => {
        return thinWeapons.map((thinWeapon) => weaponParser(thinWeapon));
      });
  }
}
