import { AbilityType } from '../../../models/Ability';
import { Phase } from '../../../models/Phase';
import { UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export default {
  name: 'Saurus Guard',
  type: UnitType.Battleline,
  stats: {
    move: '5"',
    save: '4+',
    wounds: '2',
    bravery: '8'
  },
  weapons: [
    {
      name: 'Celestite Polearm',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '2',
      toHit: '3+',
      toWound: '3+',
      rend: '-1',
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
  keywords: ['Order', 'Seraphon', 'Saurus', 'Saurus Guard'],
  abilities: [
    {
      name: 'Saurus Guard Alpha',
      type: AbilityType.Standard,
      description: 'Add **1** to attacks of Alphas Celestite Polearm.',
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
      name: 'Selfless Protectors',
      type: AbilityType.Ability,
      filterUnitKeywords: ['Slann'], // Only shows this ability if there is a unit in the army with the Slann keyword
      description:
        'Roll a dice before allocating wound | mortal wound to a friendly **Slann** while within **3"** of any units with this ability. ' +
        'On **2+** you must allocate that wound | mortal wound to a friendly unit with this ability within **3"** of that **Slann**.',
      phases: [Phase.Hero, Phase.Movement, Phase.Shooting, Phase.Combat, Phase.Charge]
    }
  ]
};
