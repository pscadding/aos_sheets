import { AbilityType } from '../../../models/Ability';
import { Phase } from '../../../models/Phase';
import { UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export default {
  name: 'Gutrippaz',
  type: UnitType.Battleline,
  stats: {
    move: '5"',
    save: '5+',
    bravery: '5',
    wounds: '2'
  },
  weapons: [
    {
      name: 'Wicked Stickka',
      type: WeaponType.Melee,
      range: '2"',
      attacks: '2',
      toHit: '4+',
      toWound: '4+',
      rend: '',
      damage: '1'
    },
    {
      name: 'Wicked Hacker',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '2',
      toHit: '4+',
      toWound: '3+',
      rend: '',
      damage: '1'
    }
  ],
  keywords: ['Destruction', 'Orruk Warclans', 'Orruk', 'Kruleboyz', 'Gutrippaz'],
  abilities: [
    {
      name: 'Champion',
      type: AbilityType.Standard,
      phases: [Phase.Combat],
      description: "1 model can be Champion. **Add 1 to Attacks** of model's melee weapon."
    },
    {
      name: 'Standard Bearer',
      type: AbilityType.Standard,
      phases: [Phase.Battleshock],
      description: '1 in every 10 can be a Banner Bearer. **Add 1 to Bravery**.'
    },
    {
      name: 'Scare Taktikz',
      type: AbilityType.Ability,
      phases: [Phase.Charge, Phase.Combat],
      description:
        'At start of charge phase, if unit more than 3" from enemy, **pick 1 enemy within 12"** that not Hero or Monster, roll **2D6**. **Add 1** to the roll for every 5 models in this unit. ' +
        'If roll is equal to or greater than Bravery of enemy, **subtract 1 from hit rolls for enemy unit** attacks against this unit, until end of turn.'
    }
  ]
};
