import { Ability } from '../models/Ability';
import { Phase, PhaseStrings, PhaseRule, Turn, PhaseType } from '../models/Phase';
import { AppStyle } from '../styles/style';
import { getEnumKeys } from './enum';

export function getPhaseColor(phase: Phase): string {
  const phaseName = Phase[phase].toLowerCase() as keyof typeof AppStyle.roles.phases.background;
  return AppStyle.roles.phases.background[phaseName];
}

export function getPhasesFromAbilities(abilities: Ability[]): Phase[] {
  return getPhasesArray().filter((phase) =>
    abilities.some((ability) =>
      ability.phaseRules.some((phaseRule) => phaseRule.phases.includes(phase))
    )
  );
}

function filterOutPhases(phase: Phase, filters: Phase[]): boolean {
  if (!filters.length) return true;
  return !filters.includes(phase);
}

export function getPhasesArray(phasesFilters = [] as Phase[]): Phase[] {
  return getEnumKeys(Phase)
    .map((phaseKey) => Phase[phaseKey as PhaseStrings])
    .filter((phase) => filterOutPhases(phase, phasesFilters));
}

export function getPhaseRuleTurns(phaseRules: PhaseRule[], phaseType: PhaseType): Turn[] {
  return phaseRules
    .filter((phaseRule) => phaseRule.type === phaseType)
    .map((phaseRules) => phaseRules.turns)
    .flat();
}
