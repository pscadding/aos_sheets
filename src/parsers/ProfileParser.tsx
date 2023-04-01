import { ArmyProfile as ThinArmyProfile } from 'thin-backend';
import { Profile } from '../models/Profile';
import { removeQuotes, removeQuotesFromArray } from '../utils/string_utils';

export function profileParser(profile: ThinArmyProfile): Profile {
  return {
    id: profile.id,
    name: profile.name,
    unitNames: {},
    battleTraitTypes: removeQuotesFromArray(profile.battleTraitTags),
    armyAbilities: []
  };
}
