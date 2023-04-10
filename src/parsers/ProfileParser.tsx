import { ArmyProfile as ThinArmyProfile, UnitConfiguration } from 'thin-backend';
import { Profile } from '../models/Profile';
import { removeQuotes, removeQuotesFromArray } from '../utils/string_utils';

export function profileParser(profile: ThinArmyProfile, unitConfigs: UnitConfiguration[]): Profile {
  const units = unitConfigs.map((unitConfig) => {
    return {
      unitName: unitConfig.unitName,
      abilityNames: removeQuotesFromArray(unitConfig.abilityNames)
    };
  });
  return {
    id: profile.id,
    name: profile.name,
    units: units,
    battleTraitTypes: removeQuotesFromArray(profile.battleTraitTags),
    armyAbilities: removeQuotesFromArray(profile.abilitiesNames)
  };
}
