export enum Phase {
  Hero = 'Hero',
  Movement = 'Movement',
  Shooting = 'Shooting',
  Charge = 'Charge',
  Combat = 'Combat',
  Battleshock = 'Battleshock',
  Any = 'Any'
}

export type PhaseStrings = keyof typeof Phase;
