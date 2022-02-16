import styled from 'styled-components';
import { AppStyle } from '../../styles/style';
import { Phase, PhaseStrings } from '../../models/Phase';
import { getEnumKeys } from '../../utils/enum';
import { Unit } from '../../models/Unit';
import { getPhaseColor } from '../../utils/phase';
import { Container, direction } from '../Container/Container';
import { hexToRGB } from '../../utils/color';

interface PhaseUnitTableProps {
  units: Unit[];
}

const HeaderBackground = styled.th`
  padding-left: ${AppStyle.spacing.small};
  padding-right: ${AppStyle.spacing.small};
  background: ${(props: { phase: Phase }) => {
    const color = hexToRGB(getPhaseColor(props.phase), 0.5);
    return `linear-gradient(${color}, ${color}),
    linear-gradient(black, black);`;
  }};
  // border-top-left-radius: ${AppStyle.sizes.xxSmall};
  // border-top-right-radius: ${AppStyle.sizes.xxSmall};
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
  background: linear-gradient(
    180deg,
    ${(props: { phase: Phase }) => hexToRGB(getPhaseColor(props.phase))} 0%,
    ${(props: { phase: Phase }) => hexToRGB(getPhaseColor(props.phase), 0.3)} 100%
  );
`;

export const PhaseUnitTable = ({ units, ...props }: PhaseUnitTableProps) => {
  const phases = getEnumKeys(Phase);
  const phaseComponents = phases
    .filter((phase) => phase !== 'Any')
    .map((phase, index) => {
      return (
        <HeaderBackground key={index} phase={Phase[phase as PhaseStrings]}>
          {phase}
        </HeaderBackground>
      );
    });

  const unitsByColumn = phases
    .filter((phase) => phase !== 'Any')
    .map((phase, phaseIndex) => {
      const unitNames = units
        .filter((unit) => {
          const abilities = unit.abilities.filter((ability) =>
            ability.phases?.includes(Phase[phase as PhaseStrings])
          );
          return !!abilities.length;
        })
        .map((unit, unitIndex) => (
          <UnitName key={unitIndex}>
            {unit.name} {unit.subName}
          </UnitName>
        ));
      return (
        <Column key={phaseIndex} phase={Phase[phase as PhaseStrings]}>
          <Container direction={direction.vertical} spacing={AppStyle.spacing.xSmall}>
            {unitNames}
          </Container>
        </Column>
      );
    });

  return (
    <Table>
      <thead>
        <tr>{phaseComponents}</tr>
      </thead>
      <tbody>
        <tr>{unitsByColumn}</tr>
      </tbody>
    </Table>
  );
};
