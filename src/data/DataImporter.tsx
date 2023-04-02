import { AbilityData, ImportData, ProfileData, UnitData } from '../models/JsonModels';
import { ThinImport } from './thin/thinImport';

export const importJson = (data: ImportData[]) => {
  data.forEach((entry) => {
    switch (entry.type) {
      case 'unit':
        ThinImport.importUnit(entry.content as UnitData);
        break;
      case 'ability':
        ThinImport.importAbility(entry.content as AbilityData);
        break;
      case 'profile':
        ThinImport.importProfile(entry.content as ProfileData);
        break;
    }
  });
};
