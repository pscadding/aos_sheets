import { AbilityType } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';
import { Unit, UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export const manSkewerBoltboyz: Unit = {
  name: 'Man-skewer Boltboyz',
  type: UnitType.Battleline,
  stats: {
    move: '5"',
    save: '6+',
    bravery: '5',
    wounds: '2'
  },
  weapons: [
    {
      name: 'Man-skewer Crossbow: Hasty Shot',
      type: WeaponType.Missile,
      range: '12"',
      attacks: '2',
      toHit: '4+',
      toWound: '3+',
      rend: '-1',
      damage: '2'
    },
    {
      name: 'Man-skewer Crossbow: Aimed Shot',
      type: WeaponType.Missile,
      range: '24"',
      attacks: '1',
      toHit: '2+',
      toWound: '3+',
      rend: '-1',
      damage: '2'
    },
    {
      name: 'Jaggedy Blade',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '2',
      toHit: '4+',
      toWound: '4+',
      rend: '-',
      damage: '1'
    }
  ],
  keywords: ['Destruction', 'Orruk Warclans', 'Orruk', 'Kruleboyz', 'Man-skewer Boltboyz'],
  abilities: [
    {
      name: 'Champion',
      type: AbilityType.Standard,
      phaseRules: [
        { type: PhaseType.Affects, phases: [Phase.Shooting], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description: "1 model can be Champion. **Add 1 to Attacks** of model's missile weapon."
    },
    {
      name: "Pick 'Em Off",
      type: AbilityType.Ability,
      phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Shooting], turns: [Turn.Yours] }],
      description:
        'When this unit attacks with a Man-skewer Crossbow, use the Aimed Shot missile weapon characteristics if it did not make a normal move in the same turn and is more than **3"** from all enemy units. Otherwise, use the Hasty Shot missile weapon characteristics.'
    }
  ]
};
