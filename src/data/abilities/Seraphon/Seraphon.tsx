import { AbilityType, BattleTraits } from '../../../models/Ability';
import { Phase } from '../../../models/Phase';

export default {
  Seraphon: [
    {
      name: 'Contemplations of the Ancient Ones',
      type: AbilityType.BattleTrait,
      phases: [Phase.Hero],
      filterUnitKeywords: ['Slann'],
      description:
        'At end of your Hero phase, pick **1** friendly **Slann** replace the spell they know from the **Lore of Celestial Domination** table. Choose or roll for the new spell, rolling again if you generate the previous spell.'
    },
    {
      name: 'Sacred Asterisms',
      type: AbilityType.BattleTrait,
      phases: [Phase.Hero],
      description:
        'At the start of your hero phase pick **1** of the following until your next hero phase: **"The Great Drake"**, **"The Hunter\'s Steed"**, and **"The Sage\'s Staff"**'
    },
    {
      name: 'The Great Drake',
      type: AbilityType.BattleTrait,
      phases: [Phase.Combat],
      description:
        "If picked (Sacred Asterisms), in combat phase, pick **1** friendly **Seraphon Hero**. Until end of that phase you can **add 1** to attacks of hero's melee weapons"
    },
    {
      name: "The Hunter's Steed",
      type: AbilityType.BattleTrait,
      phases: [Phase.Charge, Phase.Movement],
      description:
        'If picked (Sacred Asterisms), **Add 1** to run rolls and charge rolls for Seraphon units.'
    },
    {
      name: "The Sage's Staff",
      type: AbilityType.BattleTrait,
      phases: [Phase.Hero],
      description:
        'If picked (Sacred Asterisms), **pick 1** Seraphon Wizard. You can **add 1** to casting or dispelling rolls and **add 1** to unbinding rolls.'
    }
  ]
} as BattleTraits;
