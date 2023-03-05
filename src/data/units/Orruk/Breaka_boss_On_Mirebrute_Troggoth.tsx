import { AbilityType } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';
import { Unit, UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export const breakaBoss: Unit = {
  name: 'Breaka-boss on Mirebrute Troggoth',
  type: UnitType.Leader,
  stats: {
    move: '5"',
    save: '4+',
    bravery: '7',
    wounds: '12'
  },
  weapons: [
    {
      name: 'Bident-goad',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '5',
      toHit: '3+',
      toWound: '3+',
      rend: '',
      damage: '2'
    },
    {
      name: 'Iron-bound Clubs',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '4',
      toHit: '3+',
      toWound: '3+',
      rend: '-2',
      damage: '3'
    }
  ],
  keywords: [
    'Destruction',
    'Orruk Warclans',
    'Orruk',
    'Kruleboyz',
    'Troggoth',
    'Mirebrute Troggoth',
    'Hero',
    'Breaka-boss'
  ],
  abilities: [
    {
      name: 'Mount',
      type: AbilityType.Standard,
      phaseRules: [
        { type: PhaseType.Affects, phases: [Phase.Combat], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description: 'Mirebrute Troggoth is armed with the Iron-bound Clubs.'
    },
    {
      name: 'Breaka-harness',
      type: AbilityType.Ability,
      phaseRules: [
        {
          type: PhaseType.UsedIn,
          phases: [Phase.Combat],
          turns: [Turn.Yours, Turn.Opponents]
        }
      ],
      description:
        "At the start of the combat phase, you can say that the Breaka-boss is yanking on his Mirebrute Troggoth's harness." +
        'If you do so, this unit suffers **D3 mortal wounds** but for each mortal wound it suffers, you can add **2** to the Attacks characteristic of its Iron-bound Clubs until the end of that phase.'
    },
    {
      name: 'Regeneration',
      type: AbilityType.Ability,
      phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Hero], turns: [Turn.Yours] }],
      description:
        'In your hero phase, you can roll a dice for this unit. If you do so, on a **4+**, heal up to **D3** wounds allocated to this unit.'
    }
  ]
};
