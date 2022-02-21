import { AbilityType } from '../../../models/Ability';
import { Phase } from '../../../models/Phase';
import { UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export const stegadon = {
  name: 'Stegadon',
  type: UnitType.Behemoth,
  stats: {
    move: '*',
    save: '4+',
    wounds: '10',
    bravery: '5'
  },
  weapons: [
    {
      name: 'Meteoric Javelins',
      type: WeaponType.Missile,
      range: '8"',
      attacks: '4',
      toHit: '5+',
      toWound: '4+',
      rend: '',
      damage: '1'
    },
    {
      name: 'Sunfire Throwers',
      type: WeaponType.Missile,
      range: '8"',
      attacks: '1',
      toHit: '*',
      toWound: '*',
      rend: '*',
      damage: '*'
    },
    {
      name: 'Massive Horns',
      type: WeaponType.Melee,
      range: '2"',
      attacks: '2',
      toHit: '3+',
      toWound: '3+',
      rend: '-1',
      damage: '*'
    },
    {
      name: 'Grinding Jaws',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '2',
      toHit: '3+',
      toWound: '3+',
      rend: '-1',
      damage: '2'
    },
    {
      name: 'Crushing Stomps',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '*',
      toHit: '3+',
      toWound: '3+',
      rend: '-1',
      damage: '2'
    }
  ],
  keywords: ['Order', 'Seraphon', 'Skink', 'Monster', 'Stegadon'],
  abilities: [
    {
      name: 'Damage Table',
      type: AbilityType.DamageTable,
      description: '',
      columns: ['Wounds Suffered', 'Move', 'Massive Horns', 'Crushing Stomps'],
      rows: [
        ['0-2', '8"', '4', '5'],
        ['3-4', '7"', '3', '4'],
        ['5-6', '6"', '2', '3'],
        ['7-8', '5"', '2', '2'],
        ['9+', '4"', '1', '1']
      ],
      phases: [Phase.NA]
    },
    {
      name: 'Armoured Crest',
      type: AbilityType.Ability,
      phases: [Phase.Combat],
      description:
        'At the start of the combat phase, you can **pick 1 enemy unit** within **3"** of this model and that has **up to 5 models**. ' +
        'If you do so, until the end of that phase, **add 1** to save rolls for attacks made by that unit that target this model.'
    },
    {
      name: 'Gout of Sunfire',
      type: AbilityType.Ability,
      phases: [Phase.Shooting],
      description:
        'Do not use attack sequence for Sunfire Throwers. Instead, roll a number of dice equal to the number of models from the target unit within **8"** of the attacking model.' +
        'For each **5+**, the target unit suffers **1 mortal wound**.'
    },
    {
      name: 'Steadfast Majesty',
      type: AbilityType.Ability,
      phases: [Phase.Battleshock],
      filterUnitKeywords: ['Skink', 'Skinks'],
      description:
        'You can re-roll battleshot tests for friendly **Skink** units while they are wholly within **18"** of any friendly Stegadons.'
    },
    {
      name: 'Unstoppable Stampede',
      type: AbilityType.Ability,
      phases: [Phase.Charge],
      description:
        '**Roll 1 dice** for each enemy unit that is withing **1"** of this model when this model finishes a charge move. On a **3+**, that enemy unit suffers **D3 mortal wounds**.'
    }
  ]
};

export const stegadonWithSkinkChief = {
  ...stegadon,
  name: 'Stegadon with Skink Chief',
  type: UnitType.Leader,
  weapons: [
    ...stegadon.weapons,
    {
      name: 'Meteoric Warspear',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '3',
      toHit: '3+',
      toWound: '3+',
      rend: '-1',
      damage: '1'
    }
  ],
  keywords: [...stegadon.keywords, 'Hero'],
  abilities: [
    ...stegadon.abilities,
    {
      name: 'Coordinated Strike',
      type: AbilityType.CommandAbility,
      phases: [Phase.Charge],
      filterUnitKeywords: ['Skink', 'Skinks'],
      description:
        'You can use this command ability at the start of the combat phase. If you do so, **pick 1** friendly **Skink** unit wholly within **24"** of a friendly Stegadon Hero with this ability. ' +
        'Until end of phase, **add 1** to attacks of melee weapons used by that skink unit. A unit cannot benefit from this command more than once per phase.'
    }
  ]
};
