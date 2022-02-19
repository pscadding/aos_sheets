import { AbilityType } from '../../../models/Ability';
import { Phase } from '../../../models/Phase';
import { UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export default {
  name: 'Skinks',
  type: UnitType.Battleline,
  stats: {
    move: '8"',
    save: '6+',
    wounds: '1',
    bravery: '5'
  },
  weapons: [
    {
      name: 'Meteoric Javelin',
      type: WeaponType.Missile,
      range: '8"',
      attacks: '1',
      toHit: '5+',
      toWound: '4+',
      rend: '',
      damage: '1'
    },
    {
      name: 'Boltspitter',
      type: WeaponType.Missile,
      range: '16"',
      attacks: '1',
      toHit: '5+',
      toWound: '5+',
      rend: '',
      damage: '1'
    },
    {
      name: 'Celestite Dagger',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '1',
      toHit: '5+',
      toWound: '5+',
      rend: '',
      damage: '1'
    },
    {
      name: 'Moonstone Club',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '1',
      toHit: '4+',
      toWound: '4+',
      rend: '',
      damage: '1'
    }
  ],
  keywords: ['Order', 'Seraphon', 'Skinks'],
  abilities: [
    {
      name: 'Skink Alpha',
      type: AbilityType.Standard,
      description: "Add **1** to attacks alpha's melee weapons.",
      phases: [Phase.Combat]
    },
    {
      name: 'Swarming Cohort',
      type: AbilityType.Ability,
      description: 'Add **1** to attacks of weapons used by unit while has 15 or more models',
      phases: [Phase.Shooting, Phase.Combat]
    },
    {
      name: 'Star-buckler',
      type: AbilityType.Ability,
      description: 'Add **1** to save rolls if has Star-bucklers.',
      phases: [Phase.Hero, Phase.Movement, Phase.Shooting, Phase.Combat, Phase.Charge]
    }
  ]
};
