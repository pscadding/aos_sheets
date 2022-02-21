import { AbilityType } from '../../../models/Ability';
import { Phase } from '../../../models/Phase';
import { UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export default {
  name: 'Terradon Riders',
  type: UnitType.Other,
  stats: {
    move: '16"',
    save: '6+',
    wounds: '3',
    bravery: '5'
  },
  weapons: [
    {
      name: 'Sunleech Bolas',
      type: WeaponType.Missile,
      range: '6"',
      attacks: 'D6',
      toHit: '4+',
      toWound: '3+',
      rend: '',
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
  keywords: ['Order', 'Seraphon', 'Skink', 'Terradon', 'Terradon Riders'],
  abilities: [
    {
      name: 'Terradon Rider Alpha',
      type: AbilityType.Standard,
      description: "Add **1** to attacks alpha's **missile** weapons.",
      phases: [Phase.Shooting]
    },
    {
      name: 'Fly',
      type: AbilityType.Standard,
      description: 'Can fly.',
      phases: [Phase.Any]
    },
    {
      name: 'Deadly Cargo',
      type: AbilityType.Ability,
      description:
        'Once per battle, after finishing moving, **pick 1** enemy unity and **roll 1** dice for each model in this unit that passed across any models from that enemy unit. For each **4+** that enemy unit suffers **D3 mortal wounds**.',
      phases: [Phase.Movement]
    }
  ]
};
