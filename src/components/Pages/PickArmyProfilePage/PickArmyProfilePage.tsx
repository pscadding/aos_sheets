import styled from 'styled-components';
import { AppStyle } from '../../../styles/style';
import { Container, direction } from '../../Container/Container';
import { ProfilePicker } from '../../ProfilePicker/ProfilePicker';
import { useParams, useNavigate } from 'react-router-dom';

interface PickArmyProfilePageProps {
  armyProfileNames: string[];
}

const PageWrapper = styled.main`
  display: flex;
  justify-content: center;
  margin: 3em;
`;

const UnitWrapper = styled.div`
  margin-top: ${AppStyle.spacing.large};
  break-inside: avoid-column;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 250%;
  border-bottom: 0.08em solid ${AppStyle.roles.general.border};
`;

const FormWrapper = styled.div`
  width: 30em;
`;

/**
 * Primary UI component for user interaction
 */
export const PickArmyProfilePage = ({ armyProfileNames, ...props }: PickArmyProfilePageProps) => {
  let navigate = useNavigate();
  let selectedArmy: string = '';

  const getSelectedArmy = (armyId: string): void => {
    selectedArmy = armyId;
  };

  return (
    <PageWrapper>
      <FormWrapper>
        <Container direction={direction.vertical} spacing="1em">
          <Title>Choose Army Profile</Title>
          <ProfilePicker armyProfileNames={armyProfileNames} onArmySelected={getSelectedArmy} />
          <button
            onClick={() => {
              navigate(`/summary/${selectedArmy}`);
            }}>
            Load Profile
          </button>
        </Container>
      </FormWrapper>
    </PageWrapper>
  );
};
