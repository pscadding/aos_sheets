import { AbilityType } from '../../../models/Ability';
import { Phase } from '../../../models/Phase';
import { UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export default {
  name: 'Terradon Chief',
  type: UnitType.Other,
  stats: {
    move: '16"',
    save: '6+',
    wounds: '5',
    bravery: '6'
  },
  weapons: [
    {
      name: 'Skyblade',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '3',
      toHit: '3+',
      toWound: '4+',
      rend: '-1',
      damage: '1'
    },
    {
      name: 'Razor-sharp Jaws',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '4',
      toHit: '4+',
      toWound: '4+',
      rend: '',
      damage: '1'
    }
  ],
  keywords: ['Order', 'Seraphon', 'Skink', 'Terradon', 'Hero', 'Terradon Chief'],
  abilities: [
    {
      name: 'Mount',
      type: AbilityType.Standard,
      description: "Unit's Terradons attack with their Razor-sharp jaws.",
      phases: [Phase.NA]
    },
    {
      name: 'Fly',
      type: AbilityType.Standard,
      description: 'Can fly.',
      phases: [Phase.Any]
    },
    {
      name: 'Lead from on High',
      type: AbilityType.Ability,
      phases: [Phase.Combat],
      description:
        '**Subtract 1** from hit rolls for attacks made with melee weapons by models that cannot fly that target this model.'
    },
    {
      name: 'Coordinated Attack',
      type: AbilityType.CommandAbility,
      phases: [Phase.Movement],
      description:
        'When a friendly Terradon Riders unit uses **Deadly Cargo** ability while it is wholly with **12"** of a friendly model with this ability. ' +
        'Enemy unit suffers **D3 mortal wounds** for each **2+** instead of 4+.'
    }
  ]
};
