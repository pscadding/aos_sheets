import { AbilityData, PhaseRuleData } from '../../models/JsonModels';
import {
  Ability as ThinAbility,
  AbilityType,
  createRecord,
  deleteRecord,
  Phase,
  PhaseType,
  query,
  Turn
} from 'thin-backend';
import { removeQuotesFromArray, toSnakeCase } from '../string_utils';
import { abilityParser } from '../../parsers/AbilityParser';
import { PhaseRule } from '../../models/Phase';
import { phaseRuleParser } from '../../parsers/PhaseRuleParser';
import { Ability } from '../../models/Ability';

export namespace AbilityController {
  export function createBatch(abilitiesJson: AbilityData[], unitId: string | null) {
    return Promise.all(
      abilitiesJson.map((abilityJson) => AbilityController.create(abilityJson, unitId))
    );
  }

  export function create(abilityJson: AbilityData, unitId: string | null) {
    return createRecord('ability', {
      name: abilityJson.name,
      aType: toSnakeCase(abilityJson.type) as AbilityType,
      enhancement: abilityJson.enhancement,
      tags: abilityJson.tags,
      description: abilityJson.description,
      attachKeyword: abilityJson.attachKeyword,
      filterUnitKeywords: abilityJson.filterUnitKeywords,
      unitId: unitId
    }).then((ability) => {
      return Promise.all(
        abilityJson.phaseRules.map((phaseRule) =>
          createPhaseRuleRecord(phaseRule, ability).then(() => ability)
        )
      );
    });
  }

  const createPhaseRuleRecord = (phaseRule: PhaseRuleData, thinAbility: ThinAbility) => {
    return createRecord('phase_rule', {
      phases: phaseRule.phases.map((p) => p.toLowerCase() as Phase),
      phaseType: toSnakeCase(phaseRule.type) as PhaseType,
      turns: phaseRule.turns.map((t) => t.toLowerCase() as Turn),
      abilityId: thinAbility.id
    });
  };

  export function removeByUnit(unitId: string) {
    return query('ability')
      .where('unitId', unitId)
      .fetch()
      .then((abilities) => {
        Promise.all(
          abilities.map((ability) => {
            return remove(ability.id);
          })
        );
      });
  }

  export function removeByName(abilityName: string) {
    return query('ability')
      .where('name', abilityName)
      .fetchOne()
      .then((ability) => {
        if (ability) {
          return remove(ability.id);
        }
      });
  }

  export function loadByUnit(unitId: string): Promise<Ability[]> {
    return query('ability')
      .where('unitId', unitId)
      .fetch()
      .then((thinAbilities) => {
        return loadAbilities(thinAbilities);
      });
  }

  export function loadByTagAndType(tag: string, type: AbilityType): Promise<Ability[]> {
    return query('ability')
      .where('aType', type)
      .fetch()
      .then((thinAbilities) => {
        const filtered = thinAbilities.filter((tAbility) =>
          removeQuotesFromArray(tAbility.tags).includes(tag)
        );
        return loadAbilities(filtered);
      });
  }
}

function remove(abilityId: string) {
  return removePhaseRules(abilityId).then(() => deleteRecord('ability', abilityId));
}

function removePhaseRules(abilityId: string) {
  return query('phase_rule')
    .where('abilityId', abilityId)
    .fetch()
    .then((phaseRules) => {
      // TODO: should check that the phase rule exists before removing
      return Promise.all(phaseRules.map((phaseRule) => deleteRecord('phase_rule', phaseRule.id)));
    });
}

async function loadAbilities(thinAbilities: ThinAbility[]) {
  const abilities: Ability[] = [];
  for (let i = 0; i < thinAbilities.length; i++) {
    const thinAbility = thinAbilities[i];
    const phaseRules = await loadAbilityPhaseRules(thinAbility.id);
    abilities.push(abilityParser(thinAbility, phaseRules));
  }
  return abilities;
}

function loadAbilityPhaseRules(abilityId: string): Promise<PhaseRule[]> {
  return query('phase_rule')
    .where('abilityId', abilityId)
    .fetch()
    .then((thinPhaseRules) => {
      return thinPhaseRules.map((thinPhaseRule) => phaseRuleParser(thinPhaseRule));
    });
}
