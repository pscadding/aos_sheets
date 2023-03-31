import { WeaponType } from './Weapon';

export enum Phase {
  BattleStart = 'BattleStart',
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
  Affects = 'Affects',
  UsedIn = 'Used In'
}
export type PhaseTypeStrings = keyof typeof PhaseType;

export enum Turn {
  Yours = 'Yours',
  Opponents = 'Opponents'
}

export type TurnStrings = keyof typeof Turn;

export interface PhaseRule {
  type: PhaseType;
  turns: Turn[];
  phases: Phase[];
}
