import styled from 'styled-components';
import { AppStyle } from '../../styles/style';
import { Ability, AbilityType, AbilityDamageTable } from '../../models/Ability';
import { AbilityPanel } from './AbilityPanel/AbilityPanel';
import { AbilityDamageTablePanel } from './AbilityDamageTable/AbilityDamageTable';

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
export const AbilityContainer = ({ abilities, ...props }: AbilityContainerProps) => {
  let abilityComponents;
  if (abilities) {
    abilityComponents = abilities.map((ability, index) => {
      if (ability.type === AbilityType.DamageTable) {
        return <AbilityDamageTablePanel key={index} ability={ability as AbilityDamageTable} />;
      } else {
        return <AbilityPanel key={index} ability={ability} />;
      }
    });
  }
  return <ContainerStyle>{abilityComponents}</ContainerStyle>;
};
