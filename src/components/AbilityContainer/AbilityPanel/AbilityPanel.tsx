import styled from 'styled-components';
import { AppStyle } from '../../../styles/style';
import { Container } from '../../Container/Container';
import { Ability, AbilityType } from '../../../models/Ability';
import ReactMarkdown from 'react-markdown';
import { PhaseColorStack } from '../../PhaseColorStack/PhaseColorStack';

interface AbilityPanelProps {
  ability: Ability;
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

const AbilityItem = styled.div`
  break-inside: avoid-column;
  margin-top: ${AppStyle.spacing.xSmall};
  padding: ${AppStyle.spacing.xSmall};
  padding-left: ${AppStyle.spacing.small};
  padding-right: ${AppStyle.spacing.small};
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
export const AbilityPanel = ({ ability, ...props }: AbilityPanelProps) => {
  return (
    <AbilityItem type={ability?.type}>
      <Container>
        <PhaseColorStack phases={ability?.phases ? ability.phases : []} width={'0px'} />
        <div>
          <HeadingStyle>{ability?.name}</HeadingStyle>
          <ReactMarkdownStyle>{ability?.description}</ReactMarkdownStyle>
        </div>
      </Container>
    </AbilityItem>
  );
};
