import { AbilityType } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';
import { Unit, UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export const chaosKnights: Unit = {
  name: 'Chaos Knights',
  type: UnitType.Other,
  stats: {
    move: '10"',
    save: '4+',
    wounds: '3',
    bravery: '7'
  },
  weapons: [
    {
      name: 'Ensorcelled Weapon',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '3',
      toHit: '3+',
      toWound: '3+',
      rend: '-1',
      damage: '1'
    },
    {
      name: 'Cursed Lance',
      type: WeaponType.Melee,
      range: '2"',
      attacks: '2',
      toHit: '4+',
      toWound: '3+',
      rend: '',
      damage: '1'
    },
    {
      name: 'Cursed Flail',
      type: WeaponType.Melee,
      range: '2"',
      attacks: 'D6',
      toHit: '4+',
      toWound: '3+',
      rend: '',
      damage: '1'
    },
    {
      name: 'Trampling Hooves (Mount)',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '2',
      toHit: '4+',
      toWound: '4+',
      rend: '',
      damage: '1'
    }
  ],
  keywords: ['Chaos', 'Mortal', 'Slaves to Darkness', 'Mark of Chaos', 'Chaos Knights'],
  abilities: [
    {
      name: 'Mark of Chaos',
      type: AbilityType.Standard,
      phaseRules: [],
      description:
        'When you select this model to be part of your army, you must give it one of the following Mark of Chaos keywords: **KHORNE**, **TZEENTCH**, **NURGLE**, **SLAANESH** or **UNDIVIDED**.'
    },
    {
      name: 'Doom Knight',
      type: AbilityType.Standard,
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Combat], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description:
        "1 model in this unit can be a Doom Knight. **Add 1** to the Attacks characteristic that model's melee weapons (excluding its mount). In addition, that model can replace its weapon option with a Cursed Flail and Chaos Runeshield."
    },
    {
      name: 'Standard Bearer',
      type: AbilityType.Standard,
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Battleshock], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description:
        '1 in every 5 models in this unit can be a Standard Bearer. **Add 1** to the Bravery characteristic of this unit while it includes any Standard Bearers.'
    },
    {
      name: 'Hornblower',
      type: AbilityType.Standard,
      phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Charge], turns: [Turn.Yours] }],
      description:
        '1 in every 5 models in this unit can be a Hornblower. **Add 1** to run and charge rolls.'
    },
    {
      name: 'Chaos Runeshields',
      type: AbilityType.Ability,
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Any], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description:
        'Roll a dice each time you allocate a mortal wound to a unit with Chaos Runeshields. On a 5+, that mortal wound is negated.'
    },
    {
      name: 'Impaling Charge',
      type: AbilityType.Spell,
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Charge], turns: [Turn.Yours] },
        { type: PhaseType.Affects, phases: [Phase.Combat], turns: [Turn.Yours] }
      ],
      description:
        "**Add 1** to the Damage characteristic and improve the Rend characteristic of this unit's Cursed Lances by **2** if it made a charge move in the same turn."
    },
    {
      name: 'Terrifying Champions',
      type: AbilityType.Spell,
      phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Battleshock], turns: [Turn.Yours] }],
      description:
        '**Subtract 1** from the Bravery characteristic of enemy units within **3"** of any friendly units with this ability in the battleshock phase.'
    }
  ]
};
