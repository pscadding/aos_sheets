import { Ability, AbilityType } from '../../../models/Ability';
import { Phase } from '../../../models/Phase';

export const universalSpellLore: Ability[] = [
  {
    name: 'Flaming Weapon',
    type: AbilityType.Spell,
    phases: [Phase.Hero, Phase.Combat],
    description:
      "Casting value **4**. If successful **pick 1** of caster's melee weapons. **Add 1** dmg of that weapon until your next hero phase."
  },
  {
    name: 'Levitate',
    type: AbilityType.Spell,
    phases: [Phase.Hero, Phase.Any],
    description:
      'Casting value **8** and a range of **18"**. If successful **pick 1** friendly unit wholly within range and visible to the caster. That unit can fly until your next hero phase.'
  },
  {
    name: 'Ghost-mist',
    type: AbilityType.Spell,
    phases: [Phase.Hero, Phase.Any],
    description:
      'Casting value **5** and range of **6"**. If successful **pick 1** terrain feature within range and visible to caster. ' +
      'Until next hero phase, visibility between 2 models is blocked if a straight line 1mm wide drawn between the closest points of the 2 models passes across more than 3" of that terrain feature. ' +
      'The effect does not block visibility to or from models with a wounds characteristic of 10 or more.'
  }
];
