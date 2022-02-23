import { Phase, PhaseType } from '../../models/Phase';
import { Unit } from '../../models/Unit';
import { UnitNameAbility, UnitName } from './PhaseUnitTableStyles';
import { abilityHasPhase } from '../../utils/AbilityUtils';
import { AppStyle } from '../../styles/style';
import { PhaseUnitTableColumnCellWrapper } from './PhaseUnitTableColumnCellWrapper';

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
  //TODO: Improve these loops, we're filtering the abilities twice
  const components = phases.map((phase, phaseIndex) => {
    const unitNames = units
      .filter((unit) => {
        const abilities = unit.abilities.filter((ability) =>
          abilityHasPhase(ability, phase, phaseType)
        );
        return !!abilities.length;
      })
      .map((unit, unitIndex) => {
        const abilityComponents = unit.abilities
          .filter((ability) => abilityHasPhase(ability, phase, phaseType))
          .map((ability, abilityIndex) => (
            <UnitNameAbility key={abilityIndex}>- {ability.name}</UnitNameAbility>
          ));
        return (
          <div key={unitIndex + 'r'} style={{ marginTop: AppStyle.spacing.medium }}>
            <UnitName key={unitIndex}>
              {unit.name}
              {unit.subName ? ` ${unit.subName}` : ''}
            </UnitName>
            {abilityComponents}
          </div>
        );
      });
    return unitNames.length ? (
      <PhaseUnitTableColumnCellWrapper phase={phase} key={phaseIndex}>
        {unitNames}
      </PhaseUnitTableColumnCellWrapper>
    ) : null;
  });
  return <tr>{components}</tr>;
}
