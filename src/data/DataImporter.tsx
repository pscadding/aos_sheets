import { AbilityData, ImportData, ProfileData, UnitData } from '../models/JsonModels';
import { ThinImport } from './thin/thinImport';

export const importJson = async (data: ImportData[]) => {
  for (const entry of data) {
    switch (entry.type) {
      case 'unit':
        await ThinImport.importUnit(entry.content as UnitData);
        break;
      case 'ability':
        await ThinImport.importAbility(entry.content as AbilityData);
        break;
      case 'profile':
        await ThinImport.importProfile(entry.content as ProfileData);
        break;
    }
  }
};
