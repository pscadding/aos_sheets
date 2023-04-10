import { Ability } from './Ability';

export interface ImportData {
  type: 'unit' | 'ability' | 'profile';
  content: UnitData | AbilityData | ProfileData;
}

export interface WeaponData {
  name: string;
  type: 'Missile' | 'Melee';
  range: string;
  attacks: string;
  toHit: string;
  toWound: string;
  rend: string;
  damage: string;
}

export interface PhaseRuleData {
  type: 'Affects' | 'UsedIn';
  turns: ('Yours' | 'Opponents')[];
  phases: string[];
}

export interface AbilityData extends Omit<Ability, 'type' | 'phaseRules'> {
  type: string;
  phaseRules: PhaseRuleData[];
}

export interface UnitData {
  name: string;
  type: 'Leader' | 'Artillery' | 'Behemoth' | 'Endless Spells' | 'Battleline' | 'Other';
  subName?: string;
  stats: {
    move: string;
    save: string;
    bravery: string;
    wounds: string;
  };
  weapons: WeaponData[];
  keywords: string[];
  abilities: AbilityData[];
}

export interface ProfileData {
  name: string;
  unitNames: {
    [key: string]: {
      abilityNames: string[];
    };
  };
  battleTraitTypes: string[];
  armyAbilities: string[];
}
