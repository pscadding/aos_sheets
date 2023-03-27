import styled from 'styled-components';
import { AppStyle } from '../../styles/style';
import { useEffect } from 'react';

interface ProfilePickerProps {
  armyProfileNames: string[];
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
export const ProfilePicker = ({
  armyProfileNames,
  onArmySelected,
  ...props
}: ProfilePickerProps) => {
  const armyProfileComponents = armyProfileNames.map((profileName: string, index) => (
    <OptionWrapper key={index}>{profileName}</OptionWrapper>
  ));

  useEffect(() => {
    if (onArmySelected != null) {
      onArmySelected(armyProfileNames[0]);
    }
  }, [armyProfileNames, onArmySelected]);

  return (
    <SelectBox
      id="profiles"
      defaultValue={armyProfileNames[0]}
      onChange={(event) => {
        onArmySelected ? onArmySelected(event.target.value) : null;
      }}>
      {armyProfileComponents}
    </SelectBox>
  );
};
