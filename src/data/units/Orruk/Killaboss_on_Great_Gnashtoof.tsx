import { AbilityType } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';
import { Unit, UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export const KillaBossOnGreatGnashtoof: Unit = {
  name: 'Killaboss on Great Gnashtoof',
  type: UnitType.Leader,
  stats: {
    move: '10"',
    save: '3+',
    bravery: '7',
    wounds: '10'
  },
  weapons: [
    {
      name: 'Jagged Boss-stikka',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '4',
      toHit: '3+',
      toWound: '3+',
      rend: '-1',
      damage: '2'
    },
    {
      name: 'Bone-crushing Fangs',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '4',
      toHit: '3+',
      toWound: '3+',
      rend: '-2',
      damage: '2'
    }
  ],
  keywords: [
    'Destruction',
    'Orruk Warclans',
    'Orruk',
    'Kruleboyz',
    'Killaboss',
    'Killaboss on Great Gnashtoof',
    'Hero'
  ],
  abilities: [
    {
      name: 'Mount',
      type: AbilityType.Standard,
      phaseRules: [
        { type: PhaseType.Affects, phases: [Phase.Combat], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description: 'Great Gnashtoof is armed with Bone-crushing Fangs.'
    },
    {
      name: 'All Part of Da Plan',
      type: AbilityType.Ability,
      phaseRules: [
        {
          type: PhaseType.Affects,
          phases: [Phase.Battleshock],
          turns: [Turn.Yours, Turn.Opponents]
        }
      ],
      description:
        'If a friendly **KRULEBOYZ** unit fails a battleshock test within **3"** of any friendly units with this ability, only 1 model from that unit will flee.'
    },
    {
      name: 'Savage Hound',
      type: AbilityType.Ability,
      phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Combat], turns: [Turn.Yours] }],
      description:
        'Add **1** to hit rolls for attacks made by this unit if this unit made a charge move in the same turn.'
    }
  ]
};
