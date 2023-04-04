import { Ability as ThinAbility } from 'thin-backend';
import { removeQuotesFromArray, snakeToPascal } from '../utils/string_utils';
import { Ability, AbilityType, AbilityTypeStrings } from '../models/Ability';
import { PhaseRule } from '../models/Phase';

export function abilityParser(ability: ThinAbility, phaseRules: PhaseRule[]): Ability {
  const abilityTypeString = snakeToPascal(ability.aType) as AbilityTypeStrings;

  return {
    name: ability.name,
    type: AbilityType[abilityTypeString],
    enhancement: ability.enhancement,
    tags: ability.tags,
    description: ability.description,
    phaseRules: phaseRules,
    attachKeyword: ability.attachKeyword,
    filterUnitKeywords: removeQuotesFromArray(ability.filterUnitKeywords)
  };
}
