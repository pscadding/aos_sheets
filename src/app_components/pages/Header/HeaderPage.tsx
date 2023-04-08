import styled from 'styled-components';
import { AppStyle } from '../../../styles/style';
import { useState, ChangeEvent, MouseEvent, useRef } from 'react';
import { Container, direction } from '../../../components/Container/Container';
import { ThinUserProfile } from '../../ThinUserProfile/ThinUserProfile';
import { ConnectedProfilePicker } from '../../ConnectedProfilePicker/ConnectedProfilePicker';
import { importJson } from '../../../data/DataImporter';
import { battleTraits, enhancements } from '../../../data/abilities/abilities';
import { units } from '../../../data/units/units';

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
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  // console.log(JSON.stringify(battleTraits));

  const handleClick = (_: MouseEvent<HTMLButtonElement>) => {
    if (hiddenFileInput.current != null) {
      hiddenFileInput.current.click();
    }
  };

  const fileSelectedHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target == null || e.target.files == null) {
      return;
    }

    const data: string[] = [];
    const fileCount = e.target.files.length;

    const read = (ev: ProgressEvent<FileReader>) => {
      const content = ev.target?.result;
      data.push(content as string);
      e.target.value = '';
    };

    const onLoadEnd = async (e: ProgressEvent<FileReader>) => {
      if (data.length === fileCount) {
        for (const fileContent of data) {
          const jsonData = JSON.parse(fileContent as string);
          await importJson(jsonData);
        }
      }
    };

    for (var i = 0; i < fileCount; i++) {
      const reader = new FileReader();
      reader.onload = read;
      reader.onloadend = onLoadEnd;
      console.log('reading', e.target.files[i]);
      reader.readAsText(e.target.files[i]);
    }
  };

  return (
    <PageWrapper>
      <FormWrapper>
        <Container
          direction={direction.horizontal}
          spacing="1em"
          justifyContent={'space-between'}
          alignItems={'center'}>
          <button onClick={handleClick}>Import</button>
          <input
            id="filePicker"
            style={{ visibility: 'hidden' }}
            accept=".json"
            ref={hiddenFileInput}
            type="file"
            onChange={fileSelectedHandler}
            multiple
          />

          <Container direction={direction.horizontal} spacing="1em" alignItems={'center'}>
            <Title>Choose Army Profile</Title>
            <ConnectedProfilePicker onArmySelected={setSelectedProfile} />
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
