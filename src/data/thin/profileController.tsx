import { ProfileData, UnitData } from '../../models/JsonModels';
import { createRecord, deleteRecord, query, UnitConfiguration, ArmyProfile } from 'thin-backend';
import { profileParser } from '../../parsers/ProfileParser';
import { Profile } from '../../models/Profile';

export namespace ProfileController {
  export function create(profileJson: ProfileData) {
    return createRecord('army_profiles', {
      name: profileJson.name,
      battleTraitTags: profileJson.battleTraitTypes,
      abilitiesNames: profileJson.armyAbilities
    }).then((thinProfile) => {
      return createUnitConfigurations(profileJson, thinProfile.id);
    });
  }

  export function removeByName(profileName: string) {
    return query('army_profiles')
      .where('name', profileName)
      .fetchOne()
      .then((profile) => {
        if (profile) {
          console.log('removing found existing profile', profile);
          return removeUnitConfiguraiton(profile.id).then(() => remove(profile.id));
        }
      });
  }

  export function load(profileId: string): Promise<Profile> {
    return query('army_profiles')
      .where('id', profileId)
      .fetchOne()
      .then((thinProfile) => loadAndParse(thinProfile));
  }

  export function loadAll(): Promise<Profile[]> {
    return query('army_profiles')
      .orderByDesc('createdAt')
      .fetch()
      .then((profiles) => {
        return Promise.all(profiles.map((profile) => loadAndParse(profile)));
      });
  }
}

function loadAndParse(thinProfile: ArmyProfile) {
  return loadUnitConfigurations(thinProfile.id).then((thinUnitConfigurations) =>
    profileParser(thinProfile, thinUnitConfigurations)
  );
}

function loadUnitConfigurations(profileId: string) {
  return query('unit_configurations').where('armyProfileId', profileId).fetch();
}

function createUnitConfigurations(
  profileJson: ProfileData,
  profileId: string
): Promise<UnitConfiguration[]> {
  return Promise.all(
    Object.entries(profileJson.unitNames).map(([unitName, items]) => {
      return createRecord('unit_configurations', {
        armyProfileId: profileId,
        unitName: unitName,
        abilityNames: items.abilityNames
      });
    })
  );
}

function removeUnitConfiguraiton(profileId: string) {
  return query('unit_configurations')
    .where('armyProfileId', profileId)
    .fetch()
    .then((configs) => {
      return Promise.all(configs.map((config) => deleteRecord('unit_configurations', config.id)));
    });
}

function remove(profileId: string) {
  return deleteRecord('army_profiles', profileId).then(() =>
    console.log(`removed profile ${profileId}`)
  );
}
