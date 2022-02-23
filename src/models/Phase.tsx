export enum Phase {
  Hero = 'Hero',
  Movement = 'Movement',
  Shooting = 'Shooting',
  Charge = 'Charge',
  Combat = 'Combat',
  Battleshock = 'Battleshock',
  Any = 'Any',
  NA = 'NA'
}

export type PhaseStrings = keyof typeof Phase;

export enum PhaseType {
  Affects,
  UsedIn
}

export enum Turn {
  Yours,
  Opponents
}

export interface PhaseRule {
  type: PhaseType;
  turns: Turn[];
  phases: Phase[];
}
