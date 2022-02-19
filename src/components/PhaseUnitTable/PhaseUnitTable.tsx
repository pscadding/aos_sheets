import styled from 'styled-components';
import { AppStyle } from '../../styles/style';
import { Phase, PhaseStrings } from '../../models/Phase';
import { getEnumKeys } from '../../utils/enum';
import { Unit } from '../../models/Unit';
import { getPhaseColor } from '../../utils/phase';
import { Container, direction } from '../Container/Container';
import { hexToRGB } from '../../utils/color';
import { Ability, AbilityType } from '../../models/Ability';
import { ReactElement } from 'react-markdown/lib/react-markdown';

interface PhaseUnitTableProps {
  units: Unit[];
  abilities: Ability[];
}

const HeaderBackground = styled.th`
  padding-left: ${AppStyle.spacing.small};
  padding-right: ${AppStyle.spacing.small};
  background: ${(props: { phase: Phase }) => {
    const color = hexToRGB(getPhaseColor(props.phase), 0.5);
    return `linear-gradient(${color}, ${color}),
    linear-gradient(black, black);`;
  }};
  color: ${AppStyle.roles.table.dark.color};
  font-size: 160%;
`;

const Table = styled.table`
  border-top-right-radius: ${AppStyle.sizes.small};
  border-top-left-radius: ${AppStyle.sizes.small};
  border-top: ${AppStyle.sizes.xSmall} solid ${AppStyle.roles.general.border};
  border-left: ${AppStyle.sizes.xSmall} solid ${AppStyle.roles.general.border};
  border-right: ${AppStyle.sizes.xSmall} solid ${AppStyle.roles.general.border};
  border-spacing: 0px 0px;
  table-layout: fixed;
  width: 100%;
`;

const UnitName = styled.p`
  padding-left: ${AppStyle.spacing.small};
  margin: 0px;
  font-size: 120%;
`;

const Column = styled.td`
  vertical-align: top;
  background-color: ${(props: { phase: Phase }) => getPhaseColor(props.phase)};
  border-top: ${AppStyle.sizes.xxSmall} solid ${AppStyle.roles.general.border};
`;

const filterNonShownPhases = (phase: Phase) => phase !== Phase.Any && phase !== Phase.NA;

function getItemNameElement(key: number, name: string, subName?: string): ReactElement {
  return (
    <UnitName key={key}>
      {name} {subName}
    </UnitName>
  );
}

function getColumnCellElements(
  nameComponents: ReactElement[],
  phase: Phase,
  key: number
): ReactElement {
  return (
    <Column key={key} phase={phase}>
      <Container direction={direction.vertical} spacing={AppStyle.spacing.xSmall}>
        {nameComponents}
      </Container>
    </Column>
  );
}

export const PhaseUnitTable = ({ units, abilities, ...props }: PhaseUnitTableProps) => {
  // Get all the phases minus the All and the NA
  const phases = getEnumKeys(Phase)
    .map((phaseKey) => Phase[phaseKey as PhaseStrings])
    .filter((phase) => filterNonShownPhases(phase));

  // The header elements are named after the phases
  const phaseComponents = phases.map((phase, index) => {
    return (
      <HeaderBackground key={index} phase={Phase[phase as PhaseStrings]}>
        {phase}
      </HeaderBackground>
    );
  });

  // Now build a row of unit names per phase column. All units in the same phase go in the same row.
  const unitsByColumn = phases.map((phase, phaseIndex) => {
    const unitNames = units
      .filter((unit) => {
        const abilities = unit.abilities.filter(
          (ability) =>
            (ability.phases?.includes(phase) && ability.type !== AbilityType.Standard) ||
            (ability.phases?.includes(Phase.Any) && ability.type !== AbilityType.Standard)
        );
        return !!abilities.length;
      })
      .map((unit, unitIndex) => getItemNameElement(unitIndex, unit.name, unit.subName));
    return getColumnCellElements(unitNames, phase, phaseIndex);
  });

  // Now build a row of ability names per phase column. All units in the same phase go in the same row.
  // We are only interested in Faction abilities not tied to a single unit here.
  const abilitiesByColumn = phases.map((phase, phaseIndex) => {
    const abilityNames = abilities
      .filter((ability) => ability.phases?.includes(phase) || ability.phases?.includes(Phase.Any))
      .map((ability, unitIndex) => getItemNameElement(unitIndex, `${ability.name}`));
    return getColumnCellElements(abilityNames, phase, phaseIndex);
  });

  return (
    <Table>
      <thead>
        <tr>{phaseComponents}</tr>
      </thead>
      <tbody>
        <tr>{unitsByColumn}</tr>
        <tr>{abilitiesByColumn}</tr>
      </tbody>
    </Table>
  );
};
