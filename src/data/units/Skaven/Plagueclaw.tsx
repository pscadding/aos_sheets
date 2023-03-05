import { AbilityType } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';
import { Unit, UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export const plagueclaw: Unit = {
  name: 'Plagueclaw',
  type: UnitType.Battleline,
  stats: {
    move: '3"',
    save: '5+',
    wounds: '6',
    bravery: '4'
  },
  weapons: [
    {
      name: 'Plagueclaw Catapult',
      type: WeaponType.Missile,
      range: '6-30"',
      attacks: '1',
      toHit: '3+',
      toWound: '2+',
      rend: '-2',
      damage: 'D6'
    },
    {
      name: 'Rusty Knives',
      type: WeaponType.Melee,
      range: '1"',
      attacks: 'D6',
      toHit: '4+',
      toWound: '4+',
      rend: '-',
      damage: '1'
    }
  ],
  keywords: ['Chaos', 'Skaven', 'Clans Pestilens', 'Nurgle', 'War Machine', 'Plagueclaw'],
  abilities: [
    {
      name: 'Barrage of Disease',
      type: AbilityType.Ability,
      phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Shooting], turns: [Turn.Yours] }],
      description:
        'The target of an attack made with a Plagueclaw Catapult does not have to be visible to the attacking model. In addition, if the target unit has 10 or more models, **add 1** to hit rolls for attacks made with a Plagueclaw Catapult and increase the Damage characteristic to **2D6**.'
    },
    {
      name: 'Hideous Death',
      type: AbilityType.Ability,
      phaseRules: [
        {
          type: PhaseType.UsedIn,
          phases: [Phase.Battleshock],
          turns: [Turn.Yours, Turn.Opponents]
        }
      ],
      description:
        'Add 2 to battleshock rolls for units targeted by any friendly units with this ability during that turn.'
    }
  ]
};
