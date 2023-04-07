import { AbilityData, ImportData, ProfileData, UnitData } from '../models/JsonModels';
import { ThinImport } from './thin/thinImport';

export const importJson = async (data: ImportData[]) => {
  data.map(async (entry) => {
    switch (entry.type) {
      case 'unit':
        await ThinImport.importUnit(entry.content as UnitData);
        console.log('ThinImport.importUnit DONE', (entry.content as UnitData).name);
        break;
      case 'ability':
        await ThinImport.importAbility(entry.content as AbilityData);
        break;
      case 'profile':
        await ThinImport.importProfile(entry.content as ProfileData);
        break;
    }
  });
  console.log('end of Import Json');
};
