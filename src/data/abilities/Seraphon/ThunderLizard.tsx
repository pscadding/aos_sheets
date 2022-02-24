import { Ability, AbilityType, BattleTraits } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';

export const thunderLizardAbilities: Ability[] = [
  {
    name: 'Fusil of Conflagration',
    type: AbilityType.Ability,
    phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Shooting], turns: [Turn.Yours] }],
    tags: ['Artefact of Power', 'Thunder Lizard'],
    description:
      'In your shooting phase, you can **pick 1 enemy unit** within **12"** of the bearer and visible to them and roll a dice. On a **1**, this artefact cannot be used again fro the rest of the battle. ' +
      'On a **2-3**, nothing happens. On a **4-5** that enemy suffers **D3 mortal wounds**. On a **6**, that enemy unit suffers **D6 mortal wounds**.'
  },
  {
    name: 'Prime Warbeast',
    type: AbilityType.Ability,
    phaseRules: [
      { type: PhaseType.Affects, phases: [Phase.Combat], turns: [Turn.Yours, Turn.Opponents] }
    ],
    tags: ['Thunder Lizard'],
    description:
      "**Add 1** to the attacks characteristic of the weapons used by this general's mount."
  }
];

export const thunderLizardBattleTraits = {
  'Thunder Lizard': [
    {
      name: 'Mighty Beasts of War',
      type: AbilityType.Ability,
      phaseRules: [
        { type: PhaseType.Affects, phases: [Phase.NA], turns: [Turn.Yours, Turn.Opponents] }
      ],
      tags: ['Thunder Lizard'],
      description: '**Add 2** to the wounds characteristic of the **Thunder Lizard** Monsters'
    },
    {
      name: 'Trove of Old One Technology',
      type: AbilityType.CommandAbility,
      phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Shooting], turns: [Turn.Yours] }],
      phases: [Phase.Shooting],
      tags: ['Thunder Lizard'],
      description:
        'You can use this command ability at the end of your shooting phase. If you do so, **pick 1** friendly **Thunder Lizard Bastiladon**, ' +
        'or **Thunder Lizard Engine of the Gods**, wholly within **18"** of **Thunder Lizard Hero**. If that unit is a Bastiladon, it can shoot with its **Solar Engine** ' +
        'even if it has done in that phase. If unit is Engine of the Gods, you can make a cosmic engine roll for it even if you already have that phase. A unit cannot benefit more than once per phase.'
    }
  ]
} as BattleTraits;
