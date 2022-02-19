import { AbilityType } from '../../../models/Ability';
import { Phase } from '../../../models/Phase';
import { UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export default {
  name: 'Skink Starpriest',
  type: UnitType.Leader,
  stats: {
    move: '8"',
    save: '5+',
    wounds: '5',
    bravery: '6'
  },
  weapons: [
    {
      name: 'Serpent Staff',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '2',
      toHit: '4+',
      toWound: '3+',
      rend: '-1',
      damage: '1'
    },
    {
      name: 'Venombolt',
      type: WeaponType.Missile,
      range: '18"',
      attacks: '2',
      toHit: '3+',
      toWound: '3+',
      rend: '-1',
      damage: '1'
    }
  ],
  keywords: ['Order', 'Seraphon', 'Skink', 'Hero', 'Wizard', 'Starpriest'],
  abilities: [
    {
      name: 'Wizard',
      type: AbilityType.Standard,
      description: 'Cast 1 spell, unbind 1 spell',
      phases: [Phase.Hero]
    },
    {
      name: 'Astral Herald',
      type: AbilityType.Ability,
      description:
        'At start of your hero phase, roll a dice. On **5+** you receive **1** command point.',
      phases: [Phase.Hero]
    },
    {
      name: 'Serpent Staff',
      type: AbilityType.Ability,
      phases: [Phase.Hero, Phase.Combat, Phase.Shooting],
      description:
        'In hero phase, you can pick **1** Seraphon unit within **12"** of this model. Until your next hero phase, if unmodified wound roll for an attack made by that ' +
        'unit is **6**, that attack inflicts **1** mortal wound on target in addition to normal damage. Unit cannot benefit from this ability more than once per phase.'
    },
    {
      name: 'Blazing Starlight',
      type: AbilityType.Spell,
      phases: [Phase.Hero],
      description:
        'Casting value of **6**. If success, pick **1** enemy unit with **18"** of caster and visible. Until your next hero phase, subtract **1** from hit rolls for attacks made by that unit.'
    }
  ]
};
