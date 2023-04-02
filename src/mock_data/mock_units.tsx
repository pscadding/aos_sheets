import { Unit, UnitType } from '../models/Unit';
import { AbilityType } from '../models/Ability';
import { Phase, PhaseType, Turn } from '../models/Phase';
import { WeaponType } from '../models/Weapon';

export const mockUnits: Unit[] = [
  {
    id: '',
    name: 'Swampcalla Shaman',
    subName: 'And Pot-Grot',
    type: UnitType.Leader,
    stats: {
      move: '5"',
      save: '5+',
      wounds: '6',
      bravery: '5'
    },
    weapons: [
      {
        name: 'Bogbark Staff',
        type: WeaponType.Melee,
        range: '3"',
        attacks: '2',
        toHit: '3+',
        toWound: '3+',
        rend: '-1',
        damage: 'D3'
      },
      {
        name: 'Back-up Stabba',
        type: WeaponType.Melee,
        range: '1"',
        attacks: '2',
        toHit: '4+',
        toWound: '4+',
        rend: '',
        damage: '1'
      }
    ],
    keywords: [
      'Destruction',
      'Orruk Warclans',
      'Orruk',
      'Kruleboyz',
      'Hero',
      'Wizard',
      'Swampcalla Shaman',
      'Swampcalla Shaman and Pot-grot'
    ],
    abilities: [
      {
        name: 'Companion',
        type: AbilityType.Standard,
        description: 'Pot-grot must stay within 1" of Shaman. Treated as a single model.',
        phaseRules: []
      },
      {
        name: 'Wizard',
        type: AbilityType.Standard,
        description: 'Cast 1 spell, unbind 1 spell',
        phaseRules: [
          { type: PhaseType.UsedIn, turns: [Turn.Opponents, Turn.Yours], phases: [Phase.Hero] }
        ]
      },
      {
        name: 'Poisons and Elixars',
        type: AbilityType.Ability,
        phaseRules: [
          { type: PhaseType.UsedIn, turns: [Turn.Yours], phases: [Phase.Hero] },
          { type: PhaseType.Affects, turns: [Turn.Yours, Turn.Opponents], phases: [Phase.Any] }
        ],
        description:
          'At start of your **hero phase**, if this unit is more than **3"** from all enemy units, instead of casting or dispelling a spell, it can say it is brewing either a poison or an elixir. ' +
          'If you do, pick **1 friendly Kruleboyz Orruk** unit wholly within **12"**, more than **3"** from enemy and with at least one model within **3"**, to be given poison or elixar. ' +
          'One poison or elixir per unit in same hero phase. Effects last until until your next hero phase. If given poison, when using **"Venom-encrusted Weapons"** battle trait, mortal wounds are caused on unmodified hit roll of **+5** instead of 6. ' +
          'If given elixir, **add 1** to save rolls for attacks that target that unit.'
      },
      {
        name: 'Summon Boggy Mist',
        type: AbilityType.Spell,
        phaseRules: [
          { type: PhaseType.UsedIn, turns: [Turn.Yours], phases: [Phase.Hero] },
          { type: PhaseType.Affects, turns: [Turn.Yours, Turn.Opponents], phases: [Phase.Charge] }
        ],
        description:
          'Casting value **7**. On success until next hero phase, **add 1 to charge rolls** for friendly **Kruleboyz Orruk** units, and **subtract 1 from charge rolls** for other units.'
      }
    ]
  },
  {
    id: '',
    name: 'Gutrippaz',
    type: UnitType.Battleline,
    stats: {
      move: '5"',
      save: '5+',
      bravery: '5',
      wounds: '2'
    },
    weapons: [
      {
        name: 'Wicked Stickka',
        type: WeaponType.Melee,
        range: '2"',
        attacks: '2',
        toHit: '4+',
        toWound: '4+',
        rend: '',
        damage: '1'
      },
      {
        name: 'Wicked Hacker',
        type: WeaponType.Melee,
        range: '1"',
        attacks: '2',
        toHit: '4+',
        toWound: '3+',
        rend: '',
        damage: '1'
      }
    ],
    keywords: ['Destruction', 'Orruk Warclans', 'Orruk', 'Kruleboyz', 'Gutrippaz'],
    abilities: [
      {
        name: 'Champion',
        type: AbilityType.Standard,
        phaseRules: [
          { type: PhaseType.Affects, turns: [Turn.Yours, Turn.Opponents], phases: [Phase.Combat] }
        ],
        description: "1 model can be Champion. **Add 1 to Attacks** of model's melee weapon."
      },
      {
        name: 'Standard Bearer',
        type: AbilityType.Standard,
        phaseRules: [
          {
            type: PhaseType.Affects,
            turns: [Turn.Yours, Turn.Opponents],
            phases: [Phase.Battleshock]
          }
        ],
        description: '1 in every 10 can be a Banner Bearer. **Add 1 to Bravery**.'
      },
      {
        name: 'Scare Taktikz',
        type: AbilityType.Ability,
        phaseRules: [
          { type: PhaseType.UsedIn, turns: [Turn.Yours, Turn.Opponents], phases: [Phase.Charge] },
          { type: PhaseType.Affects, turns: [Turn.Yours, Turn.Opponents], phases: [Phase.Combat] }
        ],
        description:
          'At start of charge phase, if unit more than 3" from enemy, **pick 1 enemy within 12"** that not Hero or Monster, roll **2D6**. **Add 1** to the roll for every 5 models in this unit. ' +
          'If roll is equal to or greater than Bravery of enemy, **subtract 1 from hit rolls for enemy unit** attacks against this unit, until end of turn.'
      }
    ]
  },
  {
    id: '',
    name: 'Breaka-Boss',
    subName: 'On Mirebrute Troggoth',
    type: UnitType.Leader,
    stats: {
      move: '5"',
      save: '4+',
      bravery: '7',
      wounds: '12'
    },
    weapons: [
      {
        name: 'Bident-goad',
        type: WeaponType.Melee,
        range: '1"',
        attacks: '5',
        toHit: '3+',
        toWound: '3+',
        rend: '',
        damage: '2'
      },
      {
        name: 'Iron-bound Clubs',
        type: WeaponType.Melee,
        range: '1"',
        attacks: '4',
        toHit: '3+',
        toWound: '3+',
        rend: '-2',
        damage: '3'
      }
    ],
    keywords: [
      'Destruction',
      'Orruk Warclans',
      'Orruk',
      'Troggoth',
      'Mirebrute Troggoth',
      'Kruleboyz',
      'Hero',
      'Breaka-boss'
    ],
    abilities: [
      {
        name: 'Mount',
        type: AbilityType.Standard,
        phaseRules: [],
        description: 'Mount has **Iron-bound Clubs**'
      },
      {
        name: 'Breaka-harness',
        type: AbilityType.Ability,
        phaseRules: [
          { type: PhaseType.UsedIn, turns: [Turn.Yours, Turn.Opponents], phases: [Phase.Combat] }
        ],
        description:
          'At start of combat phase, can declare yanking on harness. If you do so, this unit suffers D3 mortal wounds. For each wound add 2 attacks to clubs.'
      },
      {
        name: 'Regeneration',
        type: AbilityType.Ability,
        phaseRules: [{ type: PhaseType.UsedIn, turns: [Turn.Yours], phases: [Phase.Hero] }],
        description: 'In your hero phase, roll a dice, **on 4+** heal **D3** wounds'
      }
    ]
  },
  {
    id: '',
    name: 'Hobgrot Slittaz',
    type: UnitType.Other,
    stats: {
      move: '5"',
      save: '6+',
      bravery: '4',
      wounds: '1'
    },
    weapons: [
      {
        name: 'Sulphuric Scrap-grenades',
        type: WeaponType.Missile,
        range: '8"',
        attacks: '1',
        toHit: '4+',
        toWound: '3+',
        rend: '-1',
        damage: '1'
      },
      {
        name: 'Slitta-knives',
        type: WeaponType.Melee,
        range: '1"',
        attacks: '2',
        toHit: '4+',
        toWound: '5+',
        rend: '',
        damage: '1'
      }
    ],
    keywords: ['Destruction', 'Orruk Warclans', 'Orruk', 'Kruleboyz', 'Hobgrot Slittaz'],
    abilities: [
      {
        name: 'Champion',
        type: AbilityType.Standard,
        phaseRules: [
          { type: PhaseType.Affects, turns: [Turn.Yours, Turn.Opponents], phases: [Phase.Combat] }
        ],
        description: 'One model can be a Boss. **Add 1 to knives attacks** for model.'
      },
      {
        name: 'Standard Bearer',
        type: AbilityType.Standard,
        phaseRules: [
          {
            type: PhaseType.Affects,
            turns: [Turn.Yours, Turn.Opponents],
            phases: [Phase.Battleshock]
          }
        ],
        description:
          '1 in 10 can be Totem Bearer. **Re-roll battleshock tests** for unit if has bearer.'
      },
      {
        name: 'Musician',
        type: AbilityType.Standard,
        phaseRules: [
          {
            type: PhaseType.UsedIn,
            turns: [Turn.Yours],
            phases: [Phase.Movement]
          },
          {
            type: PhaseType.Affects,
            turns: [Turn.Yours],
            phases: [Phase.Shooting]
          }
        ],
        description: '1 in 10 can be Noise-maker. **Can run and shoot** if has noise maker.'
      },
      {
        name: "Stab 'Em Good!",
        type: AbilityType.Ability,
        phaseRules: [
          { type: PhaseType.Affects, turns: [Turn.Yours, Turn.Opponents], phases: [Phase.Combat] }
        ],
        description: 'If unmodified hit roll with knives is **6**, scores **2 hits** instead of 1.'
      }
    ]
  },
  {
    id: '',
    name: 'Saurus Oldblood on Carnosaur',
    type: UnitType.Leader,
    stats: {
      move: '*',
      save: '4+',
      wounds: '12',
      bravery: '8'
    },
    weapons: [
      {
        name: 'Sunbolt Gauntlet',
        type: WeaponType.Missile,
        range: '18"',
        attacks: 'D6',
        toHit: '3+',
        toWound: '4+',
        rend: '-1',
        damage: '1'
      },
      {
        name: 'Sunstone Spear (Celestite weapon)',
        type: WeaponType.Melee,
        range: '2"',
        attacks: '3',
        toHit: '3+',
        toWound: '3+',
        rend: '-1',
        damage: '3'
      },
      {
        name: 'Clawed Forelimbs',
        type: WeaponType.Melee,
        range: '2"',
        attacks: '2',
        toHit: '*',
        toWound: '3+',
        rend: '',
        damage: '2'
      },
      {
        name: 'Massive Jaws',
        type: WeaponType.Melee,
        range: '2"',
        attacks: '3',
        toHit: '4+',
        toWound: '3+',
        rend: '-1',
        damage: '*'
      }
    ],
    keywords: ['Order', 'Seraphon', 'Saurus', 'Carnosaur', 'Monster', 'Hero', 'Oldblood'],
    abilities: [
      {
        name: 'Mount',
        type: AbilityType.Standard,
        phaseRules: [
          { type: PhaseType.Affects, turns: [Turn.Yours, Turn.Opponents], phases: [Phase.Combat] }
        ],
        description: "Model's Carnosaur attack with **Clawed Forelimbs** and **Massive Jaws**."
      },
      {
        name: 'Damage Table',
        type: AbilityType.DamageTable,
        description: '',
        columns: ['Wounds Suffered', 'Move', 'Clawed Forelimbs', 'Massive Jaws'],
        rows: [
          ['0-2', '10"', '3+', '5'],
          ['3-4', '9"', '4+', '4']
        ],
        phaseRules: []
      },
      {
        name: 'Blazing Sunbolts',
        type: AbilityType.Ability,
        phaseRules: [
          { type: PhaseType.Affects, turns: [Turn.Yours, Turn.Opponents], phases: [Phase.Shooting] }
        ],
        description:
          '**Add 1** to wound rolls for attacks made with **Sunbolt Gauntlet** if target is **Chaos Daemon** unit.'
      },
      {
        name: 'Blood Frenzy',
        type: AbilityType.Ability,
        phaseRules: [
          {
            type: PhaseType.UsedIn,
            turns: [Turn.Yours, Turn.Opponents],
            phases: [Phase.Shooting, Phase.Combat]
          },
          {
            type: PhaseType.Affects,
            turns: [Turn.Yours, Turn.Opponents],
            phases: [Phase.Shooting, Phase.Combat]
          }
        ],
        description:
          'If any enemy models are slain by wounds inflicted by this models attacks, for the rest of the battle this model can run and still charge in the same turn.'
      },
      {
        name: 'Cold Ferocity',
        type: AbilityType.Ability,
        phaseRules: [
          { type: PhaseType.UsedIn, turns: [Turn.Yours, Turn.Opponents], phases: [Phase.Combat] }
        ],
        description:
          'If unmodified hit roll for an attack made with **Celestite** weapon by this model is **6**, that attack scores **2 hits** on target instead of **1**.'
      },
      {
        name: 'Pinned Down',
        type: AbilityType.Ability,
        phaseRules: [
          { type: PhaseType.UsedIn, turns: [Turn.Yours, Turn.Opponents], phases: [Phase.Combat] }
        ],
        description:
          '**Add 1** to hit rolls for attacks made with *Massive Jaws** if the target has Wounds characteristic of **7 or less**'
      },
      {
        name: 'Terror',
        type: AbilityType.Ability,
        phaseRules: [
          {
            type: PhaseType.UsedIn,
            turns: [Turn.Yours, Turn.Opponents],
            phases: [Phase.Battleshock]
          }
        ],
        description:
          '**Subtract 1** from bravery of enemy units while they are within **3"** of friendly units with this ability.'
      },
      {
        name: 'Wrath of the Seraphon',
        type: AbilityType.CommandAbility,
        phaseRules: [
          { type: PhaseType.UsedIn, turns: [Turn.Yours, Turn.Opponents], phases: [Phase.Combat] }
        ],
        description:
          'Can use this command ability in combat phase. If you do, **pick 1** Saurus unit wholly **within 18"** of this model. ' +
          "Until end of that phase **add 1 to hit rolls** for attacks made by that unit. A unit can't benefit from this command ability more than once per phase."
      }
    ]
  }
];
