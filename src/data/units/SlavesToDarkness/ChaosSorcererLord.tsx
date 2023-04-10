import { AbilityType } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';
import { Unit, UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export const chaosSorcererLord: Unit = {
  id: '',
  name: 'Chaos Sorcerer Lord',
  type: UnitType.Leader,
  stats: {
    move: '5"',
    save: '4+',
    wounds: '5',
    bravery: '8'
  },
  weapons: [
    {
      name: 'Sorcerer Staff',
      type: WeaponType.Melee,
      range: '2"',
      attacks: '1',
      toHit: '4+',
      toWound: '3+',
      rend: '-1',
      damage: 'D3'
    },
    {
      name: 'Chaos Runeblade',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '2',
      toHit: '3+',
      toWound: '3+',
      rend: '',
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
    'Wizard',
    'Chaos Sorcerer Lord'
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
      name: 'Wizard',
      type: AbilityType.Standard,
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Hero], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description: 'Can cast and unbind 1 spell.'
    },
    {
      name: 'Oracular Visions',
      type: AbilityType.Ability,
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Hero], turns: [Turn.Yours] },
        { type: PhaseType.Affects, phases: [Phase.Any], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description:
        'In your hero phase, you can **pick 1** friendly **MORTAL** **SLAVES TO DARKNESS** unit wholly within **12"** of this unit. If you do so, **add 1** to save rolls for attacks that target that unit until your next hero phase.'
    },
    {
      name: 'Daemonic Power',
      type: AbilityType.Spell,
      phaseRules: [
        {
          type: PhaseType.UsedIn,
          phases: [Phase.Hero],
          turns: [Turn.Yours]
        },
        {
          type: PhaseType.Affects,
          phases: [Phase.Shooting, Phase.Combat],
          turns: [Turn.Yours]
        }
      ],
      description:
        'Casting value of **6**. If successfully cast, **pick 1** friendly **MORTAL SLAVES TO DARKNESS** unit wholly within **18"** of the caster and visible to them. You can re-roll hit and wound rolls for attacks made by that unit until your next hero phase.'
    }
  ]
};
