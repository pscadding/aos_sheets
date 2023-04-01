import { Profile } from '../models/Profile';
import { units } from '../data/units/units';
import { enhancements } from '../data/abilities/abilities';
import { Unit } from '../models/Unit';
import { Ability } from '../models/Ability';
import { ThinLoad } from './thin/thinLoad';
import { lowerCaseArray } from './string_utils';

export function loadUnits(profile: Profile): Promise<Unit[]> {
  return new Promise((resolve) => {
    // debugging only:
    console.log(JSON.stringify(units));
    const profileUnits = units.filter((unit) =>
      lowerCaseArray(Object.keys(profile.unitNames)).includes(unit.name.toLowerCase())
    );
    resolve(profileUnits);
  });
}

export function loadBattleTraits(profile: Profile): Promise<Ability[]> {
  return ThinLoad.loadProfileBattleTraits(profile);
}

export function loadEnhancements(): Promise<Ability[]> {
  return new Promise((resolve) => {
    resolve(enhancements);
  });
}

export function loadProfiles() {
  return ThinLoad.loadProfiles();
}

export function loadProfile(profileId: string) {
  return ThinLoad.loadProfile(profileId);
}

export function loadProfileUnits(profileId: string) {
  return ThinLoad.loadProfileUnits(profileId);
}
