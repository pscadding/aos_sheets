export enum WeaponType {
  Missile,
  Melee
}

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
