import { AbilityType } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';
import { Unit, UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export const swampbossSkumdrekk: Unit = {
  id: '',
  name: 'Swampboss Skumdrekk',
  type: UnitType.Leader,
  stats: {
    move: '8"',
    save: '4+',
    bravery: '6',
    wounds: '15'
  },
  weapons: [
    {
      name: 'Spiked Snatcha-stikk',
      type: WeaponType.Melee,
      range: '3"',
      attacks: '4',
      toHit: '3+',
      toWound: '3+',
      rend: '-1',
      damage: '2'
    },
    {
      name: 'Grasping Talons',
      type: WeaponType.Melee,
      range: '3"',
      attacks: '*',
      toHit: '3+',
      toWound: '3+',
      rend: '-1',
      damage: '2'
    },
    {
      name: 'Noisome Bite',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '1',
      toHit: '3+',
      toWound: '2+',
      rend: '-1',
      damage: '*'
    },
    {
      name: 'Trashing Tail',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '2',
      toHit: '3+',
      toWound: '*',
      rend: '-2',
      damage: '2'
    }
  ],
  keywords: [
    'Destruction',
    'Orruk Warclans',
    'Orruk',
    'Kruleboyz',
    'Sludgeraker Beast',
    "Grinnin' Blades",
    'Hero',
    'Monster',
    'Snatchaboss',
    'Swampboss Skumdrekk'
  ],
  abilities: [
    {
      name: 'Mount',
      type: AbilityType.Standard,
      phaseRules: [
        { type: PhaseType.Affects, phases: [Phase.Combat], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description:
        "This unit's Sludgeraker Beast is armed with Grasping Talons, a Noisome Bite and a Thrashing Tail. The Venom-encrusted Weapons battle trait applies to attacks made with a Sludgeraker Beast's Grasping Talons and Noisome Bite even though it is a mount."
    },
    {
      name: 'Damage Table',
      type: AbilityType.DamageTable,
      phaseRules: [],
      description: '',
      columns: ['Wounds Suffered', 'G Talons', 'N Bite', 'T Tail'],
      rows: [
        ['0-5', '6', 'D3+4', '2+'],
        ['6-8', '5', 'D3+3', '3+'],
        ['9-11', '3', 'D3+1', '5+']
      ]
    },
    {
      name: 'Bet-master',
      type: AbilityType.Ability,
      phaseRules: [
        {
          type: PhaseType.UsedIn,
          phases: [Phase.NA],
          turns: [Turn.Yours, Turn.Opponents]
        },
        {
          type: PhaseType.Affects,
          phases: [Phase.Any],
          turns: [Turn.Yours, Turn.Opponents]
        }
      ],
      description:
        "If this unit is part of your army, after deployment but before the first battle round begins, you can pick **1** friendly **HOBGROT** unit to be the Kountin' Krew and 1 friendly unit to be the bet. You cannot pick this unit or the Kountin' Krew to be the bet." +
        "If the bet is the first friendly unit to be destroyed during the battle, you can pick 1 extra triumph enhancement for your army that can be used during the battle and even if the points total of your army is not less than that of your opponent's army. The unit that is chosen to benefit from the triumph must be either this unit or the Kountin' Krew."
    },
    {
      name: 'Sludgeraker Venom',
      type: AbilityType.Ability,
      phaseRules: [
        {
          type: PhaseType.UsedIn,
          phases: [Phase.Combat, Phase.Shooting],
          turns: [Turn.Yours, Turn.Opponents]
        }
      ],
      description:
        'Add **1** to the number of mortal wounds caused by the Venom-encrusted Weapons battle trait if the unmodified hit roll was **6** and the attacking unit is wholly within **12"** of any friendly units with this ability.'
    },
    {
      name: 'Expert Snatch and Grab',
      type: AbilityType.Ability,
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Combat], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description:
        'Once per battle, at the end of the combat phase, you can pick 1 enemy model that has a Wounds characteristic of **7** or less, does not have a mount and is within **3"** of this unit, and roll **2D6**. If the roll is equal to or greater than that enemy model\'s Wounds characteristic, it is slain.'
    }
  ]
};
