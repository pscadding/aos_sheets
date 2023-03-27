import { Ability, AbilityDamageTable } from './Ability';
import { UnitStats } from './UnitStats';
import { Weapon } from './Weapon';

export enum UnitType {
  Leader = 'Leader',
  Artillery = 'Artillery',
  Behemoth = 'Behemoth',
  EndlessSpells = 'Endless Spells',
  Battleline = 'Battleline',
  Other = 'Other'
}

export type UnitTypeStrings = keyof typeof UnitType;

export interface Unit {
  name: string;
  subName?: string;
  type: UnitType;
  stats: UnitStats;
  weapons: Weapon[];
  keywords: string[];
  abilities: (Ability | AbilityDamageTable)[];
}
