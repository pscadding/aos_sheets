import { AbilityType } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';
import { Unit, UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export const astreiaSolbright: Unit = {
  name: 'Astreia Solbright',
  type: UnitType.Leader,
  stats: {
    move: '12"',
    save: '3+',
    wounds: '8',
    bravery: '10'
  },
  weapons: [
    {
      name: 'Aetherstave',
      type: WeaponType.Melee,
      range: '2"',
      attacks: '4',
      toHit: '3+',
      toWound: '3+',
      rend: '-1',
      damage: '2'
    },
    {
      name: 'Monsterous Claws',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '3',
      toHit: '3+',
      toWound: '3+',
      rend: '-1',
      damage: 'D3'
    }
  ],
  keywords: [
    'Order',
    'Stormcast Eternals',
    'Hammers of Sigmar',
    'Sacrosanct',
    'Hero',
    'Wizard',
    'Dracoline',
    'Lord',
    'Lord-Arcanum',
    'Astreia Solbright'
  ],
  abilities: [
    {
      name: 'Cycle of the Storm',
      type: AbilityType.Ability,
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Any], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description:
        'Once per turn, before you allocate a wound or mortal wound to another friendly Stormcast Eternals unit within **18"** of this unit, ad that wound or mortal wound would cause a model in that unit to be slain, ' +
        "you can say that this unit will capture and return that warrior's soul. If you do so, that wound or mortal wound is negated."
    },
    {
      name: 'Soul Energy of the First Host',
      type: AbilityType.Ability,
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Combat], turns: [Turn.Yours, Turn.Opponents] }
      ],
      filterUnitKeywords: ['Hammers of sigmar', 'sacrosanct'],
      description:
        'At the start of the combat phase, you can **pick 1** friendly **HAMMERS OF SIGMAR SACROSANCT** unit **wholly within 12"** of this unit. **Add 1 to save rolls** for attacks made with melee weapons that target that unit until the end of that phase.'
    },
    {
      name: 'Thunderous Pounce',
      type: AbilityType.Ability,
      phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Charge], turns: [Turn.Yours] }],
      description: 'You can re-roll charge rolls for this unit.'
    },
    {
      name: 'Lightning Pulse',
      type: AbilityType.Spell,
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Hero], turns: [Turn.Yours] },
        {
          type: PhaseType.UsedIn,
          phases: [Phase.Shooting, Phase.Combat],
          turns: [Turn.Yours, Turn.Opponents]
        }
      ],
      description:
        'Casting value of **6** and a range of **6"**. If successfully cast, **subtract 1 from hit rolls** for attacks made by enemy units within range until your next hero phase.'
    }
  ]
};
