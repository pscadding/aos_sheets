import { Unit } from '../../models/Unit';
import styled, { css } from 'styled-components';
import { WeaponsTable } from '../WeaponTable/WeaponsTable';
import { UnitName } from '../UnitName/UnitName';
import { UnitStatTable } from '../UnitStatTable/UnitStatTable';
import { AppStyle } from '../../styles/style';
import { Keywords } from '../Keywords/Keywords';
import { Container, direction } from '../Container/Container';
import { AbilityContainer } from '../AbilityContainer/AbilityContainer';

interface UnitContainerProps {
  unit: Unit;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const TopWrapper = styled.div`
  border: ${AppStyle.sizes.xSmall} solid ${AppStyle.roles.table.border};
  border-top-right-radius: ${AppStyle.sizes.small};
  border-top-left-radius: ${AppStyle.sizes.small};
  outline: ${AppStyle.sizes.xSmall} solid ${AppStyle.roles.table.border};
  outline-offset: -2px;
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
export const UnitContainer = ({ unit, ...props }: UnitContainerProps) => {
  return (
    <Container direction={direction.vertical}>
      <TopWrapper>
        <Container>
          <UnitStatTable stats={unit?.stats} />
          <RightWrapper>
            <Container direction={direction.vertical}>
              <Container spacing="0px">
                <UnitName name={unit?.name} subName={unit?.subName} />
                <Keywords keywords={unit?.keywords} />
              </Container>
              <WeaponsTable weapons={unit?.weapons} />
            </Container>
          </RightWrapper>
        </Container>
      </TopWrapper>
      <LowerContainer>
        <AbilityContainer abilities={unit?.abilities} />
      </LowerContainer>
    </Container>
  );
};
