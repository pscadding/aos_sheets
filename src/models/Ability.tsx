import { PhaseRule } from './Phase';

export enum AbilityType {
  BattleTrait = 'Battle Trait',
  Triumph = 'Triumph',
  CommandAbility = 'Command Ability',
  Ability = 'Ability',
  Spell = 'Spell',
  Standard = 'Standard',
  DamageTable = 'Damage Table'
}

export interface Ability {
  name: string;
  type: AbilityType;
  enhancement?: boolean;
  tags?: string[];
  description: string;
  phaseRules: PhaseRule[];
  attachKeyword?: string;
  filterUnitKeywords?: string[];
}

export interface BattleTraits {
  [key: string]: Ability[];
}

export interface AbilityDamageTable extends Ability {
  columns: string[];
  rows: string[][];
}
