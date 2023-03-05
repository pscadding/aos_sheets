import { Ability, AbilityType, BattleTraits } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';

export const bigYellersBattleTraits: BattleTraits = {
  Big_Yellers: [
    {
      name: 'Only Da Best',
      type: AbilityType.BattleTrait,
      phaseRules: [
        {
          type: PhaseType.Affects,
          phases: [Phase.Shooting],
          turns: [Turn.Yours]
        }
      ],
      tags: ['Big Yellers'],
      description:
        'Add 3" to the Range characteristic of missile weapons used by friendly BIG YELLERS ORRUK units. In addition, in the first battle round, each time a friendly BIG YELLERS ORRUK unit shoots, you can re-roll 1 of the hit rolls for 1 of the attacks made by that unit.'
    }
  ]
};
