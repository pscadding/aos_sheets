import { Ability, AbilityType } from '../../../models/Ability';
import { Phase } from '../../../models/Phase';

export const universalArtefactsOfPower: Ability[] = [
  {
    name: 'Amulet of Destiny',
    type: AbilityType.Ability,
    phases: [Phase.Any],
    description: 'The bearer has a ward of **5+**'
  },
  {
    name: 'Vial of Manticore Venom',
    type: AbilityType.Ability,
    phases: [Phase.Combat],
    description:
      "**Pick 1** of the bearer's melee weapons. **Add 1** to wound rolls for attacks made with that weapon."
  },
  {
    name: 'Arcane Tome',
    type: AbilityType.Ability,
    phases: [Phase.Hero],
    description:
      'The bearer becomes a **Wizard** that knows the Arcane Bolt and Mystic Shield spells. They can attempt to cast and unbind **1** spell. ' +
      'If already a **Wizard** can cast **1** additional spell.'
  },
  {
    name: 'Seed of Rebirth',
    type: AbilityType.Ability,
    phases: [Phase.Hero],
    description: 'You can re-roll heroic recovery rolls for the bearer.'
  }
];
