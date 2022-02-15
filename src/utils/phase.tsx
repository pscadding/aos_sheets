import { Ability } from '../models/Ability';
import { Phase, PhaseStrings } from '../models/Phase';
import { AppStyle } from '../styles/style';
import { getEnumKeys } from './enum';

export function getPhaseColor(phase: Phase): string {
  const phaseName = Phase[phase].toLowerCase() as keyof typeof AppStyle.roles.phases.background;
  return AppStyle.roles.phases.background[phaseName];
}

export function getPhasesFromAbilities(abilities: Ability[]): Phase[] {
  return getEnumKeys(Phase)
    .filter((phase) => {
      const phaseAbilities = abilities.filter((ability) =>
        ability.phases?.includes(Phase[phase as PhaseStrings])
      );
      return !!phaseAbilities.length;
    })
    .map((phase) => Phase[phase as PhaseStrings]);
}
