import { memo } from 'react';
import { Unit } from '../../models/Unit';
import styled from 'styled-components';
import { WeaponsTable } from '../WeaponTable/WeaponsTable';
import { UnitName } from '../UnitName/UnitName';
import { UnitStatTable } from '../UnitStatTable/UnitStatTable';
import { AppStyle } from '../../styles/style';
import { Keywords } from '../Keywords/Keywords';
import { Container, direction } from '../Container/Container';
import { AbilityContainerMemo } from '../AbilityContainer/AbilityContainer';
import { PhaseColorStack } from '../PhaseColorStack/PhaseColorStack';
import { getPhasesFromAbilities } from '../../utils/phase';

interface UnitContainerProps {
  unit: Unit;
}

const OuterWrapper = styled.div`
  padding: ${AppStyle.sizes.xSmall};
  border-bottom: ${AppStyle.sizes.xSmall} solid ${AppStyle.roles.general.border};
  border-bottom-right-radius: ${AppStyle.sizes.xSmall};
  border-bottom-left-radius: ${AppStyle.sizes.xSmall};
`;

const TopWrapper = styled.div`
  border-top-right-radius: ${AppStyle.sizes.xSmall};
  border-top-left-radius: ${AppStyle.sizes.xSmall};
  box-shadow: 0px 0px 0px ${AppStyle.sizes.xSmall} ${AppStyle.roles.general.border};
`;

const RightWrapper = styled.div`
  width: 100%;
`;

const LowerContainer = styled.div`
  margin-top: ${AppStyle.spacing.small};
`;

/**
 * Primary UI component for user interaction
 */
export const UnitContainer = ({ unit }: UnitContainerProps) => {
  const unitPhases = getPhasesFromAbilities(unit?.abilities);

  return (
    <OuterWrapper>
      <Container direction={direction.vertical}>
        <TopWrapper>
          <Container>
            <UnitStatTable stats={unit?.stats} />
            <RightWrapper>
              <Container direction={direction.vertical}>
                <Container spacing="0px">
                  <UnitName name={unit?.name} subName={unit?.subName} />
                  <PhaseColorStack phases={unitPhases} width={AppStyle.sizes.large} />
                  <Keywords keywords={unit?.keywords} />
                </Container>
                <WeaponsTable weapons={unit?.weapons} />
              </Container>
            </RightWrapper>
          </Container>
        </TopWrapper>
        <LowerContainer>
          <AbilityContainerMemo abilities={unit?.abilities} />
        </LowerContainer>
      </Container>
    </OuterWrapper>
  );
};

export const UnitContainerMemo = memo(UnitContainer);
