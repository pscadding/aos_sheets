import { AbilityType } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';
import { Unit, UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export const stormvermin: Unit = {
  name: 'Stormvermin',
  type: UnitType.Battleline,
  stats: {
    move: '6"',
    save: '4+',
    wounds: '1',
    bravery: '6'
  },
  weapons: [
    {
      name: 'Rusty Halberd',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '2',
      toHit: '3+',
      toWound: '3+',
      rend: '-1',
      damage: '1'
    }
  ],
  keywords: ['Chaos', 'Skaven', 'Clans Verminus', 'Stormvermin'],
  abilities: [
    {
      name: 'Champion',
      type: AbilityType.Ability,
      phaseRules: [
        { type: PhaseType.Affects, phases: [Phase.Combat], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description:
        "1 model in this unit can be a Fangleader. Add 1 to the Attacks characteristic of that model's Rusty Halberd."
    },
    {
      name: 'Standard Bearer',
      type: AbilityType.Ability,
      phaseRules: [
        {
          type: PhaseType.Affects,
          phases: [Phase.Movement, Phase.Charge],
          turns: [Turn.Yours, Turn.Opponents]
        }
      ],
      description:
        '1 in every 10 models in this unit can be a Stormvermin Standard Bearer. This unit can retreat and still charge later in the turn if it includes any Stormvermin Standard Bearers.'
    },
    {
      name: 'Musician',
      type: AbilityType.Ability,
      phaseRules: [
        {
          type: PhaseType.Affects,
          phases: [Phase.Movement],
          turns: [Turn.Yours]
        }
      ],
      description:
        '1 in every 10 models in this unit can be a Stormvermin Drummer. Add 2 to run rolls for this unit if it includes any Stormvermin Drummers.'
    },
    {
      name: 'Elite Bodyguards',
      type: AbilityType.Ability,
      phaseRules: [
        { type: PhaseType.Affects, phases: [Phase.Any], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description:
        'If a friendly **SKAVEN HERO** is within **3"** of this unit, before you allocate a wound or mortal wound to that **HERO**, or instead of making a ward roll for a wound or mortal wound that would be allocated to that **HERO**, roll a dice. Add 2 to the roll if the HERO has the **CLANS VERMINUS** keyword. On a **4+**, that wound or mortal wound is allocated to this unit instead of that **HERO** and cannot be negated.'
    }
  ]
};
