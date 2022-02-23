import { Ability, AbilityType, BattleTraits } from '../../../models/Ability';
import { Phase } from '../../../models/Phase';

export const coalescedBattleTraits: BattleTraits = {
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
};

export const coalescedAbilities: Ability[] = [
  {
    name: 'Beastmaster',
    type: AbilityType.Ability,
    phases: [Phase.Hero, Phase.Combat, Phase.Movement, Phase.Charge, Phase.Shooting],
    tags: ['Mount trait', 'Coalesced', 'White Dwarf'],
    description:
      'Once per battle in hero phase, you can declare this mount will be either **swift** or **savage**. For **swift** until next hero phase can run and still shoot and/or charge in same turn. ' +
      'For **savage** until next hero phase, **add 1** to attacks characteristic of melee weapons used by mount.'
  }
];
