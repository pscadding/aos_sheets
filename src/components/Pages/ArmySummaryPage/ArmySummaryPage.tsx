import { Unit } from '../../../models/Unit';
import styled from 'styled-components';
import { AppStyle } from '../../../styles/style';
import { Container, direction } from '../../Container/Container';
import { UnitContainer } from '../../UnitContainer/UnitContainer';

interface ArmySummaryPageProps {
  units: Unit[];
}

const UnitWrapper = styled.div`
  margin-top: ${AppStyle.spacing.large};
  break-inside: avoid-column;
  width: 90%;
`;

/**
 * Primary UI component for user interaction
 */
export const ArmySummaryPage = ({ units, ...props }: ArmySummaryPageProps) => {
  const unitComponents = units.map((unit, index) => (
    <UnitWrapper key={index}>
      <UnitContainer unit={unit} />
    </UnitWrapper>
  ));
  return (
    <Container columns={2} direction={direction.vertical}>
      {unitComponents}
    </Container>
  );
};
