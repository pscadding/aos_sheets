import { AbilityType } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';
import { Unit, UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export const clanrats: Unit = {
  name: 'Clanrats',
  type: UnitType.Battleline,
  stats: {
    move: '6"',
    save: '5+',
    wounds: '1',
    bravery: '4'
  },
  weapons: [
    {
      name: 'Rusty Spear',
      type: WeaponType.Melee,
      range: '2"',
      attacks: '1',
      toHit: '5+',
      toWound: '4+',
      rend: '-',
      damage: '1'
    },
    {
      name: 'Rusty Blade',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '1',
      toHit: '4+',
      toWound: '4+',
      rend: '-',
      damage: '1'
    }
  ],
  keywords: ['Chaos', 'Skaven', 'Clans Verminus', 'Clanrats'],
  abilities: [
    {
      name: 'Champion',
      type: AbilityType.Standard,
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Combat], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description:
        "1 model in this unit can be a Clawleader. Add 1 to the Attacks characteristic of that model's melee weapon."
    },
    {
      name: 'Standard Bearer',
      type: AbilityType.Standard,
      phaseRules: [
        {
          type: PhaseType.UsedIn,
          phases: [Phase.Movement, Phase.Charge],
          turns: [Turn.Yours]
        }
      ],
      description:
        '1 in every 10 can be a Clanrat Standard Bearer. This unit can retreat and still charge later in the turn if it includes one.'
    },
    {
      name: 'Musician',
      type: AbilityType.Standard,
      phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Movement], turns: [Turn.Yours] }],
      description:
        '1 in every 10 can be a Clanrat Bellringer. Add 2 to run rolls for this unit if it includes one.'
    },
    {
      name: 'Seething Swarm',
      type: AbilityType.Ability,
      description:
        'At the end of the battleshock phase, you can return **D3** slain models to this unit.',
      phaseRules: [
        {
          type: PhaseType.Affects,
          phases: [Phase.Battleshock],
          turns: [Turn.Yours, Turn.Opponents]
        }
      ]
    }
  ]
};
