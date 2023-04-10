import { AbilityType } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';
import { Unit, UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export const swampcallaShaman: Unit = {
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
      phaseRules: [{ type: PhaseType.Affects, phases: [Phase.Movement], turns: [Turn.Yours] }]
    },
    {
      name: 'Wizard',
      type: AbilityType.Standard,
      description: 'Cast 1 spell, unbind 1 spell',
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Hero], turns: [Turn.Yours, Turn.Opponents] }
      ]
    },
    {
      name: 'Poisons and Elixars',
      type: AbilityType.Ability,
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Hero], turns: [Turn.Yours] },
        { type: PhaseType.Affects, phases: [Phase.Any], turns: [Turn.Yours, Turn.Opponents] }
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
        { type: PhaseType.UsedIn, phases: [Phase.Hero], turns: [Turn.Yours] },
        { type: PhaseType.Affects, phases: [Phase.Charge], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description:
        'Casting value **7**. On success until next hero phase, **add 1 to charge rolls** for friendly **Kruleboyz Orruk** units, and **subtract 1 from charge rolls** for other units.'
    }
  ]
};
