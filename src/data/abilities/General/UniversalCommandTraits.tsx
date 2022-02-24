import { Ability, AbilityType } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';

export const universalCommandTraits: Ability[] = [
  {
    name: 'Battle-lust',
    type: AbilityType.Ability,
    phaseRules: [
      { type: PhaseType.UsedIn, phases: [Phase.Charge, Phase.Movement], turns: [Turn.Yours] }
    ],
    description: 'You can reroll run rolls and charge rolls for this general.'
  },
  {
    name: 'Skilled Leader',
    type: AbilityType.Ability,
    phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Hero], turns: [Turn.Yours] }],
    description:
      'If this general is on the battlefield at the start of your hero phase, roll a dice. ' +
      'On a **5+**, you receive **1 extra command point**.'
  },
  {
    name: 'High Priest',
    type: AbilityType.Ability,
    phaseRules: [{ type: PhaseType.UsedIn, phases: [Phase.Hero], turns: [Turn.Yours] }],
    description: 'You can re-roll chanting rolls for this general.'
  },
  {
    name: 'Heroic Stature',
    type: AbilityType.Ability,
    phaseRules: [
      { type: PhaseType.Affects, phases: [Phase.NA], turns: [Turn.Yours, Turn.Opponents] }
    ],
    description: "**Add 1** to this general's wounds characteristics."
  },
  {
    name: 'Master of Magic',
    type: AbilityType.Ability,
    phaseRules: [
      { type: PhaseType.UsedIn, phases: [Phase.Hero], turns: [Turn.Yours, Turn.Opponents] }
    ],
    description:
      'Once per hero phase, you can **re-roll 1** casting roll, dispelling roll or unbinding roll for this general.'
  }
];
