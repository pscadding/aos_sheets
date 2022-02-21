import { Ability, BattleTraits } from '../../../models/Ability';
import Coelesced from './Coalesced';
import Seraphon from './Seraphon';
import { thunderLizardAbilities, thunderLizardBattleTraits } from './ThunderLizard';

export const seraphonBattleTraits = {
  ...Coelesced,
  ...Seraphon,
  ...thunderLizardBattleTraits
} as BattleTraits;

export const seraphonAbilities: Ability[] = [...thunderLizardAbilities];
