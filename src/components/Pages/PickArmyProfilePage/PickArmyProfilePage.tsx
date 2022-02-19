import styled from 'styled-components';
import { AppStyle } from '../../../styles/style';
import { Container, direction } from '../../Container/Container';
import { ProfilePicker } from '../../ProfilePicker/ProfilePicker';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { loadProfiles } from '../../../utils/DataLoader';

interface PickArmyProfilePageProps {}

const PageWrapper = styled.main`
  display: flex;
  justify-content: center;
  margin: 3em;
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
export const PickArmyProfilePage = ({ ...props }: PickArmyProfilePageProps) => {
  let navigate = useNavigate();

  const [profileNames, setProfileNames] = useState<string[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<string>('');

  useEffect(() => {
    loadProfiles().then((data) => {
      console.log('loaded profiles:', data);
      const pNames = Object.keys(data);
      setProfileNames(pNames);
      setSelectedProfile(pNames[0]);
    });
  }, []);

  const onSelectedArmyChange = (armyName: string): void => {
    setSelectedProfile(armyName);
  };

  return (
    <PageWrapper>
      <FormWrapper>
        <Container direction={direction.vertical} spacing="1em">
          <Title>Choose Army Profile</Title>
          <ProfilePicker armyProfileNames={profileNames} onArmySelected={onSelectedArmyChange} />
          <button
            onClick={() => {
              navigate(`/summary/${selectedProfile}`);
            }}>
            Load Profile
          </button>
        </Container>
      </FormWrapper>
    </PageWrapper>
  );
};
