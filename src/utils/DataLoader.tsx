import { Profile } from '../models/Profile';
import { units } from '../data/units/units';
import { abilities } from '../data/abilities/abilities';
import { Unit } from '../models/Unit';
import { Ability } from '../models/Ability';

export function loadUnits(profile: Profile): Promise<Unit[]> {
  return new Promise((resolve) => {
    const profileUnits = units.filter((unit) => profile.unitNames.includes(unit.name));
    resolve(profileUnits);
  });
}

export function loadArmyAbilities(profile: Profile): Promise<Ability[]> {
  return new Promise((resolve) => {
    const profileAbilities = profile.battleTraitTypes
      .map((battleTraitType) => abilities[battleTraitType])
      .flat(1);
    resolve(profileAbilities);
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
