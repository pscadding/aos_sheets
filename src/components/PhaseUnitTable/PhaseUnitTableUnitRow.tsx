import { Phase, PhaseType } from '../../models/Phase';
import { Unit } from '../../models/Unit';
import { UnitName } from './PhaseUnitTableStyles';
import { abilityHasPhase } from '../../utils/AbilityUtils';
import { PhaseUnitTableColumnCellWrapper } from './PhaseUnitTableColumnCellWrapper';
import { Ability, AbilityType } from '../../models/Ability';
import { PhaseUnitTableAbilityLine } from './PhaseUnitTableAbilityLine';
import { AppStyle } from '../../styles/style';

interface PhaseUnitTableUnitRowProps {
  phases: Phase[];
  units: Unit[];
  phaseType: PhaseType;
}

export function PhaseUnitTableUnitRow({
  phases,
  units,
  phaseType,
  ...props
}: PhaseUnitTableUnitRowProps) {
  const getAbilityComponents = (phase: Phase, abilities: Ability[]) => {
    return abilities
      .filter((ability) => abilityHasPhase(ability, phase, phaseType))
      .map((ability, abilityIndex) => (
        <PhaseUnitTableAbilityLine key={abilityIndex} ability={ability} phaseType={phaseType} />
      ));
  };

  const components = phases.map((phase, phaseIndex) => {
    const abilityUnitElements = units.flatMap((unit, unitIndex) => {
      const abilityComponents = getAbilityComponents(phase, unit.abilities);
      if (abilityComponents.length !== 0) {
        return (
          <div key={unitIndex + 'r'} style={{ marginLeft: AppStyle.spacing.small }}>
            <UnitName key={unitIndex}>
              {unit.name}
              {unit.subName ? ` ${unit.subName}` : ''}
            </UnitName>
            {abilityComponents}
          </div>
        );
      }
      return [];
    });
    return (
      <PhaseUnitTableColumnCellWrapper phase={phase} key={phaseIndex}>
        {abilityUnitElements}
      </PhaseUnitTableColumnCellWrapper>
    );
  });
  return <tr>{components}</tr>;
}
