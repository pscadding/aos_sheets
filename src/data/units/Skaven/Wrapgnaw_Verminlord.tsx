import { AbilityType } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';
import { Unit, UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export const warpgnawVerminlord: Unit = {
  id: '',
  name: 'Warpgnaw Verminlord',
  type: UnitType.Leader,
  stats: {
    move: '*',
    save: '4+',
    wounds: '12',
    bravery: '10'
  },
  weapons: [
    {
      name: 'Prehensile Tail',
      type: WeaponType.Missile,
      range: '6"',
      attacks: '*',
      toHit: '3+',
      toWound: '3+',
      rend: '-1',
      damage: '1'
    },
    {
      name: 'Gnaw-glaive',
      type: WeaponType.Melee,
      range: '2"',
      attacks: '4',
      toHit: '3+',
      toWound: '3+',
      rend: '-2',
      damage: '*'
    }
  ],
  keywords: [
    'Chaos',
    'Skaven',
    'Masterclan',
    'Daemon',
    'Verminlord',
    'Monster',
    'Hero',
    'Wizard',
    'Warpgnaw Verminlord'
  ],
  abilities: [
    {
      name: 'Wizard',
      type: AbilityType.Standard,
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Hero], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description: 'Cast 1 spell, unbind 1 spell'
    },
    {
      name: 'Damage Table',
      type: AbilityType.DamageTable,
      phaseRules: [],
      description: '',
      columns: ['Wounds Suffered', 'Move', 'Prehensile Tail', 'Gnaw-glaive'],
      rows: [
        ['0-4', '12"', '4', '5'],
        ['5-7', '10"', '3', '4'],
        ['8-9', '8"', '2', '3'],
        ['10+', '6"', '1', '2']
      ]
    },
    {
      name: 'Protection of the Horned Rat',
      type: AbilityType.Ability,
      description: 'The Model has a ward of **5+**',
      phaseRules: [
        {
          type: PhaseType.Affects,
          phases: [Phase.Hero, Phase.Charge, Phase.Combat, Phase.Shooting],
          turns: [Turn.Yours, Turn.Opponents]
        }
      ]
    },
    {
      name: 'Realm Guide',
      type: AbilityType.Ability,
      phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Movement], turns: [Turn.Yours] }],
      description:
        'Instead of setting up this model on the battlefield, you can place this model to one side and say that it is moving through the cracks in reality as a reserve unit.' +
        'If you do so, at the end of your movement phase, you can set up this model wholly within **6"** of a Gnawhole in your army and more than **9"** from all enemy models.'
    },
    {
      name: 'Terrifying',
      type: AbilityType.Ability,
      phaseRules: [
        {
          type: PhaseType.Affects,
          phases: [Phase.Battleshock],
          turns: [Turn.Yours, Turn.Opponents]
        }
      ],
      description:
        'Subtract **1** from the Bravery characteristic of enemy units while they are within **3"** of any models with this ability.'
    },
    {
      name: 'Splinter-screech',
      type: AbilityType.Ability,
      phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Hero], turns: [Turn.Yours] }],
      description:
        'Splinter-screech is a spell that has a casting value of **5** and a range of **13"**. If successfully cast, pick 1 enemy model within range and visible to the caster, and roll a dice. If the roll is equal to or greater than that model\'s Wounds characteristic, it is slain.'
    }
  ]
};
