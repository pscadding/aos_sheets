import { Ability } from '../models/Ability';
import { Phase, PhaseType } from '../models/Phase';

/**
 * Sorts the array of abilities by type first and then by name second.
 * @param abilities
 */
export function sortAbilities(abilities: Ability[]): void {
  abilities.sort((a, b) => {
    if (a.type !== b.type) {
      return a.type < b.type ? 1 : -1;
    } else {
      return a.name > b.name ? 1 : -1;
    }
  });
}

/**
 * Loops through all the Abilities phase rules and checks to see if there is a phase rule that includes the passed phase.
 * Providing a type means it also checks that the phase exists in the desired phase type.
 * @param ability
 * @param phase
 * @param phaseType
 * @returns
 */
export function abilityHasPhase(ability: Ability, phase: Phase, phaseType?: PhaseType): boolean {
  return ability.phaseRules.some((phaseRule) => {
    const phaseTypeCheck = phaseType !== null ? phaseRule.type === phaseType : true;
    return (
      (phaseTypeCheck && phaseRule.phases.includes(phase)) ||
      (phaseTypeCheck && phaseRule.phases.includes(Phase.Any))
    );
  });
}
