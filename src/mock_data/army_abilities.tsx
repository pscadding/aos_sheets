import { Ability, AbilityType } from '../models/Ability';
import { Phase } from '../models/Phase';

export const mockArmyAbilities: Ability[] = [
  {
    name: 'Kruleboyz WAAAGH!',
    type: AbilityType.BattleTrait,
    phases: [Phase.Combat],
    description:
      'Once per battle, in combat phase, when you pick **Kruleboyz** general to fight and use WAAAGH!. ' +
      'If you do, pick up to **2** other **Kruleboyz** units that have not fought in phase, wholly within 18" of that general. ' +
      'General and picked units fight one after the other in order of choice.'
  },
  {
    name: 'Only Da Best',
    type: AbilityType.BattleTrait,
    phases: [Phase.Shooting],
    description:
      '**Add 3"** to the **Range** of missile weapons of **Big Yellers Orruk** units. Also in **first battle round**, ' +
      "each time one shoots, **reroll 1 of the hit rolls** for **1** of the unit's attacks."
  }
];
