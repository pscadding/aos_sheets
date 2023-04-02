import { AbilityType } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';
import { Unit, UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export const exhaltedHeroChaos: Unit = {
  id: '',
  name: 'Exhalted Hero Of Chaos',
  type: UnitType.Leader,
  stats: {
    move: '5"',
    save: '4+',
    wounds: '5',
    bravery: '8'
  },
  weapons: [
    {
      name: 'Rune-etched Blades',
      type: WeaponType.Melee,
      range: '1"',
      attacks: 'D6',
      toHit: '3+',
      toWound: '3+',
      rend: '-1',
      damage: '1'
    }
  ],
  keywords: [
    'Chaos',
    'Mortal',
    'Slaves to Darkness',
    'Mark of Chaos',
    'Eye of the Gods',
    'Hero',
    'Exhalted Hero of Chaos'
  ],
  abilities: [
    {
      name: 'Mark of Chaos',
      type: AbilityType.Standard,
      phaseRules: [],
      description:
        'When you select this model to be part of your army, you must give it one of the following Mark of Chaos keywords: **KHORNE**, **TZEENTCH**, **NURGLE**, **SLAANESH** or **UNDIVIDED**.'
    },
    {
      name: 'Dark Blessing',
      type: AbilityType.Ability,
      phaseRules: [
        {
          type: PhaseType.Affects,
          phases: [Phase.Any],
          turns: [Turn.Yours, Turn.Opponents]
        }
      ],
      description:
        'Roll a dice each time you allocate a mortal wound to this model. On a **5+**, that mortal wound is negated.'
    },
    {
      name: 'Glory-hungry Bladesman',
      type: AbilityType.Ability,
      phaseRules: [
        {
          type: PhaseType.Affects,
          phases: [Phase.Combat],
          turns: [Turn.Yours, Turn.Opponents]
        }
      ],
      description:
        '**Add 1** to hit rolls for attacks made by this model if the target is a **HERO** or **MONSTER**.'
    },
    {
      name: 'Thrice-damned Dagger',
      type: AbilityType.Ability,
      phaseRules: [
        {
          type: PhaseType.UsedIn,
          phases: [Phase.Combat],
          turns: [Turn.Yours, Turn.Opponents]
        }
      ],
      description:
        'If this model makes an attack with a melee weapon that slays one or more enemy **HEROES** or **MONSTERS**, you can **heal up to D3 wounds** allocated to this model after all of its attacks have been resolved.'
    },
    {
      name: 'Trail of Red Ruin',
      type: AbilityType.Ability,
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Charge], turns: [Turn.Yours] },
        { type: PhaseType.Affects, phases: [Phase.Combat], turns: [Turn.Yours] }
      ],
      description:
        'If this model made a charge move this turn, after this model has fought in the combat phase for the first time, it can immediately fight for a second time if it is within **3"** of an enemy unit.'
    }
  ]
};
