export enum WeaponType {
  Missile = 'Missile',
  Melee = 'Melee'
}

export type WeaponTypeStrings = keyof typeof WeaponType;

export interface Weapon {
  name: string;
  type: WeaponType;
  range: string;
  attacks: string;
  toHit: string;
  toWound: string;
  rend: string;
  damage: string;
}
