import { Ability, AbilityType } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';

export const universalTriumphs: Ability[] = [
  {
    name: 'Bloodthirsty',
    type: AbilityType.Triumph,
    phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Charge], turns: [Turn.Yours] }],
    description:
      'Once per battle, after making a charge roll for a friendly unit, you re-roll that charge roll.'
  },
  {
    name: 'Inspired',
    type: AbilityType.Triumph,
    phaseRules: [
      {
        type: PhaseType.UsedIn,
        phases: [Phase.Shooting, Phase.Combat],
        turns: [Turn.Yours, Turn.Opponents]
      }
    ],
    description:
      'Once per battle, after picking friendly unit to shoot or fight, **add 1 to wound rolls** for attacks made by that unit until the end of that phase.'
  },
  {
    name: 'Indomitable',
    type: AbilityType.Triumph,
    phaseRules: [
      { type: PhaseType.UsedIn, phases: [Phase.Battleshock], turns: [Turn.Yours, Turn.Opponents] }
    ],
    description:
      'Once per battle, after taking battleshock test for friendly unit, you can choose no models from that unit to flee in that battleshock phase.'
  }
];
