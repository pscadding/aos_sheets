import { Phase, PhaseType } from '../../models/Phase';
import { Unit } from '../../models/Unit';
import { UnitName } from './PhaseUnitTableStyles';
import { abilityHasPhase } from '../../utils/AbilityUtils';
import { PhaseUnitTableColumnCellWrapper } from './PhaseUnitTableColumnCellWrapper';
import { AbilityType } from '../../models/Ability';
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
  //TODO: Improve these loops, we're filtering the abilities twice
  const components = phases.map((phase, phaseIndex) => {
    const unitNames = units
      .filter((unit) => {
        const abilities = unit.abilities.filter(
          (ability) =>
            abilityHasPhase(ability, phase, phaseType) && ability.type !== AbilityType.Standard
        );
        return !!abilities.length;
      })
      .map((unit, unitIndex) => {
        const abilityComponents = unit.abilities
          .filter(
            (ability) =>
              abilityHasPhase(ability, phase, phaseType) && ability.type !== AbilityType.Standard
          )
          .map((ability, abilityIndex) => (
            <PhaseUnitTableAbilityLine key={abilityIndex} ability={ability} phaseType={phaseType} />
          ));
        return (
          <div key={unitIndex + 'r'} style={{ marginLeft: AppStyle.spacing.small }}>
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
