import { AbilityType } from '../../../models/Ability';
import { Phase } from '../../../models/Phase';
import { UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export const bastildonSolar = {
  name: 'Bastiladon',
  subName: 'with Solar Engine',
  type: UnitType.Behemoth,
  stats: {
    move: '5',
    save: '*',
    wounds: '10',
    bravery: '6'
  },
  weapons: [
    {
      name: 'Solar Engine',
      type: WeaponType.Missile,
      range: '24"',
      attacks: '*',
      toHit: '4+',
      toWound: '3+',
      rend: '-1',
      damage: '2'
    },
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
      name: 'Meteoric Warspear',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '3',
      toHit: '3+',
      toWound: '3+',
      rend: '-1',
      damage: '1'
    },
    {
      name: 'Bludgeoning Tail',
      type: WeaponType.Melee,
      range: '2"',
      attacks: '3',
      toHit: '3+',
      toWound: '3+',
      rend: '-1',
      damage: 'D3'
    }
  ],
  keywords: ['Order', 'Seraphon', 'Skink', 'Monster', 'Bastiladon'],
  abilities: [
    {
      name: 'Damage Table',
      type: AbilityType.DamageTable,
      description: '',
      columns: ['Wounds Suffered', 'Save', 'Solar Engine'],
      rows: [
        ['0-2', '1+', '9'],
        ['3-4', '2+', '8'],
        ['5-6', '3+', '7'],
        ['7-8', '4+', '6'],
        ['9+', '4+', '5']
      ],
      phases: [Phase.NA]
    },
    {
      name: 'Light of the Heavens',
      type: AbilityType.Ability,
      phases: [Phase.Shooting],
      description:
        '**Add 1** to the dmg inflicted made by Solar Engine, that targets **Chaos Daemon** unit.'
    }
  ]
};
