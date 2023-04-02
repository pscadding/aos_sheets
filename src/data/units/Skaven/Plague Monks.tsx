import { AbilityType } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';
import { Unit, UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export const plagueMonks: Unit = {
  id: '',
  name: 'Plague Monks',
  type: UnitType.Other,
  stats: {
    move: '6"',
    save: '6+',
    wounds: '1',
    bravery: '5'
  },
  weapons: [
    {
      name: 'Pair of Foetid Blades',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '2',
      toHit: '3+',
      toWound: '4+',
      rend: '-',
      damage: '1'
    },
    {
      name: 'Foetid Blade and Woe-stave',
      type: WeaponType.Melee,
      range: '2"',
      attacks: '2',
      toHit: '4+',
      toWound: '4+',
      rend: '-',
      damage: '1'
    }
  ],
  keywords: ['Chaos', 'Skaven', 'Clans Pestilens', 'Nurgle', 'Plague Monks'],
  abilities: [
    {
      name: 'Champion',
      type: AbilityType.Standard,
      phaseRules: [{ type: PhaseType.Affects, phases: [Phase.Hero], turns: [Turn.Yours] }],
      description: '1 model in this unit can be a Bringer-of-the-Word.'
    },
    {
      name: 'Standard Bearer',
      type: AbilityType.Ability,
      phaseRules: [
        {
          type: PhaseType.Affects,
          phases: [Phase.Combat],
          turns: [Turn.Yours, Turn.Opponents]
        }
      ],
      description:
        '1 in every 10 models in this unit can bear an Icon of Entropy. If this unit includes any models bearing Icons of Entropy, each time a model from this unit is slain by an attack made with a melee weapon, before removing that model from play, roll a dice. On a **6**, pick 1 enemy unit within **3"** of the slain model. That unit suffers **1 mortal wound**.'
    },
    {
      name: 'Musician',
      type: AbilityType.Ability,
      phaseRules: [
        { type: PhaseType.Affects, phases: [Phase.Charge, Phase.Movement], turns: [Turn.Yours] }
      ],
      description:
        '1 in every 10 models in this unit can be a Plague Harbinger. Add 1 to run rolls and charge rolls for this unit if it has one.'
    },
    {
      name: 'Book of Woes',
      type: AbilityType.Ability,
      phaseRules: [
        {
          type: PhaseType.UsedIn,
          phases: [Phase.Hero],
          turns: [Turn.Yours]
        }
      ],
      description:
        'In your hero phase, you can pick 1 enemy unit within **13"** of this unit’s Bringer-of-the-Word and roll a dice. On a **1-2, nothing happens**. On a **3-4**, that unit suffers **1 mortal wound**. On a **5-6**, that unit suffers **D3 mortal wounds**. This ability has no effect on **NURGLE** units.'
    },
    {
      name: 'Foetid Weapons',
      type: AbilityType.Ability,
      phaseRules: [
        { type: PhaseType.Affects, phases: [Phase.Combat], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description:
        'If the unmodified hit roll for an attack made with a melee weapon by this unit is **6**, that attack has a Rend characteristic of **-2** instead of **-**.'
    },
    {
      name: 'Frenzied Assault',
      type: AbilityType.Ability,
      phaseRules: [
        { type: PhaseType.Affects, phases: [Phase.Combat], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description:
        "**Add 1** to the Attacks characteristic of this unit's melee weapons if it made a charge move in the same turn."
    }
  ]
};
