import styled from 'styled-components';
import { PhaseType } from '../../models/Phase';
import { AppStyle } from '../../styles/style';
import { Ability } from '../../models/Ability';
import { AbilityTurnBadge } from '../AbilityTurnBadge/AbilityTurnBadge';
import { Container } from '../Container/Container';
import { getPhaseRuleTurns } from '../../utils/phase';
import { UnitNameAbility } from './PhaseUnitTableStyles';

interface PhaseUnitTableAbilityLineProps {
  ability: Ability;
  phaseType: PhaseType;
}

const ListMarker = styled.div``;

export function PhaseUnitTableAbilityLine({
  ability,
  phaseType,
  ...props
}: PhaseUnitTableAbilityLineProps) {
  const turns = getPhaseRuleTurns(ability.phaseRules, phaseType);

  return (
    <Container alignItems={'center'} spacing={AppStyle.spacing.small}>
      <ListMarker>- </ListMarker>
      <AbilityTurnBadge turns={turns} />
      <UnitNameAbility>{ability.name}</UnitNameAbility>
    </Container>
  );
}
