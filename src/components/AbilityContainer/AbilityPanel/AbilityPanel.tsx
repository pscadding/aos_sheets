import styled from 'styled-components';
import { AppStyle } from '../../../styles/style';
import { Container } from '../../Container/Container';
import { Ability, AbilityType } from '../../../models/Ability';
import ReactMarkdown from 'react-markdown';
import { PhaseColorStack } from '../../PhaseColorStack/PhaseColorStack';
import { Badge } from '../Badge/Badge';
import { getPhasesFromAbilities } from '../../../utils/phase';
import { memo } from 'react';

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
  margin-left: ${AppStyle.spacing.small};
`;

const AbilityItem = styled.div`
  break-inside: avoid-column;
  margin-top: ${AppStyle.spacing.xSmall};
  border-radius: 0.3em;
`;

const TextWrapper = styled.div`
  margin-bottom: ${AppStyle.spacing.small};
  margin-right: ${AppStyle.spacing.small};
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: baseline;
`;

const DescriptionWrapper = styled.div`
  margin-left: ${AppStyle.spacing.small};
`;

function colorByAbilityType(type: AbilityType): string {
  switch (type) {
    case AbilityType.Spell:
      return AppStyle.roles.abilities.background.spells;
    case AbilityType.Ability:
      return AppStyle.roles.abilities.background.ability;
    case AbilityType.BattleTrait:
      return AppStyle.roles.abilities.background.battleTrait;
    case AbilityType.CommandAbility:
      return AppStyle.roles.abilities.background.battleTrait;
    case AbilityType.Triumph:
      return AppStyle.roles.abilities.background.triumph;
    default:
      return AppStyle.roles.abilities.background.other;
  }
}

/**
 * Primary UI component for user interaction
 */
const AbilityPanel = ({ ability, ...props }: AbilityPanelProps) => {
  const badgeComponent =
    ability.type !== AbilityType.Standard ? (
      <Badge label={ability.type} color={colorByAbilityType(ability.type)}></Badge>
    ) : (
      <div />
    );

  const abilityPhases = getPhasesFromAbilities([ability]);

  return (
    <AbilityItem>
      <Container>
        <PhaseColorStack width={AppStyle.sizes.small} phases={abilityPhases} />
        <TextWrapper>
          <HeaderRow>
            {badgeComponent}
            <HeadingStyle>
              {ability?.name}
              {ability.tags ? ` - ${ability.tags.join(', ')}` : ''}
            </HeadingStyle>
          </HeaderRow>
          <DescriptionWrapper>
            <ReactMarkdownStyle>{ability?.description}</ReactMarkdownStyle>
          </DescriptionWrapper>
        </TextWrapper>
      </Container>
    </AbilityItem>
  );
};

export const AbilityPanelMemo = memo(AbilityPanel);
