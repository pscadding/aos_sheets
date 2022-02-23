import { AbilityType, BattleTraits } from '../../../models/Ability';
import { Phase } from '../../../models/Phase';

export default {
  Coalesced: [
    {
      name: 'Cold-blooded',
      type: AbilityType.BattleTrait,
      phases: [Phase.Battleshock],
      tags: ['Coalesced'],
      description: 'Ignore modifiers (pos or neg) to bravery of Coalesced units.'
    },
    {
      name: 'Predatory Fighters',
      type: AbilityType.BattleTrait,
      phases: [Phase.Combat],
      tags: ['Coalesced'],
      description: 'Add **1** to the Attacks of jaw weapons of Coalesced units.'
    },
    {
      name: 'Primeval Domain',
      type: AbilityType.BattleTrait,
      phases: [Phase.Any],
      tags: ['Coalesced'],
      description:
        'If a terrain feature is partially or wholly within the territory of Coalesced, it has Mystical and Deadly Mysterious Terrain scenery rules. ' +
        'This is in addition to any other Mysterious Terrain scenery rules it may have. The Mystical rules apply to Coalesced, and the Deadly Mysterious rules apply to others.'
    },
    {
      name: 'Scaly Skin',
      type: AbilityType.BattleTrait,
      phases: [Phase.Any],
      tags: ['Coalesced'],
      description:
        '**Subtract 1** from dmg from each successful attack on Coalesced unit (to min of 1).'
    }
  ]
} as BattleTraits;
