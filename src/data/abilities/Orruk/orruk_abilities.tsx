import { Ability, BattleTraits } from '../../../models/Ability';
import { bigYellersBattleTraits } from './Big_Yellers';
import { kruleboyzBattleTraits } from './Kruleboyz';

export const orrukBattleTraits = {
  ...kruleboyzBattleTraits,
  ...bigYellersBattleTraits
} as BattleTraits;
