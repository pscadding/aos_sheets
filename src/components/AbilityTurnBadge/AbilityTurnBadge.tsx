import styled from 'styled-components';
import { Turn } from '../../models/Phase';
import { AppStyle } from '../../styles/style';

interface AbilityTurnBadgeProps {
  turns: Turn[];
}

const Badge = styled.div`
  padding: ${AppStyle.spacing.xxSmall};
  border-radius: ${AppStyle.sizes.xSmall};
  background-color: ${AppStyle.roles.abilities.background.turn};
`;

export const AbilityTurnBadge = ({ turns, ...props }: AbilityTurnBadgeProps) => {
  let badgeText = '';
  if (turns.includes(Turn.Yours) && turns.includes(Turn.Opponents)) badgeText = 'B';
  else if (turns.includes(Turn.Yours)) badgeText = 'Y';
  else if (turns.includes(Turn.Opponents)) badgeText = 'O';

  return <Badge>{badgeText}</Badge>;
};
