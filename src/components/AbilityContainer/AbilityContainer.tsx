import styled, { css } from 'styled-components';
import { AppStyle } from '../../styles/style';
import { Container, direction } from '../Container/Container';
import { Ability, AbilityType } from '../../models/Ability';
import ReactMarkdown from 'react-markdown';
import { PhaseColorStack } from '../PhaseColorStack/PhaseColorStack';

interface AbilityContainerProps {
  abilities: Ability[];
}

const ReactMarkdownStyle = styled(ReactMarkdown)`
  & > p {
    margin: 0px;
  }
`;

const HeadingStyle = styled.h4`
  margin-top: 0px;
  margin-bottom: ${AppStyle.spacing.xSmall};
`;

const ContainerStyle = styled.div`
  column-count: 2;
  margin-top: ${AppStyle.spacing.small};
`;

const AbilityItem = styled.div`
  break-inside: avoid-column;
  margin-top: ${AppStyle.spacing.xSmall};
  padding: ${AppStyle.spacing.xSmall};
  padding-left: ${AppStyle.spacing.small};
  padding-left: ${AppStyle.spacing.small};
  border-radius: 0.3em;
  background-color: ${(props: { type: AbilityType }) => {
    switch (props.type) {
      case AbilityType.Spell:
        return AppStyle.roles.abilities.background.spells;
      case AbilityType.Ability:
        return AppStyle.roles.abilities.background.ability;
      default:
        return AppStyle.roles.abilities.background.other;
    }
  }};
`;

/**
 * Primary UI component for user interaction
 */
export const AbilityContainer = ({ abilities, ...props }: AbilityContainerProps) => {
  let abilityComponents;
  if (abilities) {
    abilityComponents = abilities.map((ability, index) => {
      return (
        <AbilityItem key={index} type={ability.type}>
          <Container>
            <PhaseColorStack phases={ability.phases} />
            <div>
              <HeadingStyle>{ability.name}</HeadingStyle>
              <ReactMarkdownStyle>{ability.description}</ReactMarkdownStyle>
            </div>
          </Container>
        </AbilityItem>
      );
    });
  }
  return <ContainerStyle>{abilityComponents}</ContainerStyle>;
};
