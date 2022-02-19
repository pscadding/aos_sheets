import { Profile } from '../models/Profile';
import { units } from '../data/units/units';
import { Unit } from '../models/Unit';

export function loadUnits(profile: Profile): Promise<Unit[]> {
  return new Promise((resolve) => {
    const profileUnits = units.filter((unit) => profile.unitNames.includes(unit.name));
    console.log('filtered units', profileUnits, units, profile);
    resolve(profileUnits);
  });
}

export function loadProfiles(): Promise<{ [key: string]: Profile }> {
  return fetch('/data/profiles.json')
    .then((r) => r.json())
    .then((data: { [key: string]: Profile }) => {
      return data;
    });
}

export function loadProfile(profileName: string): Promise<Profile> {
  return fetch('/data/profiles.json')
    .then((r) => r.json())
    .then((data: { [key: string]: Profile }) => {
      return data[profileName];
    });
}
