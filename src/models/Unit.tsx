import { UnitStats } from './UnitStats';
import { Weapon } from './Weapon';

export interface Unit {
  name: string;
  subName?: string;
  stats: UnitStats;
  weapons: Weapon[];
}
