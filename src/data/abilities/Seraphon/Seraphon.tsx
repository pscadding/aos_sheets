import { Ability, AbilityType, BattleTraits } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';

export const seraphonGeneralBattleTraits: BattleTraits = {
  Seraphon: [
    {
      name: 'Contemplations of the Ancient Ones',
      type: AbilityType.BattleTrait,
      phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Hero], turns: [Turn.Yours] }],
      tags: ['Seraphon'],
      filterUnitKeywords: ['Slann'],
      description:
        'At end of your Hero phase, pick **1** friendly **Slann** replace the spell they know from the **Lore of Celestial Domination** table. Choose or roll for the new spell, rolling again if you generate the previous spell.'
    },
    {
      name: 'Sacred Asterisms',
      type: AbilityType.BattleTrait,
      phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Hero], turns: [Turn.Yours] }],
      tags: ['Seraphon'],
      description:
        'At the start of your hero phase pick **1** of the following until your next hero phase: **"The Great Drake"**, **"The Hunter\'s Steed"**, and **"The Sage\'s Staff"**'
    },
    {
      name: 'The Great Drake',
      type: AbilityType.BattleTrait,
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Combat], turns: [Turn.Yours, Turn.Opponents] }
      ],
      tags: ['Seraphon'],
      description:
        "If picked (Sacred Asterisms), in combat phase, pick **1** friendly **Seraphon Hero**. Until end of that phase you can **add 1** to attacks of hero's melee weapons"
    },
    {
      name: "The Hunter's Steed",
      type: AbilityType.BattleTrait,
      tags: ['Seraphon'],
      phaseRules: [
        { type: PhaseType.Affects, phases: [Phase.Charge, Phase.Movement], turns: [Turn.Yours] }
      ],
      description:
        'If picked (Sacred Asterisms), **Add 1** to run rolls and charge rolls for Seraphon units.'
    },
    {
      name: "The Sage's Staff",
      type: AbilityType.BattleTrait,
      tags: ['Seraphon'],
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Hero], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description:
        'If picked (Sacred Asterisms), **pick 1** Seraphon Wizard. You can **add 1** to casting or dispelling rolls and **add 1** to unbinding rolls.'
    }
  ]
};

export const seraphonGeneralAbilities: Ability[] = [
  {
    name: 'Incandescent Rectrices',
    type: AbilityType.Ability,
    enhancement: true,
    phaseRules: [
      { type: PhaseType.UsedIn, phases: [Phase.Any], turns: [Turn.Yours, Turn.Opponents] }
    ],
    tags: ['Artefact of Power', 'Seraphon', 'Skink'],
    description:
      'The first time bearer is slain, before removing them from the battlefield, roll a dice. On a **1-3, the bearer is slain**. On a **4-6, the bearer is not slain**, all wounds allocated to them are healed, and any wounds that currently remain to be allocated to them are negated.'
  },
  {
    name: 'Tide of Serpents',
    type: AbilityType.Spell,
    enhancement: true,
    phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Hero], turns: [Turn.Yours] }],
    tags: ['Seraphon', 'Skink'],
    description:
      'casting value of **8**. If successfully cast, **pick 1 enemy unit within 12"** of the caster and roll a number of dice equal to the number of models in that unit. For each **5+**, that unit suffers **1 mortal wound**.'
  }
];
