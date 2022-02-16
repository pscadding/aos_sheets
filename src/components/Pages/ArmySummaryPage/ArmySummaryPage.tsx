import { Unit } from '../../../models/Unit';
import styled from 'styled-components';
import { AppStyle } from '../../../styles/style';
import { Container, direction } from '../../Container/Container';
import { UnitContainer } from '../../UnitContainer/UnitContainer';
import { PhaseUnitTable } from '../../PhaseUnitTable/PhaseUnitTable';
import { Ability } from '../../../models/Ability';
import { AbilityContainer } from '../../AbilityContainer/AbilityContainer';

interface ArmySummaryPageProps {
  units: Unit[];
  armyAbilities: Ability[];
}

const PageWrapper = styled.div`
  margin: 3em;
`;

const UnitWrapper = styled.div`
  margin-top: ${AppStyle.spacing.large};
  break-inside: avoid-column;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 200%;
  border-bottom: 0.08em solid ${AppStyle.roles.general.border};
`;

/**
 * Primary UI component for user interaction
 */
export const ArmySummaryPage = ({ units, armyAbilities, ...props }: ArmySummaryPageProps) => {
  const unitComponents = units.map((unit, index) => (
    <UnitWrapper key={index}>
      <UnitContainer unit={unit} />
    </UnitWrapper>
  ));

  return (
    <PageWrapper>
      <Container direction={direction.vertical} spacing="1em">
        <Title>Units With Abilities By Phases</Title>
        <PhaseUnitTable units={units}></PhaseUnitTable>
        <Title>Army Abilities</Title>
        <AbilityContainer abilities={armyAbilities} />
        <Title>Units</Title>
        <Container columns={2} direction={direction.vertical} columnGap={'5em'}>
          {unitComponents}
        </Container>
      </Container>
    </PageWrapper>
  );
};
