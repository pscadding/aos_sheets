import styled from 'styled-components';
import { AppStyle } from '../../../styles/style';
import { Container } from '../../Container/Container';
import { Ability, AbilityType } from '../../../models/Ability';
import ReactMarkdown from 'react-markdown';
import { PhaseColorStack } from '../../PhaseColorStack/PhaseColorStack';
import { Badge } from '../../Badge/Badge';

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
  border-radius: 0.3em;
`;

function colorByAbilityType(type: AbilityType): string {
  switch (type) {
    case AbilityType.Spell:
      return AppStyle.roles.abilities.background.spells;
    case AbilityType.Ability:
      return AppStyle.roles.abilities.background.ability;
    default:
      return AppStyle.roles.abilities.background.other;
  }
}

const TextWrapper = styled.div`
  margin: ${AppStyle.spacing.small};
`;

const HeaderRow = styled.div`
  display: flex;
`;

/**
 * Primary UI component for user interaction
 */
export const AbilityPanel = ({ ability, ...props }: AbilityPanelProps) => {
  const badgeComponent =
    ability.type !== AbilityType.Standard ? (
      <Badge label={ability.type} color={colorByAbilityType(ability.type)}></Badge>
    ) : (
      <div />
    );

  return (
    <AbilityItem>
      <Container>
        <PhaseColorStack width={AppStyle.sizes.small} phases={ability.phases} />
        <TextWrapper>
          <HeaderRow>
            {badgeComponent}
            <HeadingStyle>{ability?.name}</HeadingStyle>
          </HeaderRow>
          <ReactMarkdownStyle>{ability?.description}</ReactMarkdownStyle>
        </TextWrapper>
      </Container>
    </AbilityItem>
  );
};
