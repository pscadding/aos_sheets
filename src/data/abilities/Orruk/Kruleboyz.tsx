import { Ability, AbilityType, BattleTraits } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';

export const kruleboyzBattleTraits: BattleTraits = {
  Kruleboyz: [
    {
      name: 'Dirty Tricks',
      type: AbilityType.BattleTrait,
      phaseRules: [
        {
          type: PhaseType.Affects,
          phases: [Phase.Hero],
          turns: [Turn.Yours]
        }
      ],
      tags: ['Kruleboyz'],
      description: ''
    },
    {
      name: 'Kruleboyz Waagh!',
      type: AbilityType.BattleTrait,
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Combat], turns: [Turn.Yours, Turn.Opponents] }
      ],
      tags: ['Kruleboyz'],
      description:
        'Once per battle, in the combat phase, when you pick a friendly KRULEBOYZ general to fight, you can say that they are calling a Kruleboyz Waaagh!. If you do so, pick up to 2 other friendly KRULEBOYZ units wholly within 18” of that general and that have not yet fought in that combat phase. That general and the units you picked can fight one after the other in the order of your choice.'
    },
    {
      name: 'Venom-encrusted Weapons',
      type: AbilityType.BattleTrait,
      phaseRules: [
        {
          type: PhaseType.Affects,
          phases: [Phase.Combat, Phase.Shooting],
          turns: [Turn.Yours, Turn.Opponents]
        }
      ],
      tags: ['Kruleboyz'],
      description:
        'If the unmodified hit roll for an attack made by a KRULEBOYZ ORRUK model is 6, that attack causes a number of mortal wounds to the target equal to the weapon’s Damage characteristic and the attack sequence ends (do not make a wound roll or save roll). This ability has no effect on attacks made by a mount unless noted otherwise.'
    }
  ]
};

export const kruleboyzAbilities: Ability[] = [
  {
    name: 'Eye-biter Ash',
    type: AbilityType.Ability,
    phaseRules: [
      {
        type: PhaseType.UsedIn,
        phases: [Phase.Combat],
        turns: [Turn.Yours, Turn.Opponents]
      }
    ],
    tags: ['Kruleboyz'],
    description:
      'Once per battle, at the start of the combat phase, you can say that the bearer will hurl the Eye-biter Ash at a foe. If you do so, pick **1** enemy unit within **3"** of the bearer and roll a dice. On a **1-2**, nothing happens. On a **3-4**, **subtract 1 from hit rolls** for attacks made by that unit for the rest of that phase. On a **5+**, **subtract 1** from hit rolls for attacks made by that unit for the rest of the battle.'
  },
  {
    name: 'Beastkilla Slop',
    type: AbilityType.Ability,
    phaseRules: [
      {
        type: PhaseType.UsedIn,
        phases: [Phase.Combat],
        turns: [Turn.Yours, Turn.Opponents]
      }
    ],
    tags: ['Kruleboyz'],
    description:
      'Once per battle, at the start of the combat phase, you can **pick 1** enemy MONSTER within **3"** of the bearer and roll a dice. On a **1**, nothing happens. On a **2-5**, that MONSTER suffers **D6 mortal wounds**. On a **6**, that MONSTER suffers **2D6 mortal wounds**.'
  },
  {
    name: "Mork's Eye Pebble",
    type: AbilityType.Ability,
    phaseRules: [
      {
        type: PhaseType.UsedIn,
        phases: [Phase.Shooting],
        turns: [Turn.Opponents]
      }
    ],
    tags: ['Kruleboyz'],
    description:
      'Once per battle, at the start of the enemy shooting phase, you can say the bearer will rub their Mor\'s Eye Pebble. If you do so, the bearer and all friendly units wholly within **12"** of the bearer have a **ward of 5+** until the start of the next phase.'
  },
  {
    name: 'Spiker Seeds',
    type: AbilityType.Ability,
    phaseRules: [
      {
        type: PhaseType.UsedIn,
        phases: [Phase.Charge],
        turns: [Turn.Opponents]
      }
    ],
    tags: ['Kruleboyz'],
    description:
      'Once per battle, after an enemy unit finishes a charge move within **6"** of the bearer, you can say the bearer will throw their Spiker Seeds. If you do so, roll a dice for each model in that enemy unit. For each **5+**, that enemy unit suffers **1 mortal wound**.'
  }
];
