import styled from 'styled-components';
import { memo } from 'react';
import { AppStyle } from '../../../styles/style';
import { Container, direction } from '../../Container/Container';
import { ProfilePicker } from '../../ProfilePicker/ProfilePicker';
import { useEffect, useState, useCallback } from 'react';
import { loadProfiles } from '../../../utils/DataLoader';

interface PickArmyProfilePageProps {
  onLoadProfile: (profileName: string) => void;
}

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

const MemoizedProfilePicker = memo(ProfilePicker);

export const PickArmyProfilePage = ({ onLoadProfile, ...props }: PickArmyProfilePageProps) => {
  const [profileNames, setProfileNames] = useState<string[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<string>('');

  useEffect(() => {
    loadProfiles().then((data) => {
      const pNames = Object.keys(data);
      setProfileNames(pNames);
      setSelectedProfile(pNames[0]);
    });
  }, []);

  const onSelectedArmyChange = useCallback((armyName: string): void => {
    setSelectedProfile(armyName);
  }, []);

  return (
    <PageWrapper>
      <FormWrapper>
        <Container direction={direction.vertical} spacing="1em">
          <Title>Choose Army Profile</Title>
          <MemoizedProfilePicker
            armyProfileNames={profileNames}
            onArmySelected={onSelectedArmyChange}
          />
          <button
            onClick={() => {
              if (onLoadProfile) onLoadProfile(selectedProfile);
            }}>
            Load Profile
          </button>
        </Container>
      </FormWrapper>
    </PageWrapper>
  );
};
