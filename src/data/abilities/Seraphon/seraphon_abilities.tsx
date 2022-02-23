import { Ability, BattleTraits } from '../../../models/Ability';
import { coalescedBattleTraits, coalescedAbilities } from './Coalesced';
import { seraphonGeneralBattleTraits, seraphonGeneralAbilities } from './Seraphon';
import { thunderLizardAbilities, thunderLizardBattleTraits } from './ThunderLizard';

export const seraphonBattleTraits = {
  ...coalescedBattleTraits,
  ...seraphonGeneralBattleTraits,
  ...thunderLizardBattleTraits
} as BattleTraits;

export const seraphonAbilities: Ability[] = [
  ...thunderLizardAbilities,
  ...seraphonGeneralAbilities,
  ...coalescedAbilities
];
