import { AbilityType } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';
import { Unit, UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export const terradonChief: Unit = {
  id: '',
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
      name: 'Razor-sharp Jaws (Mount)',
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
      name: 'Fly',
      type: AbilityType.Standard,
      description: 'Can fly.',
      phaseRules: []
    },
    {
      name: 'Lead from on High',
      type: AbilityType.Ability,
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Combat], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description:
        '**Subtract 1** from hit rolls for attacks made with melee weapons by models that cannot fly that target this model.'
    },
    {
      name: 'Coordinated Attack',
      type: AbilityType.CommandAbility,
      phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Movement], turns: [Turn.Yours] }],
      description:
        'When a friendly Terradon Riders unit uses **Deadly Cargo** ability while it is wholly with **12"** of a friendly model with this ability. ' +
        'Enemy unit suffers **D3 mortal wounds** for each **2+** instead of 4+.'
    }
  ]
};
