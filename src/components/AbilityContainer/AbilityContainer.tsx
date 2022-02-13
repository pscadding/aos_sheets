import styled, { css } from 'styled-components';
import { AppStyle } from '../../styles/style';
import { Container, direction } from '../Container/Container';
import { Ability, AbilityType } from '../../models/Ability';
import ReactMarkdown from 'react-markdown';

interface AbilityContainerProps {
  abilities: Ability[];
  type: AbilityType;
}

const ReactMarkdownStyle = styled(ReactMarkdown)`
  margin: 0px;
`;

/**
 * Primary UI component for user interaction
 */
export const AbilityContainer = ({ abilities, type, ...props }: AbilityContainerProps) => {
  let abilityComponents;
  if (abilities) {
    abilityComponents = abilities
      .filter((ability) => ability.type === type)
      .map((ability, index) => {
        return (
          <div key={index}>
            <h4>{ability.name}</h4>
            <ReactMarkdownStyle>{ability.description}</ReactMarkdownStyle>
          </div>
        );
      });
  }
  return <Container direction={direction.vertical}>{abilityComponents}</Container>;
};
