import { Profile } from '../models/Profile';
import { units } from '../data/units/units';
import { battleTraits, enhancements } from '../data/abilities/abilities';
import { Unit } from '../models/Unit';
import { Ability } from '../models/Ability';
import { query } from 'thin-backend';
import { profileParser } from '../parsers/ProfileParser';

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
  return new Promise((resolve) => {
    const profileAbilities = profile.battleTraitTypes
      .map((battleTraitType) => battleTraits[battleTraitType])
      .flat(1);
    resolve(profileAbilities);
  });
}

export function loadEnhancements(): Promise<Ability[]> {
  return new Promise((resolve) => {
    resolve(enhancements);
  });
}

export function loadProfiles() {
  return query('army_profiles')
    .orderByDesc('createdAt')
    .fetch()
    .then((profiles) => {
      return profiles.map((profile) => profileParser(profile));
    });
}

export function lowerCaseArray(items: string[]): string[] {
  return items.map((item) => item.toLowerCase());
}
