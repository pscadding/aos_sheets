import { ProfileData, UnitData } from '../../models/JsonModels';
import { createRecord, deleteRecord, query, UnitType } from 'thin-backend';
import { profileParser } from '../../parsers/ProfileParser';

export namespace ProfileController {
  export function create(profileJson: ProfileData) {
    return createRecord('army_profiles', {
      name: profileJson.name,
      battleTraitTags: profileJson.battleTraitTypes,
      abilitiesNames: profileJson.armyAbilities
    });
  }

  export function removeByName(profileName: string) {
    return query('army_profiles')
      .where('name', profileName)
      .fetchOne()
      .then((profile) => {
        if (profile) {
          return remove(profile.id);
        }
      });
  }

  export function load(profileId: string) {
    return query('army_profiles')
      .where('id', profileId)
      .fetchOne()
      .then((thinProfile) => profileParser(thinProfile));
  }

  export function loadAll() {
    return query('army_profiles')
      .orderByDesc('createdAt')
      .fetch()
      .then((profiles) => {
        return profiles.map((profile) => profileParser(profile));
      });
  }
}
function remove(profileId: string) {
  return deleteRecord('army_profiles', profileId);
}
