import { PhaseRule as ThinPhaseRule } from 'thin-backend';
import { removeQuotes, snakeToPascal } from '../utils/string_utils';
import {
  PhaseRule,
  PhaseType,
  PhaseTypeStrings,
  TurnStrings,
  Turn,
  PhaseStrings,
  Phase
} from '../models/Phase';

export function phaseRuleParser(phaseRule: ThinPhaseRule): PhaseRule {
  const phaseTypeString = snakeToPascal(phaseRule.phaseType) as PhaseTypeStrings;

  // Due to what seems a bug we are getting the quotes doubled up by thin
  const r = phaseRule.turns.map((t) => Turn[snakeToPascal(removeQuotes(t)) as TurnStrings]);
  return {
    type: PhaseType[phaseTypeString],
    turns: phaseRule.turns.map((t) => Turn[snakeToPascal(removeQuotes(t)) as TurnStrings]),
    phases: phaseRule.phases.map((p) => Phase[snakeToPascal(removeQuotes(p)) as PhaseStrings])
  };
}
