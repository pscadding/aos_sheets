import { AbilityType } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';
import { Unit, UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export const hobgrotSlittaz: Unit = {
  name: 'Hobgrot Slittaz',
  type: UnitType.Other,
  stats: {
    move: '5"',
    save: '6+',
    bravery: '4',
    wounds: '1'
  },
  weapons: [
    {
      name: 'Sulphuric Scrap-grenades',
      type: WeaponType.Missile,
      range: '8"',
      attacks: '1',
      toHit: '4+',
      toWound: '3+',
      rend: '-1',
      damage: '1'
    },
    {
      name: 'Slitta-knives',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '2',
      toHit: '4+',
      toWound: '5+',
      rend: '',
      damage: '1'
    }
  ],
  keywords: ['Destruction', 'Orruk Warclans', 'Orruk', 'Kruleboyz', 'Hobgrot', 'Hobgrot Slittaz'],
  abilities: [
    {
      name: 'Champion',
      type: AbilityType.Standard,
      phaseRules: [
        { type: PhaseType.Affects, phases: [Phase.Combat], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description: "1 model can be Champion. **Add 1 to Attacks** of model's melee weapon."
    },
    {
      name: 'Standard Bearer',
      type: AbilityType.Standard,
      phaseRules: [
        {
          type: PhaseType.Affects,
          phases: [Phase.Battleshock],
          turns: [Turn.Yours, Turn.Opponents]
        }
      ],
      description: '1 in every 10 can be a Banner Bearer. Can re-roll battleshock tests.'
    },
    {
      name: 'Musician',
      type: AbilityType.Standard,
      phaseRules: [
        {
          type: PhaseType.Affects,
          phases: [Phase.Movement, Phase.Shooting],
          turns: [Turn.Yours]
        }
      ],
      description:
        '1 in every 10 models in this unit can be a Noise-maker. This unit can run and still shoot later in the turn if it includes any Noise-makers.'
    },
    {
      name: "Stab 'Em Good",
      type: AbilityType.Ability,
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Combat], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description:
        'If the unmodified hit roll for an attack made with Slitta-knives is **6**, that attack scores **2** hits on the target instead of **1**. Make a wound and save roll for each hit.'
    }
  ]
};
