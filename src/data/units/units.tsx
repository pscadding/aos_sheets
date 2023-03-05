import { Unit } from '../../models/Unit';
import orruk_units from './Orruk/orruk_units';
import seraphon_units from './Seraphon/seraphon_units';
import SlavesToDarknessUnits from './SlavesToDarkness/SlavesToDarknessUnits';
import stormcast_units from './Stormcast/stormcast_units';
import skaven_units from './Skaven/skaven_units';

export const units: Unit[] = [
  ...seraphon_units,
  ...orruk_units,
  ...stormcast_units,
  ...SlavesToDarknessUnits,
  ...skaven_units
];
