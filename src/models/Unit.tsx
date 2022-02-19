import { Ability } from './Ability';
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

export interface Unit {
  name: string;
  subName?: string;
  type: UnitType;
  stats: UnitStats;
  weapons: Weapon[];
  keywords: string[];
  abilities: Ability[];
}
