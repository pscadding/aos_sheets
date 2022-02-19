import { BattleTraits } from '../../../models/Ability';
import Coelesced from './Coalesced';
import Seraphon from './Seraphon';

export default {
  ...Coelesced,
  ...Seraphon
} as BattleTraits;
