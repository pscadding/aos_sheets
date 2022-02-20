import { Unit } from '../../../models/Unit';
import styled from 'styled-components';
import { AppStyle } from '../../../styles/style';
import { Container, direction } from '../../Container/Container';
import { UnitContainer } from '../../UnitContainer/UnitContainer';
import { PhaseUnitTable } from '../../PhaseUnitTable/PhaseUnitTable';
import { Ability } from '../../../models/Ability';
import { AbilityContainer } from '../../AbilityContainer/AbilityContainer';
import { useEffect, useState } from 'react';
import {
  loadBattleTraits,
  loadEnhancements,
  loadProfile,
  loadUnits
} from '../../../utils/DataLoader';
import { Profile } from '../../../models/Profile';
import {
  attachByKeyword,
  attachByProfileUnit,
  filterAbilitiesByNames,
  filterAbilitiesByUnitKeyword
} from '../../../utils/AbilityUtils';

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

function loadData(
  profileName: string,
  setUnits: (u: Unit[]) => void,
  setArmyAbilities: (a: Ability[]) => void
) {
  loadProfile(profileName).then((profile: Profile) => {
    if (profile) {
      loadUnits(profile).then((units: Unit[]) => {
        loadEnhancements().then((enhancements: Ability[]) => {
          // Attach any enhancement abilities to the units if defined in the profile
          attachByProfileUnit(profile, units, enhancements);

          const armyEnhancements = filterAbilitiesByNames(enhancements, profile.armyAbilities);

          units.forEach((unit) => {
            // Add common spells to all wizards
            attachByKeyword('wizard', unit, enhancements);
            // Filter out any unit abilities that affect units that aren't in the army
            unit.abilities = filterAbilitiesByUnitKeyword(unit.abilities, units);
          });

          loadBattleTraits(profile).then((battleTraits: Ability[]) => {
            // Filter out any abilities that affect units that aren't in the army
            battleTraits = filterAbilitiesByUnitKeyword(battleTraits, units);

            setArmyAbilities([...armyEnhancements, ...battleTraits]);
          });
          setUnits(units);
        });
      });
    }
  });
}

/**
 * Primary UI component for user interaction
 */
export const ArmySummaryPage = ({ profileName, ...props }: ArmySummaryPageProps) => {
  const [units, setUnits] = useState<Unit[]>([]);
  const [armyAbilities, setArmyAbilities] = useState<Ability[]>([]);

  useEffect(() => {
    setUnits([]);
    setArmyAbilities([]);
    // Load the profile, then load the units for the profile, and store them in state.
    loadData(profileName, setUnits, setArmyAbilities);
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
        <PhaseUnitTable units={units} abilities={armyAbilities}></PhaseUnitTable>
        <Title>Battle Traits</Title>
        <AbilityContainer abilities={armyAbilities} />
        <Title>Units</Title>
        <Container columns={2} direction={direction.vertical} columnGap={'5em'}>
          {unitComponents}
        </Container>
      </Container>
    </PageWrapper>
  );
};
