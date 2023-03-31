import { ArmyProfile as ThinArmyProfile } from 'thin-backend';
import { Profile } from '../models/Profile';

export function profileParser(profile: ThinArmyProfile): Profile {
  return {
    id: profile.id,
    name: profile.name,
    unitNames: {},
    battleTraitTypes: [],
    armyAbilities: []
  };
}
