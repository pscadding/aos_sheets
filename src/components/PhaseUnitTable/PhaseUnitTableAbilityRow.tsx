import { Ability } from '../../models/Ability';
import { Phase, PhaseType } from '../../models/Phase';
import { abilityHasPhase } from '../../utils/AbilityUtils';
import { PhaseUnitTableColumnCellWrapper } from './PhaseUnitTableColumnCellWrapper';
import { UnitName } from './PhaseUnitTableStyles';

interface PhaseUnitTableAbilityRowProps {
  phases: Phase[];
  abilities: Ability[];
  phaseType: PhaseType;
}

export function PhaseUnitTableAbilityRow({
  phases,
  abilities,
  phaseType
}: PhaseUnitTableAbilityRowProps) {
  const components = phases.map((phase, phaseIndex) => {
    const abilityNames = abilities
      .filter((ability) => abilityHasPhase(ability, phase, phaseType))
      .map((ability, abilityIndex) => <UnitName key={abilityIndex}>{ability.name}</UnitName>);
    return (
      <PhaseUnitTableColumnCellWrapper phase={phase} key={phaseIndex}>
        {abilityNames}
      </PhaseUnitTableColumnCellWrapper>
    );
  });
  return <tr>{components}</tr>;
}
