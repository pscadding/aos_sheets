import { Ability, AbilityType } from '../../../models/Ability';
import { Phase } from '../../../models/Phase';

export const universalTriumphs: Ability[] = [
  {
    name: 'Bloodthirsty',
    type: AbilityType.Triumph,
    phases: [Phase.Charge],
    description:
      'Once per battle, after making a charge roll for a friendly unit, you re-roll that charge roll.'
  },
  {
    name: 'Inspired',
    type: AbilityType.Triumph,
    phases: [Phase.Combat, Phase.Shooting],
    description:
      'Once per battle, after picking friendly unit to shoot or fight, **add 1 to wound rolls** for attacks made by that unit until the end of that phase.'
  },
  {
    name: 'Indomitable',
    type: AbilityType.Triumph,
    phases: [Phase.Battleshock],
    description:
      'Once per battle, after taking battleshock test for friendly unit, you can choose no models from that unit to flee in that battleshock phase.'
  }
];
