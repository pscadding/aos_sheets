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

export type AbilityTypeStrings = keyof typeof AbilityType;

export interface Ability {
  name: string;
  type: AbilityType;
  enhancement?: boolean;
  tags?: string[];
  description: string;
  phaseRules: PhaseRule[];
  attachKeyword?: string;
  filterUnitKeywords?: string[];
  columns?: string[];
  rows?: string[][];
}

export interface BattleTraits {
  [key: string]: Ability[];
}
