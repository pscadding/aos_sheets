import { Ability, BattleTraits } from '../../models/Ability';
import seraphon_abilities from './Seraphon/seraphon_abilities';
import { generalAbilities } from './General/GeneralAbilities';

export const battleTraits: BattleTraits = {
  ...seraphon_abilities
};

export const enhancements: Ability[] = [...generalAbilities];
