import { Ability, BattleTraits } from '../../models/Ability';
import { seraphonAbilities, seraphonBattleTraits } from './Seraphon/seraphon_abilities';
import { generalAbilities } from './General/GeneralAbilities';
import { orrukBattleTraits, orrukAbilities } from './Orruk/orruk_abilities';

export const battleTraits: BattleTraits = {
  ...seraphonBattleTraits,
  ...orrukBattleTraits
};

export const enhancements: Ability[] = [
  ...generalAbilities,
  ...seraphonAbilities,
  ...orrukAbilities
];
