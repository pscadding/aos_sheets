import { AbilityType } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';
import { Unit, UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export const saurusOldbloodOnCarnosaur: Unit = {
  name: 'Saurus Oldblood on Carnosaur',
  type: UnitType.Leader,
  stats: {
    move: '*',
    save: '4+',
    wounds: '12',
    bravery: '8'
  },
  weapons: [
    {
      name: 'Sunbolt Gauntlet',
      type: WeaponType.Missile,
      range: '18"',
      attacks: 'D6',
      toHit: '3+',
      toWound: '4+',
      rend: '-1',
      damage: '1'
    },
    {
      name: 'Sunstone Spear (Celestite weapon)',
      type: WeaponType.Melee,
      range: '2"',
      attacks: '3',
      toHit: '3+',
      toWound: '3+',
      rend: '-1',
      damage: '3'
    },
    {
      name: 'Clawed Forelimbs (Mount)',
      type: WeaponType.Melee,
      range: '2"',
      attacks: '2',
      toHit: '*',
      toWound: '3+',
      rend: '',
      damage: '2'
    },
    {
      name: 'Massive Jaws (Mount)',
      type: WeaponType.Melee,
      range: '2"',
      attacks: '3',
      toHit: '4+',
      toWound: '3+',
      rend: '-1',
      damage: '*'
    }
  ],
  keywords: ['Order', 'Seraphon', 'Saurus', 'Carnosaur', 'Monster', 'Hero', 'Oldblood'],
  abilities: [
    {
      name: 'Damage Table',
      type: AbilityType.DamageTable,
      description: 'TODO',
      columns: ['Wounds Suffered', 'Move', 'Clawed Forelimbs', 'Massive Jaws'],
      rows: [
        ['0-2', '10"', '3+', '5'],
        ['3-4', '9"', '4+', '4'],
        ['5-7', '8"', '4+', '3'],
        ['8-9', '7"', '5+', '2'],
        ['10+', '6"', '5+', '1']
      ],
      phaseRules: []
    },
    {
      name: 'Blazing Sunbolts',
      type: AbilityType.Ability,
      phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Shooting], turns: [Turn.Yours] }],
      description:
        '**Add 1** to wound rolls for attacks made with **Sunbolt Gauntlet** if target is **Chaos Daemon** unit.'
    },
    {
      name: 'Blood Frenzy',
      type: AbilityType.Ability,
      phaseRules: [
        {
          type: PhaseType.UsedIn,
          phases: [Phase.Shooting, Phase.Combat],
          turns: [Turn.Yours, Turn.Opponents]
        },
        { type: PhaseType.Affects, phases: [Phase.Movement, Phase.Charge], turns: [Turn.Yours] }
      ],
      description:
        'If any enemy models are slain by wounds inflicted by this models attacks, for the rest of the battle this model can run and still charge in the same turn.'
    },
    {
      name: 'Cold Ferocity',
      type: AbilityType.Ability,
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Combat], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description:
        'If unmodified hit roll for an attack made with **Celestite** weapon by this model is **6**, that attack scores **2 hits** on target instead of **1**.'
    },
    {
      name: 'Pinned Down',
      type: AbilityType.Ability,
      phaseRules: [
        { type: PhaseType.Affects, phases: [Phase.Combat], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description:
        '**Add 1** to hit rolls for attacks made with *Massive Jaws** if the target has Wounds characteristic of **7 or less**'
    },
    {
      name: 'Terror',
      type: AbilityType.Ability,
      phaseRules: [
        {
          type: PhaseType.Affects,
          phases: [Phase.Battleshock],
          turns: [Turn.Yours, Turn.Opponents]
        }
      ],
      description:
        '**Subtract 1** from bravery of enemy units while they are within **3"** of friendly units with this ability.'
    },
    {
      name: 'Wrath of the Seraphon',
      type: AbilityType.CommandAbility,
      filterUnitKeywords: ['Saurus'],
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Combat], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description:
        'Can use this command ability in combat phase. If you do, **pick 1** Saurus unit wholly **within 18"** of this model. ' +
        "Until end of that phase **add 1 to hit rolls** for attacks made by that unit. A unit can't benefit from this command ability more than once per phase."
    }
  ]
};
