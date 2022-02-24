import { AbilityType } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';
import { Unit, UnitType } from '../../../models/Unit';
import { WeaponType } from '../../../models/Weapon';

export const castigators: Unit = {
  name: 'Castigators',
  type: UnitType.Other,
  stats: {
    move: '5"',
    save: '4+',
    wounds: '2',
    bravery: '7'
  },
  weapons: [
    {
      name: 'Thunderhead Greatbow',
      type: WeaponType.Missile,
      range: '18"',
      attacks: 'D3',
      toHit: '3+',
      toWound: '3+',
      rend: '-1',
      damage: '1'
    },
    {
      name: 'Heavy Stock',
      type: WeaponType.Melee,
      range: '1"',
      attacks: '2',
      toHit: '4+',
      toWound: '3+',
      rend: '',
      damage: '1'
    }
  ],
  keywords: ['Order', 'Stormcast Eternals', 'Sacrosanct', 'Justicar', 'Castigators'],
  abilities: [
    {
      name: 'Champion',
      type: AbilityType.Standard,
      phaseRules: [{ type: PhaseType.Affects, phases: [Phase.Shooting], turns: [Turn.Yours] }],
      description:
        '1 model in this unit can be Castigator-Prime. **Add 1** to the Attacks that model’s **Thunderhead Greatbow**.'
    },
    {
      name: 'Castigator Aetheric Channelling',
      type: AbilityType.Ability,
      phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Shooting], turns: [Turn.Yours] }],
      description:
        'At the start of the shooting phase, you must say whether this unit will increase either the accuracy or the power of its Thunderhead Greatbows. ' +
        'If you pick accuracy, until the end of that phase, **add 1** to hit rolls for attacks made with this unit’s Thunderhead Greatbows. ' +
        'If you pick power, until the end of that phase, this unit’s Thunderhead Greatbows have a Rend characteristic of **-2** instead of **-1**.'
    },
    {
      name: 'Burst of Celestial Energy',
      type: AbilityType.Ability,
      phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Shooting], turns: [Turn.Yours] }],
      description:
        'If the unmodified hit roll for an attack made with a Thunderhead Greatbow that targets a **MALIGNANT** or **DAEMON** unit is **6**, that attack scores **2** hits on the target instead of **1**. Make a wound and save roll for each hit.'
    }
  ]
};
