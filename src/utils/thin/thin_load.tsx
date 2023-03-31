import { ArmyProfile, query, UnitConfiguration } from 'thin-backend';
import { unitParser } from '../../parsers/UnitParser';
import { Unit } from '../../models/Unit';
import { weaponParser } from '../../parsers/WeaponParser';
import { Weapon } from '../../models/Weapon';
import { abilityParser } from '../../parsers/AbilityParser';
import { Ability } from '../../models/Ability';
import { PhaseRule } from '../../models/Phase';
import { phaseRuleParser } from '../../parsers/PhaseRuleParser';

export const loadProfile = async (profileId: string) => {
  return query('army_profiles').where('id', profileId).fetchOne();
};

export const loadProfileUnits = (profileId: string): Promise<Unit[]> => {
  return loadUnitConfigurations(profileId).then((configurations) => {
    return loadUnitsFromConfig(configurations);
  });
};

const loadUnitConfigurations = (profileId: string) => {
  return query('unit_configurations').where('armyProfileId', profileId).fetch();
};

const loadUnitsFromConfig = (unitConfigs: UnitConfiguration[]): Promise<Unit[]> => {
  const unitIds = unitConfigs.map((uConfig) => uConfig.unitId);
  return query('units')
    .whereIn('id', unitIds)
    .fetch()
    .then(async (thinUnits) => {
      const units: Unit[] = [];
      for (let i = 0; i < thinUnits.length; i++) {
        const thinUnit = thinUnits[i];
        const weapons = await loadWeapons(thinUnit.id);
        const abilities = await loadUnitAbilities(thinUnit.id);
        units.push(unitParser(thinUnit, weapons, abilities));
      }
      return units;
    });
};

const loadWeapons = (unitId: string): Promise<Weapon[]> => {
  return query('weapons')
    .where('id', unitId)
    .fetch()
    .then((thinWeapons) => {
      return thinWeapons.map((thinWeapon) => weaponParser(thinWeapon));
    });
};

const loadUnitAbilities = (unitId: string): Promise<Ability[]> => {
  return query('ability')
    .where('unitId', unitId)
    .fetch()
    .then(async (thinAbilities) => {
      const abilities: Ability[] = [];
      for (let i = 0; i < thinAbilities.length; i++) {
        const thinAbility = thinAbilities[i];
        const phaseRules = await loadAbilityPhaseRules(thinAbility.id);
        abilities.push(abilityParser(thinAbility, phaseRules));
      }
      return abilities;
    });
};

const loadAbilityPhaseRules = (abilityId: string): Promise<PhaseRule[]> => {
  return query('phase_rule')
    .where('abilityId', abilityId)
    .fetch()
    .then((thinPhaseRules) => {
      return thinPhaseRules.map((thinPhaseRule) => phaseRuleParser(thinPhaseRule));
    });
};
