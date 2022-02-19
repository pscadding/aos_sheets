import { Unit } from '../../../models/Unit';
import styled from 'styled-components';
import { AppStyle } from '../../../styles/style';
import { Container, direction } from '../../Container/Container';
import { UnitContainer } from '../../UnitContainer/UnitContainer';
import { PhaseUnitTable } from '../../PhaseUnitTable/PhaseUnitTable';
import { Ability } from '../../../models/Ability';
import { AbilityContainer } from '../../AbilityContainer/AbilityContainer';
import { useEffect, useState } from 'react';
import { loadProfile, loadUnits } from '../../../utils/DataLoader';
import { Profile } from '../../../models/Profile';

interface ArmySummaryPageProps {
  profileName: string;
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
export const ArmySummaryPage = ({ profileName, ...props }: ArmySummaryPageProps) => {
  const [units, setUnits] = useState<Unit[]>([]);
  const [armyAbilities, setArmyAbilities] = useState<Ability[]>([]);

  useEffect(() => {
    // Load the profile, then load the units for the profile, and store them in state.
    loadProfile(profileName)
      .then((profile: Profile) => {
        if (profile) {
          return loadUnits(profile);
        }
        return [];
      })
      .then((units: Unit[]) => {
        setUnits(units);
      });
  }, [profileName]);

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
