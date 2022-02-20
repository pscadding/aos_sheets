import { Ability } from '../../../models/Ability';
import { commonSpells } from './CommonSpells';
import { universalArtefactsOfPower } from './UniversalArtefactsOfPower';
import { universalCommandTraits } from './UniversalCommandTraits';
import { universalSpellLore } from './UniversalSpellLore';
import { universalTriumphs } from './UniversalTriumphs';

export const generalAbilities: Ability[] = [
  ...commonSpells,
  ...universalCommandTraits,
  ...universalArtefactsOfPower,
  ...universalSpellLore,
  ...universalTriumphs
];
