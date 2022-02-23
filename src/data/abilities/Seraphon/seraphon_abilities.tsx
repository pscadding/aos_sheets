import { Ability, BattleTraits } from '../../../models/Ability';
import Coelesced from './Coalesced';
import { seraphonGeneralBattleTraits, seraphonGeneralAbilities } from './Seraphon';
import { thunderLizardAbilities, thunderLizardBattleTraits } from './ThunderLizard';

export const seraphonBattleTraits = {
  ...Coelesced,
  ...seraphonGeneralBattleTraits,
  ...thunderLizardBattleTraits
} as BattleTraits;

export const seraphonAbilities: Ability[] = [
  ...thunderLizardAbilities,
  ...seraphonGeneralAbilities
];
