import { AbilityType } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';
import { Unit, UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export const stormfiends: Unit = {
  name: 'Stormfiends',
  type: UnitType.Other,
  stats: {
    move: '6"',
    save: '4+',
    wounds: '6',
    bravery: '6'
  },
  weapons: [
    {
      name: 'Ratling Cannons',
      type: WeaponType.Missile,
      range: '12"',
      attacks: '3D6',
      toHit: '3+',
      toWound: '3+',
      rend: '-1',
      damage: '1'
    },
    {
      name: 'Windlaunchers',
      type: WeaponType.Missile,
      range: '24"',
      attacks: '3',
      toHit: '4+',
      toWound: '3+',
      rend: '-3',
      damage: 'D3'
    },
    {
      name: 'Warpfire Projectors',
      type: WeaponType.Missile,
      range: '8"',
      attacks: '*',
      toHit: '*',
      toWound: '*',
      rend: '*',
      damage: '*'
    },
    {
      name: 'Doomflayer Gauntlets',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '2D3',
      toHit: '3+',
      toWound: '3+',
      rend: '-2',
      damage: 'D3'
    },
    {
      name: 'Grinderfists',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '4',
      toHit: '3+',
      toWound: '3+',
      rend: '-2',
      damage: '2'
    },
    {
      name: 'Shock Gauntlets',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '4',
      toHit: '4+',
      toWound: '3+',
      rend: '-',
      damage: '2'
    },
    {
      name: 'Clubbing Blows',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '4',
      toHit: '4+',
      toWound: '3+',
      rend: '-',
      damage: '2'
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
      name: 'Elite',
      type: AbilityType.Standard,
      phaseRules: [
        { type: PhaseType.Affects, phases: [Phase.Any], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description: "Can issue commands to it's own unit."
    },
    {
      name: 'Doomflayer Gauntlets',
      type: AbilityType.Ability,
      description:
        'Add 1 to the Attacks characteristic of Doomflayer Gauntlets if the attacking model made a charge move in the same turn.',
      phaseRules: [
        {
          type: PhaseType.UsedIn,
          phases: [Phase.Combat],
          turns: [Turn.Yours, Turn.Opponents]
        }
      ]
    },
    {
      name: 'Grinderfist Tunnellers',
      type: AbilityType.Ability,
      phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Movement], turns: [Turn.Yours] }],
      description:
        'If this unit includes any models armed with Grinderfists, instead of setting up this unit on the battlefield, you can place it to one side and say that it is set up underground as a reserve unit. At the end of your movement phase, you can set up this unit on the battlefield, more than **9"** from all enemy units.'
    },
    {
      name: 'Shock Gauntlets',
      type: AbilityType.Ability,
      phaseRules: [
        {
          type: PhaseType.Affects,
          phases: [Phase.Battleshock],
          turns: [Turn.Yours, Turn.Opponents]
        }
      ],
      description:
        'If the unmodified hit roll for an attack made with Shock Gauntlets is **6**, that attack scores **D6** hits on the target instead of **1**. Make a wound roll and save roll for each hit.'
    }
  ]
};
