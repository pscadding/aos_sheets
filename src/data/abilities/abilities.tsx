import { Ability, BattleTraits } from '../../models/Ability';
import { seraphonAbilities, seraphonBattleTraits } from './Seraphon/seraphon_abilities';
import { generalAbilities } from './General/GeneralAbilities';

export const battleTraits: BattleTraits = {
  ...seraphonBattleTraits
};

export const enhancements: Ability[] = [...generalAbilities, ...seraphonAbilities];
