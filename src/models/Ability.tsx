import { Phase } from './Phase';

export enum AbilityType {
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
