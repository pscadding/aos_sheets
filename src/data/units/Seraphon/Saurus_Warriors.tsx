import { AbilityType } from '../../../models/Ability';
import { Phase } from '../../../models/Phase';
import { UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export default {
  name: 'Saurus Warriors',
  type: UnitType.Battleline,
  stats: {
    move: '5"',
    save: '4+',
    wounds: '1',
    bravery: '8'
  },
  weapons: [
    {
      name: 'Celestite Club',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '1',
      toHit: '4+',
      toWound: '3+',
      rend: '-1',
      damage: '1'
    },
    {
      name: 'Celestite Spear',
      type: WeaponType.Melee,
      range: '2"',
      attacks: '1',
      toHit: '4+',
      toWound: '3+',
      rend: '',
      damage: '1'
    },
    {
      name: 'Powerful Jaws',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '1',
      toHit: '5+',
      toWound: '4+',
      rend: '',
      damage: '1'
    }
  ],
  keywords: ['Order', 'Seraphon', 'Saurus', 'Saurus Wariors'],
  abilities: [
    {
      name: 'Saurus Warrior Alpha',
      type: AbilityType.Standard,
      description: 'Add **1** to attacks of Alphas Celestite Club | Spear.',
      phases: [Phase.Combat]
    },
    {
      name: 'Stardrake Icon Bearer',
      type: AbilityType.Standard,
      description:
        '**1** in every **5** models in unit can be Stardrake Icon Bearer. Subtract **1** from the bravery of enemy units within **6"** of the bearers',
      phases: [Phase.Battleshock]
    },
    {
      name: 'Wardrummer',
      type: AbilityType.Standard,
      description:
        '**1** in every **5** models in unit can be Wardrummer. Reroll charge roles for unit.',
      phases: [Phase.Charge]
    },
    {
      name: 'Ordered Coholt',
      type: AbilityType.Ability,
      description: 'Add **1** to attacks of weapons used by unit while has 15 or more model',
      phases: [Phase.Combat]
    }
  ]
};
