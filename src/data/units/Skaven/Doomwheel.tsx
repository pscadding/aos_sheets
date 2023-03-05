import { AbilityType } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';
import { Unit, UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export const doomwheel: Unit = {
  name: 'Doomwheel',
  type: UnitType.Behemoth,
  stats: {
    move: '4D6"',
    save: '4+',
    wounds: '8',
    bravery: '7'
  },
  weapons: [
    {
      name: 'Warp Bolts',
      type: WeaponType.Missile,
      range: '13"',
      attacks: 'D6',
      toHit: '3+',
      toWound: '3+',
      rend: '-1',
      damage: 'D3'
    },
    {
      name: 'Grinding Wheel',
      type: WeaponType.Melee,
      range: '1"',
      attacks: 'D6',
      toHit: '3+',
      toWound: '3+',
      rend: '-1',
      damage: '1'
    },
    {
      name: 'Teeth and Knives',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '6',
      toHit: '4+',
      toWound: '4+',
      rend: '-',
      damage: '1'
    }
  ],
  keywords: ['Chaos', 'Skaven', 'Clans Skryre', 'War Machine', 'Doomwheel'],
  abilities: [
    {
      name: 'Rolling Doom',
      type: AbilityType.Ability,
      phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Movement], turns: [Turn.Yours] }],
      description:
        'When this unit moves, it can pass across models with a Wounds characteristic of **3** or less in the same manner as a unit that can fly. In addition, after this unit has moved, roll a dice for each unit that has any models it passed across and for each other unit within **1"** of this unit at the end of the move. On a **2+**, that unit suffers **D3 mortal wounds**.'
    },
    {
      name: 'More-more Speed!',
      type: AbilityType.Ability,
      phaseRules: [
        {
          type: PhaseType.UsedIn,
          phases: [Phase.Movement],
          turns: [Turn.Yours]
        }
      ],
      description:
        'When you make a normal move with this unit, you can re-roll the roll that determines its Move characteristic. However, if any of those dice are an **unmodified 1**, your opponent makes that normal move with this unit instead of you.'
    },
    {
      name: 'More-more Warp Bolts!',
      type: AbilityType.Ability,
      phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Shooting], turns: [Turn.Yours] }],
      description:
        'Before you determine the Attacks characteristic of Warp Bolts, you can say that the engineer is overcharging the warp lightning generator. If you do so, the Attacks characteristic for that attack is **2D6** instead of **D6**. However, if you roll a double, this unit suffers **2D6 mortal wounds** after all of its attacks have been resolved.'
    }
  ]
};
