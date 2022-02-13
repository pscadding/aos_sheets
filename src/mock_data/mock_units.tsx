import { Unit } from '../models/Unit';
import { AbilityType, Phase } from '../models/Ability';

export const mockUnits: Unit[] = [
  {
    name: 'Swampcalla Shaman',
    subName: 'And Pot-Grot',
    stats: {
      move: '5"',
      save: '5+',
      wounds: '6',
      bravery: '5'
    },
    weapons: [
      {
        name: 'Bogbark Staff',
        range: '3"',
        attacks: '2',
        toHit: '3+',
        toWound: '3+',
        rend: '-1',
        damage: 'D3'
      },
      {
        name: 'Back-up Stabba',
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
        description: 'Pot-grot must stay within 1" of Shaman. Treated as a single model.'
      },
      {
        name: 'Wizard',
        type: AbilityType.Standard,
        description: 'Cast 1 spell, unbind 1 spell',
        phases: [Phase.Hero]
      },
      {
        name: 'Poisons and Elixars',
        type: AbilityType.Standard,
        phases: [Phase.Hero],
        description:
          'At start of your **hero phase**, if this unit is more than **3"** from all enemy units, instead of casting or dispelling a spell, it can say it is brewing either a poison or an elixir. ' +
          'If you do, pick **1 friendly Kruleboyz Orruk** unit wholly within **12"**, more than **3"** from enemy and with at least one model within **3"**, to be given poison or elixar. ' +
          'One poison or elixir per unit in same hero phase. Effects last until until next hero phase. If given poison, when using **"Venom-encrusted Weapons"** battle trait, mortal wounds are caused on unmodified hit roll of **+5** instead of 6. ' +
          'If given elixir, **add 1** to save rolls for attacks that target that unit.'
      },
      {
        name: 'Summon Boggy Mist',
        type: AbilityType.Spell,
        phases: [Phase.Hero],
        description:
          'Casting value **7**. On success until next hero phase, **add 1 to charge rolls** for friendly **Kruleboyz Orruk** units, and **subtract 1 from charge rolls** for other units.'
      }
    ]
  },
  {
    name: 'Gutrippaz',
    stats: {
      move: '5"',
      save: '5+',
      bravery: '5',
      wounds: '2'
    },
    weapons: [
      {
        name: 'Wicked Stickka',
        range: '2"',
        attacks: '2',
        toHit: '4+',
        toWound: '4+',
        rend: '',
        damage: '1'
      },
      {
        name: 'Wicked Hacker',
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
        phases: [Phase.Combat],
        description: "1 model can be Champion. **Add 1 to Attacks** of model's melee weapon."
      },
      {
        name: 'Standard Bearer',
        type: AbilityType.Standard,
        phases: [Phase.Battleshock],
        description: '1 in every 10 can be a Banner Bearer. **Add 1 to Bravery**.'
      },
      {
        name: 'Scare Taktikz',
        type: AbilityType.Standard,
        phases: [Phase.Charge, Phase.Combat],
        description:
          'At start of charge phase, if unit more than 3" from enemy, **pick 1 enemy within 12"** that not Hero or Monster, roll **2D6**. **Add 1** to the roll for every 5 models in this unit. ' +
          'If roll is equal to or greater than Bravery of enemy, **subtract 1 from hit rolls for enemy unit** attacks against this unit, until end of turn.'
      }
    ]
  }
];
