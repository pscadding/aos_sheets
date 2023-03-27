import styled from 'styled-components';
import { AppStyle } from '../../styles/style';
import { useEffect } from 'react';
import { ArmyProfile } from 'thin-backend';

interface ProfilePickerProps {
  armyProfiles: ArmyProfile[];
  onArmySelected?: (armyId: string) => void;
}

const SelectBox = styled.select`
  border: none;
  outline: none;
  font-size: 170%;
  border-bottom: ${AppStyle.sizes.xxSmall} solid ${AppStyle.roles.general.border};
`;

const OptionWrapper = styled.option`
  font-size: 100%;
`;

/**
 * Primary UI component for user interaction
 */
export const ProfilePicker = ({ armyProfiles, onArmySelected, ...props }: ProfilePickerProps) => {
  const armyProfileComponents = armyProfiles.map((profile: ArmyProfile, index) => (
    <OptionWrapper key={index} value={profile.id}>
      {profile.name}
    </OptionWrapper>
  ));

  useEffect(() => {
    if (onArmySelected != null && armyProfiles.length) {
      onArmySelected(armyProfiles[0].id);
    }
  }, [armyProfiles, onArmySelected]);

  return (
    <SelectBox
      id="profiles"
      defaultValue={armyProfiles.length ? armyProfiles[0].id : ''}
      onChange={(event) => {
        onArmySelected ? onArmySelected(event.target.value) : null;
      }}>
      {armyProfileComponents}
    </SelectBox>
  );
};
