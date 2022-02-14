import styled from 'styled-components';
import { AppStyle } from '../../styles/style';
import { Phase } from '../../models/Phase';
import { getEnumKeys } from '../../utils/enum';
import { Unit } from '../../models/Unit';
import { getPhaseColor } from '../../utils/phase';
import { Container, direction } from '../Container/Container';

interface PhaseUnitTableProps {
  units: Unit[];
}

const Header = styled.th`
  padding-left: ${AppStyle.spacing.small};
  padding-right: ${AppStyle.spacing.small};
  background-color: ${(props: { phase: Phase }) => getPhaseColor(props.phase)};
  filter: brightness(85%);
  border-top-left-radius: ${AppStyle.sizes.xSmall};
  border-top-right-radius: ${AppStyle.sizes.xSmall};
  font-size: 150%;
`;

const Table = styled.table`
  border-spacing: ${AppStyle.spacing.medium} 0px;
  table-layout: fixed;
  width: 100%;
`;

const UnitName = styled.p`
  padding: ${AppStyle.spacing.small};
  margin: 0px;
`;

const Column = styled.td`
  vertical-align: top;
  background-color: ${(props: { phase: Phase }) => getPhaseColor(props.phase)};
`;

type PhaseStrings = keyof typeof Phase;

export const PhaseUnitTable = ({ units, ...props }: PhaseUnitTableProps) => {
  const phases = getEnumKeys(Phase);
  const phaseComponents = phases
    .filter((phase) => phase !== 'Any')
    .map((phase, index) => {
      return (
        <Header key={index} phase={Phase[phase as PhaseStrings]}>
          {phase}
        </Header>
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
          <Container direction={direction.vertical} spacing={AppStyle.spacing.xsmall}>
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
