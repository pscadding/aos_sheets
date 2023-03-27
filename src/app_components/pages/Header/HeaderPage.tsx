import styled from 'styled-components';
import { AppStyle } from '../../../styles/style';
import { useState } from 'react';
import { Container, direction } from '../../../components/Container/Container';
import { ThinUserProfile } from '../../ThinUserProfile/ThinUserProfile';
import { ThinProfilePicker } from '../../ThinProfilePicker/ThinProfilePicker';

interface HeaderProps {
  onLoadProfile: (profileName: string) => void;
  onLogout: () => void;
}

const PageWrapper = styled.main`
  display: flex;
  justify-content: center;
  margin: 3em;
`;

const Title = styled.h1`
  font-size: 150%;
  border-bottom: 0.08em solid ${AppStyle.roles.general.border};
`;

const FormWrapper = styled.div`
  width: 100%;
`;

export const Header = ({ onLoadProfile, onLogout, ...props }: HeaderProps) => {
  const [selectedProfile, setSelectedProfile] = useState<string>('');

  return (
    <PageWrapper>
      <FormWrapper>
        <Container
          direction={direction.horizontal}
          spacing="1em"
          justifyContent={'space-between'}
          alignItems={'center'}>
          <div />
          <Container direction={direction.horizontal} spacing="1em" alignItems={'center'}>
            <Title>Choose Army Profile</Title>
            <ThinProfilePicker onArmySelected={setSelectedProfile} />
            <button
              onClick={() => {
                if (onLoadProfile) onLoadProfile(selectedProfile);
              }}>
              Load Profile
            </button>
          </Container>
          <ThinUserProfile />
        </Container>
      </FormWrapper>
    </PageWrapper>
  );
};
