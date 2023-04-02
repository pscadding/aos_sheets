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

  export const loadProfileBattleTraits = (profile: Profile): Promise<Ability[]> => {
    return Promise.all(
      profile.battleTraitTypes.map((battle) =>
        AbilityController.loadByTagAndType(battle, 'battle_trait')
      )
    ).then((abilityArrays) => abilityArrays.flat());
  };

  export const loadProfileAbilities = (profile: Profile): Promise<Ability[]> => {
    return Promise.all(
      profile.armyAbilities.map((abilityName) => AbilityController.loadByName(abilityName))
    );
  };
}
