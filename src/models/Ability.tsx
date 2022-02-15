import { Phase } from './Phase';

export enum AbilityType {
  CommandAbility,
  Ability,
  Spell,
  Standard
}

export interface Ability {
  name: string;
  type: AbilityType;
  description: string;
  phases: Phase[];
}
