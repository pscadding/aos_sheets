import { query, UnitConfiguration } from 'thin-backend';
import { Unit } from '../../models/Unit';
import { UnitController } from './unitController';
import { ProfileController } from './profileController';
import { Profile } from '../../models/Profile';
import { Ability } from '../../models/Ability';
import { AbilityController } from './abilityController';

export namespace ThinLoad {
  export const loadProfile = async (profileId: string) => {
    return ProfileController.load(profileId);
  };

  export const loadProfiles = (): Promise<Profile[]> => {
    return ProfileController.loadAll();
  };

  export const loadProfileUnits = (profileId: string): Promise<Unit[]> => {
    return loadUnitConfigurations(profileId).then((configurations) => {
      return loadUnitsFromConfig(configurations);
    });
  };

  export const loadProfileBattleTraits = (profile: Profile): Promise<Ability[]> => {
    return Promise.all(
      profile.battleTraitTypes.map((battle) =>
        AbilityController.loadByTagAndType(battle, 'battle_trait')
      )
    ).then((abilityArrays) => abilityArrays.flat());
  };
}

const loadUnitConfigurations = (profileId: string) => {
  return query('unit_configurations').where('armyProfileId', profileId).fetch();
};

const loadUnitsFromConfig = (unitConfigs: UnitConfiguration[]): Promise<Unit[]> => {
  const unitIds = unitConfigs.map((uConfig) => uConfig.unitId);
  return UnitController.loadFromIds(unitIds);
};
