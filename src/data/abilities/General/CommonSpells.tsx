import { Ability, AbilityType } from '../../../models/Ability';
import { Phase } from '../../../models/Phase';

export const commonSpells: Ability[] = [
  {
    name: 'Arcane Bolt',
    type: AbilityType.Spell,
    phases: [Phase.Hero],
    attachKeyword: 'wizard',
    description:
      '**Casting value of 5** and **range 12"**. If successful at the start of any 1 phase before your next hero phase, can **pick 1** enemy unit within range and visible to caster. ' +
      'That unit suffers **1 mortal wound**. If that unit is within **3"** of caster it suffers **D3 mortal wounds** instead of 1.'
  },
  {
    name: 'Mystic Shield',
    type: AbilityType.Spell,
    phases: [Phase.Hero],
    attachKeyword: 'wizard',
    description:
      '**Casting value of 5** and **range 12"**. If successful **pick 1** friendly unit wholly within range and visible to caster. ' +
      '**Add 1** to save rolls for attacks that target that unit until your next hero phase.'
  }
];
