import { useEffect, useState, useRef, memo } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Unit } from '../../../models/Unit';
import styled from 'styled-components';
import { AppStyle } from '../../../styles/style';
import { Container, direction } from '../../../components/Container/Container';
import { UnitContainerMemo } from '../../../components/UnitContainer/UnitContainer';
import { PhaseUnitTableMemo } from '../../../components/PhaseUnitTable/PhaseUnitTable';
import { Ability } from '../../../models/Ability';
import { AbilityContainerMemo } from '../../../components/AbilityContainer/AbilityContainer';
import { loadAbilities, loadProfile, loadProfileUnits } from '../../../data/DataLoader';
import { Profile } from '../../../models/Profile';

interface ArmySummaryPageProps {
  profileId: string;
}

const Button = styled.button`
  max-width: 20em;
`;

const PageWrapper = styled.div`
  '@media print': {
    display: block;
  }
`;

const UnitWrapper = styled.div`
  margin-top: ${AppStyle.spacing.large};
  width: 100%;
  break-inside: avoid;
`;

const Title = styled.h1`
  font-size: 200%;
  border-bottom: 0.08em solid ${AppStyle.roles.general.border};
`;

const ArmyName = styled(Title)`
  border-bottom: 0;
`;

function loadData(
  profileId: string,
  setProfile: (p: Profile) => void,
  setUnits: (u: Unit[]) => void,
  setArmyAbilities: (a: Ability[]) => void
) {
  // console.log(JSON.stringify(KillaBossOnGreatGnashtoof));

  const profilePromise = loadProfile(profileId);
  const unitsPromise = profilePromise.then(loadProfileUnits);

  unitsPromise.then(setUnits);
  profilePromise.then((profile) => {
    return unitsPromise.then((units) => loadAbilities(profile, units)).then(setArmyAbilities);
  });
}

/**
 * Primary UI component for user interaction
 */
export const ArmySummaryPage = ({ profileId, ...props }: ArmySummaryPageProps) => {
  const [profile, setProfile] = useState<Profile>();
  const [units, setUnits] = useState<Unit[]>([]);
  const [armyAbilities, setArmyAbilities] = useState<Ability[]>([]);
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  useEffect(() => {
    setUnits([]);
    setArmyAbilities([]);
    // Load the profile, then load the units for the profile, and store them in state.
    loadData(profileId, setProfile, setUnits, setArmyAbilities);
  }, [profileId]);

  const unitComponents = units.map((unit, index) => (
    <UnitWrapper key={index}>
      <UnitContainerMemo unit={unit} />
    </UnitWrapper>
  ));

  return (
    <Container direction={direction.vertical} spacing="1em">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handlePrint}>Print</Button>
      </div>
      <div style={{ margin: '3em' }}>
        <div ref={componentRef}>
          <PageWrapper>
            <ArmyName>{profile ? profile.name : ''}</ArmyName>
            <Title>Units With Abilities By Phases</Title>
            <PhaseUnitTableMemo units={units} abilities={armyAbilities}></PhaseUnitTableMemo>
            <Title>Battle Traits</Title>
            <AbilityContainerMemo abilities={armyAbilities} />
            <Title>Units</Title>
            <Container columns={2} direction={direction.vertical} columnGap={'3em'}>
              {unitComponents}{' '}
            </Container>
          </PageWrapper>
        </div>
      </div>
    </Container>
  );
};

export const ArmySummaryPageMemo = memo(ArmySummaryPage);
