import { AbilityType } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';
import { Unit, UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export const warlockBombardier: Unit = {
  name: 'Warlock Bombardier',
  type: UnitType.Leader,
  stats: {
    move: '6',
    save: '5+',
    wounds: '5',
    bravery: '5'
  },
  weapons: [
    {
      name: 'Doomrocket',
      type: WeaponType.Missile,
      range: '18"',
      attacks: 'D3',
      toHit: '4+',
      toWound: '3+',
      rend: '-1',
      damage: '3'
    },
    {
      name: 'Firing Pole',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '1',
      toHit: '4+',
      toWound: '4+',
      rend: '',
      damage: '1'
    }
  ],
  keywords: ['Chaos', 'Skaven', 'Clans Skryre', 'Hero', 'Wizard', 'Warlock Bombardier'],
  abilities: [
    {
      name: 'Wizard',
      type: AbilityType.Standard,
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Hero], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description: 'Cast 1 spell, unbind 1 spell'
    },
    {
      name: 'More-more Doomrocket!',
      type: AbilityType.Ability,
      description:
        'Before you make a hit roll for an attack made with a Doomrocket, you can say that the engineer has overloaded its warhead. If you do so, until the end of that phase, the Attacks characteristic of that weapon is **D6 instead of D3**. However, for each unmodified hit roll of 1, this unit suffers **D3 mortal wounds** after all of its attacks have been resolved.',
      phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Shooting], turns: [Turn.Yours] }]
    },
    {
      name: 'Warp Lightning',
      type: AbilityType.Ability,
      phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Hero], turns: [Turn.Yours] }],
      description:
        'Warp Lightning is a spell that has a **casting value of 5** and a **range of 13"**. If successfully cast, **pick 1 enemy unit** within range and visible to the caster. That unit suffers **D3 mortal wounds**. \n' +
        'Alternatively, before making the casting roll, you can say that this unit will use its warp-power accumulator to augment the spell. If you do so, and the spell is successfully cast and not unbound, **pick 1 enemy unit** within range and visible to the caster. That unit suffers **D6 mortal wounds**. However, if the spell is not successfully cast or is unbound, this unit **suffers D6 mortal wounds** that cannot be negated.'
    }
  ]
};
