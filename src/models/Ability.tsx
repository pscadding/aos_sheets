export enum AbilityType {
  CommandAbility,
  Spell,
  Standard
}

export enum Phase {
  Hero,
  Movement,
  Shooting,
  Charge,
  Combat,
  Battleshock,
  Any
}

export interface Ability {
  name: string;
  type: AbilityType;
  description: string;
  phases?: Phase[];
}
