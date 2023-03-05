import styled from 'styled-components';
import { memo } from 'react';
import { AppStyle } from '../../styles/style';
import { Ability, AbilityType, AbilityDamageTable } from '../../models/Ability';
import { AbilityPanelMemo } from './AbilityPanel/AbilityPanel';
import AbilityDamageTablePanel from './AbilityDamageTable/AbilityDamageTable';

interface AbilityContainerProps {
  abilities: Ability[];
}
const ContainerStyle = styled.div`
  column-count: 2;
  margin-top: ${AppStyle.spacing.small};
`;

/**
 * Primary UI component for user interaction
 */
export const AbilityContainer = ({ abilities }: AbilityContainerProps) => {
  let abilityComponents;
  if (abilities) {
    abilityComponents = abilities.map((ability, index) => {
      if (ability.type === AbilityType.DamageTable) {
        return <AbilityDamageTablePanel key={index} ability={ability as AbilityDamageTable} />;
      } else {
        return <AbilityPanelMemo key={index} ability={ability} />;
      }
    });
  }
  return <ContainerStyle>{abilityComponents}</ContainerStyle>;
};

export const AbilityContainerMemo = memo(AbilityContainer);
