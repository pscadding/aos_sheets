import { Phase } from './Phase';

export enum AbilityType {
  BattleTrait = 'Battle Trait',
  CommandAbility = 'Command Ability',
  Ability = 'Ability',
  Spell = 'Spell',
  Standard = 'Standard'
}

export interface Ability {
  name: string;
  type: AbilityType;
  description: string;
  phases: Phase[];
}
