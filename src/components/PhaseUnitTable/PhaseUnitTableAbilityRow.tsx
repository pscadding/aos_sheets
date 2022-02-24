import { Ability } from '../../models/Ability';
import { Phase, PhaseType } from '../../models/Phase';
import { AppStyle } from '../../styles/style';
import { abilityHasPhase } from '../../utils/AbilityUtils';
import { PhaseUnitTableAbilityLine } from './PhaseUnitTableAbilityLine';
import { PhaseUnitTableColumnCellWrapper } from './PhaseUnitTableColumnCellWrapper';
import { UnitNameAbility } from './PhaseUnitTableStyles';

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
      .map((ability, abilityIndex) => (
        <div key={abilityIndex} style={{ marginLeft: AppStyle.spacing.small }}>
          <PhaseUnitTableAbilityLine ability={ability} phaseType={phaseType} />
        </div>
      ));
    return (
      <PhaseUnitTableColumnCellWrapper phase={phase} key={phaseIndex}>
        {abilityNames}
      </PhaseUnitTableColumnCellWrapper>
    );
  });
  return <tr>{components}</tr>;
}
