import { AbilityType } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';
import { Unit, UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export const chaosWarriors: Unit = {
  id: '',
  name: 'Chaos Warriors',
  type: UnitType.Other,
  stats: {
    move: '5"',
    save: '4+',
    wounds: '2',
    bravery: '7'
  },
  weapons: [
    {
      name: 'Chaos Hand Weapon(s)',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '2',
      toHit: '3+',
      toWound: '3+',
      rend: '',
      damage: '1'
    },
    {
      name: 'Chaos Halberd',
      type: WeaponType.Melee,
      range: '2"',
      attacks: '2',
      toHit: '3+',
      toWound: '4+',
      rend: '',
      damage: '1'
    },
    {
      name: 'Cursed Greatblade',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '2',
      toHit: '4+',
      toWound: '3+',
      rend: '-1',
      damage: '1'
    }
  ],
  keywords: ['Chaos', 'Mortal', 'Slaves to Darkness', 'Mark of Chaos', 'Chaos Warriors'],
  abilities: [
    {
      name: 'Aspiring Champion',
      type: AbilityType.Standard,
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Combat], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description:
        "1 model in this unit can be an Aspiring Champion. **Add 1 to attacks** for model's melee weapon."
    },
    {
      name: 'Standard Bearer',
      type: AbilityType.Standard,
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Battleshock], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description:
        '1 in 5 models can be Standard Bearer. **Add 1 to Bravery** for unit while has Standard Bearer.'
    },
    {
      name: 'Hornblower',
      type: AbilityType.Standard,
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Charge], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description:
        '1 in 5 models can be Hornblower. **Add 1 to run and charge** rolls unit while has Hornblower.'
    },
    {
      name: 'Mark of Chaos',
      type: AbilityType.Standard,
      phaseRules: [],
      description:
        'When you select this model to be part of your army, you must give it one of the following Mark of Chaos keywords: **KHORNE**, **TZEENTCH**, **NURGLE**, **SLAANESH** or **UNDIVIDED**.'
    },
    {
      name: 'Chaos Runeshields',
      type: AbilityType.Standard,
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Any], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description:
        'Roll a dice each time you allocate a mortal wound to a unit that carries Chaos Runeshields. On **5+** mortal wound is negated.'
    },
    {
      name: 'Legions of Chaos',
      type: AbilityType.Ability,
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Any], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description:
        '**Add 1** to save rolls for attacks that target this unit while it has at least 10 models.'
    },
    {
      name: 'Pair of Chaos Hand Weapons',
      type: AbilityType.Ability,
      phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Combat], turns: [Turn.Yours] }],
      description:
        'You can **re-roll hit rolls** for attacks made with a pair of Chaos Hand Weapons.'
    }
  ]
};
