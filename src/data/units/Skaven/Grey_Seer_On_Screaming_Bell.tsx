import { AbilityType } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';
import { Unit, UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export const greySeerScreamingBell: Unit = {
  id: '',
  name: 'Grey Seer On Screaming Bell',
  type: UnitType.Leader,
  stats: {
    move: '*',
    save: '4+',
    wounds: '15',
    bravery: '6'
  },
  weapons: [
    {
      name: 'Warpstone Staff',
      type: WeaponType.Melee,
      range: '2"',
      attacks: '3',
      toHit: '4+',
      toWound: '4+',
      rend: '-1',
      damage: 'D3'
    },
    {
      name: 'Tearing Claws and Fangs',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '4',
      toHit: '4+',
      toWound: '3+',
      rend: '-1',
      damage: '2'
    },
    {
      name: 'Rusty Spikes',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '*',
      toHit: '3+',
      toWound: '3+',
      rend: '-1',
      damage: '1'
    }
  ],
  keywords: [
    'Chaos',
    'Skaven',
    'Masterclan',
    'Hero',
    'Wizard',
    'Totem',
    'War Machine',
    'Screaming Bell',
    'Grey Seer'
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
      name: 'Mount',
      type: AbilityType.Standard,
      phaseRules: [],
      description: "This unit's Screaming Bell is armed with Rusty Spikes"
    },
    {
      name: 'Pushed Into Battle',
      type: AbilityType.Standard,
      phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Movement], turns: [Turn.Yours] }],
      description:
        'This unit cannot move unless it starts the move within 6" of 10 or more other friendly Skaven models.'
    },
    {
      name: 'Crew',
      type: AbilityType.Standard,
      phaseRules: [],
      description: 'This unit has a Rat Ogor crew that is armed with Tearing Claws and Fangs'
    },
    {
      name: 'Damage Table',
      type: AbilityType.DamageTable,
      phaseRules: [],
      description: '',
      columns: ['Wounds Suffered', 'Move', 'Rusty Spikes', 'Avalanche of Energy'],
      rows: [
        ['0-6', '6"', '6', 'Casting +2/Chanting +1'],
        ['7-9', '5"', '5', 'Casting +1/Chanting +1'],
        ['10-12', '4"', '4', 'Casting +1/Chanting 0'],
        ['13+', '3"', '3', 'Casting 0/Chanting 0']
      ]
    },
    {
      name: 'Alter of the Horned Rat',
      type: AbilityType.Ability,
      description:
        'This unit has a ward of **5+**. In addition, at the start of your hero phase, you can say that this unit will beseech the Horned Rat instead of attempting to cast spells in that phase. If you do so, in that phase, this unit is treated as having the **Priest** keyword instead of the Wizard keyword.',
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Hero], turns: [Turn.Yours] },
        {
          type: PhaseType.Affects,
          phases: [Phase.Hero, Phase.Combat, Phase.Shooting, Phase.Charge, Phase.Movement],
          turns: [Turn.Yours, Turn.Opponents]
        }
      ]
    },
    {
      name: 'Avalanche of Energy',
      type: AbilityType.Ability,
      phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Hero], turns: [Turn.Yours] }],
      description:
        "Add the Avalanche of Energy value on this unit's damage table to casting and chanting rolls for this unit."
    },
    {
      name: 'Peal of Doom',
      type: AbilityType.Ability,
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Hero], turns: [Turn.Yours] },
        { type: PhaseType.Affects, phases: [Phase.Any], turns: [Turn.Yours, Turn.Opponents] }
      ],
      description:
        'At the start of your hero phase, you can say that this unit will ring its Screaming Bell. If you do so, roll a dice and look up the result on the table below: ' +
        '  \n**1.** Magical Backlash: This unit suffers D3 mortal wounds that cannot be negated.' +
        '  \n**2.** Unholy Clamour: Add 6" to this unit\'s Move characteristic until your next hero phase.' +
        '  \n**3.** Wall of Unholy Sound: Until your next hero phase, subtract **1** from hit rolls for attacks made by enemy units within **13"** of any friendly SCREAMING BELLS for which you rolled this result in this phase.' +
        '  \n**4.** Deafening Peals: Until your next hero phase, roll a dice each time an enemy model is picked to issue a command while it is within **13"** of any friendly SCREAMING BELLS for which you rolled this result in this phase. On a **5+**, that command cannot be issued.' +
        '  \n**5.** Screaming Crescendo: Until your next hero phase, after this unit makes a charge move, you can pick **1** enemy unit within **1"** of this unit and roll a dice. On a **2+**, that unit suffers **D6 mortal wounds**.' +
        '  \n**6.** Apocalyptic Doom: At the end of this hero phase, roll a dice for each enemy unit within **13"** of any friendly SCREAMING BELLS for which you rolled this result in this phase. On a **4+**, that unit suffers **D3 mortal wounds**.'
    },
    {
      name: 'A Stirring Beyond the Veil',
      type: AbilityType.Ability,
      phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Hero], turns: [Turn.Yours] }],
      description:
        'Once per battle, at the start of your hero phase, if **7 or more wounds** are allocated to this unit, you can say that the Grey Seer will shatter the Screaming Bell. If you do so, roll a dice. On a **1**, this unit is destroyed. On any other roll, add the number of wounds allocated to this unit to the roll.' +
        'If the modified roll is **12 or less**, the Screaming Bell is shattered (see below). If the modified roll is **13** or more, the Screaming Bell is shattered and you can summon **1 VERMINLORD** to the battlefield and add it to your army. The Verminlord must be set up wholly within **13"** of this unit. It can be set up within **3"** of an enemy unit if this unit is within **3"** of that enemy unit, otherwise it must be set up more than **9"** from all enemy units. If this unit\'s Screaming Bell is shattered, it can no longer attempt to cast Cracks Call and it can no longer use its Peal of Doom ability.'
    },
    {
      name: 'Cracks Call',
      type: AbilityType.Ability,
      phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Hero], turns: [Turn.Yours] }],
      description:
        'Cracks Call is a spell that has a casting value of **6** and a **range of 13"**. If successfully cast, pick **1** enemy unit within range and visible to the caster and roll **2D6**. If the roll is greater than that unit\'s Move characteristic, that unit suffers a number of mortal wounds equal to the difference between its Move characteristic and the roll (rounding up). This spell has no effect on units that can fly.'
    }
  ]
};
