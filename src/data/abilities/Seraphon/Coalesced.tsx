import { Ability, AbilityType, BattleTraits } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';

export const coalescedBattleTraits: BattleTraits = {
  Coalesced: [
    {
      name: 'Cold-blooded',
      type: AbilityType.BattleTrait,
      phaseRules: [
        {
          type: PhaseType.Affects,
          phases: [Phase.Battleshock],
          turns: [Turn.Yours, Turn.Opponents]
        }
      ],
      tags: ['Coalesced'],
      description: 'Ignore modifiers (pos or neg) to bravery of Coalesced units.'
    },
    {
      name: 'Predatory Fighters',
      type: AbilityType.BattleTrait,
      phaseRules: [
        { type: PhaseType.Affects, phases: [Phase.Combat], turns: [Turn.Yours, Turn.Opponents] }
      ],
      tags: ['Coalesced'],
      description: 'Add **1** to the Attacks of jaw weapons of Coalesced units.'
    },
    {
      name: 'Primeval Domain',
      type: AbilityType.BattleTrait,
      phaseRules: [
        { type: PhaseType.Affects, phases: [Phase.Any], turns: [Turn.Yours, Turn.Opponents] }
      ],
      tags: ['Coalesced'],
      description:
        'If a terrain feature is partially or wholly within the territory of Coalesced, it has Mystical and Deadly Mysterious Terrain scenery rules. ' +
        'This is in addition to any other Mysterious Terrain scenery rules it may have. The Mystical rules apply to Coalesced, and the Deadly Mysterious rules apply to others.'
    },
    {
      name: 'Scaly Skin',
      type: AbilityType.BattleTrait,
      phaseRules: [
        { type: PhaseType.Affects, phases: [Phase.Any], turns: [Turn.Yours, Turn.Opponents] }
      ],
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
    phaseRules: [
      { type: PhaseType.UsedIn, phases: [Phase.Hero], turns: [Turn.Yours] },
      {
        type: PhaseType.Affects,
        phases: [Phase.Movement, Phase.Combat, Phase.Shooting, Phase.Charge],
        turns: [Turn.Yours, Turn.Opponents]
      }
    ],
    tags: ['Mount trait', 'Coalesced', 'White Dwarf'],
    description:
      'Once per battle in your hero phase, you can declare this mount will be either **swift** or **savage**. For **swift** until next hero phase can run and still shoot and/or charge in same turn. ' +
      'For **savage** until next hero phase, **add 1** to attacks characteristic of melee weapons used by mount.'
  }
];
