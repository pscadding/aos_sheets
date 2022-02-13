import { Unit } from '../../models/Unit';
import styled, { css } from 'styled-components';
import { WeaponTable } from '../WeaponTable/WeaponTable';
import { UnitName } from '../UnitName/UnitName';
import { UnitStatCircle } from '../UnitStatCircle/UnitStatCircle';
import { AppStyle } from '../../styles/style';
import { Keywords } from '../Keywords/Keywords';
import { Container, direction } from '../Container/Container';

interface UnitContainerProps {
  unit: Unit;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const RightSide = styled.div`
  margin-left: ${AppStyle.spacing.medium};
`;

/**
 * Primary UI component for user interaction
 */
export const UnitContainer = ({ unit, ...props }: UnitContainerProps) => {
  return (
    <Container>
      <UnitStatCircle stats={unit.stats} />
      <RightSide>
        <Container direction={direction.vertical}>
          <Container spacing="0px">
            <UnitName name={unit.name} subName={unit.subName} />
            <Keywords keywords={unit.keywords} />
          </Container>
          <WeaponTable weapons={unit.weapons} />
        </Container>
      </RightSide>
    </Container>
  );
};
