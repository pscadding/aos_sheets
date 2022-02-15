export enum Phase {
  Hero,
  Movement,
  Shooting,
  Charge,
  Combat,
  Battleshock,
  Any
}

export type PhaseStrings = keyof typeof Phase;
