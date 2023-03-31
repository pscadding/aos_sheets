import { AbilityData, PhaseRuleData } from '../../models/JsonModels';
import {
  Ability,
  AbilityType,
  createRecord,
  deleteRecord,
  Phase,
  PhaseType,
  query,
  Turn
} from 'thin-backend';

export namespace AbilityController {
  export function createBatch(abilitiesJson: AbilityData[], unitId: string) {
    return Promise.all(
      abilitiesJson.map((abilityJson) => AbilityController.create(abilityJson, unitId))
    );
  }

  export function create(abilityJson: AbilityData, unitId: string) {
    return createRecord('ability', {
      name: abilityJson.name,
      aType: abilityJson.type.toLowerCase() as AbilityType,
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

  const createPhaseRuleRecord = (phaseRule: PhaseRuleData, thinAbility: Ability) => {
    return createRecord('phase_rule', {
      phases: phaseRule.phases.map((p) => p.toLowerCase() as Phase),
      phaseType: phaseRule.type.toLowerCase().replace(' ', '_') as PhaseType,
      turns: phaseRule.turns.map((t) => t.toLowerCase() as Turn),
      abilityId: thinAbility.id
    });
  };

  export function remove(unitId: string) {
    return query('ability')
      .where('unitId', unitId)
      .fetch()
      .then((abilities) => {
        Promise.all(
          abilities.map((ability) => {
            return removePhaseRules(ability).then(() => deleteRecord('ability', ability.id));
          })
        );
      });
  }

  const removePhaseRules = (ability: Ability) => {
    return query('phase_rule')
      .where('abilityId', ability.id)
      .fetch()
      .then((phaseRules) => {
        return Promise.all(phaseRules.map((phaseRule) => deleteRecord('phase_rule', phaseRule.id)));
      });
  };
}
