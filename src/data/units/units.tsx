import { Unit } from '../../models/Unit';
import orruk_units from './Orruk/orruk_units';
import seraphon_units from './Seraphon/seraphon_units';
import stormcast_units from './Stormcast/stormcast_units';

export const units: Unit[] = [...seraphon_units, ...orruk_units, ...stormcast_units];
