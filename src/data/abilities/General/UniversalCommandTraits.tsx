import { Ability, AbilityType } from '../../../models/Ability';
import { Phase } from '../../../models/Phase';

export const universalCommandTraits: Ability[] = [
  {
    name: 'Battle-lust',
    type: AbilityType.Ability,
    phases: [Phase.Movement, Phase.Charge],
    description: 'You can reroll run rolls and charge rolls for this general.'
  },
  {
    name: 'Skilled Leader',
    type: AbilityType.Ability,
    phases: [Phase.Hero],
    description:
      'If this general is on the battlefield at the start of your hero phase, roll a dice. ' +
      'On a **5+**, you receive **1 extra command point**.'
  },
  {
    name: 'High Priest',
    type: AbilityType.Ability,
    phases: [Phase.Hero],
    description: 'You can re-roll chanting rolls for this general.'
  },
  {
    name: 'Heroic Stature',
    type: AbilityType.Ability,
    phases: [Phase.NA],
    description: "**Add 1** to this general's wounds characteristics."
  },
  {
    name: 'Master of Magic',
    type: AbilityType.Ability,
    phases: [Phase.Hero],
    description:
      'Once per hero phase, you can **re-roll 1** casting roll, dispelling roll or unbinding roll for this general.'
  }
];
