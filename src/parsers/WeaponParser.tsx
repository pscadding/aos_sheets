import { Weapon as ThinWeapon } from 'thin-backend';
import { snakeToPascal } from '../utils/string_utils';
import { Weapon, WeaponType, WeaponTypeStrings } from '../models/Weapon';

export function weaponParser(weapon: ThinWeapon): Weapon {
  const weaponTypeString = snakeToPascal(weapon.weaponType) as WeaponTypeStrings;

  return {
    name: weapon.name,
    type: WeaponType[weaponTypeString],
    range: weapon.range,
    attacks: weapon.attacks,
    toHit: weapon.toHit,
    toWound: weapon.toWound,
    rend: weapon.rend,
    damage: weapon.damage
  };
}
