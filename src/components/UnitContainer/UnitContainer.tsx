import { Unit } from '../../models/Unit';
import styled from 'styled-components';
import { WeaponTable } from '../WeaponTable/WeaponTable';
import { UnitName } from '../UnitName/UnitName';
import { UnitStatCircle } from '../UnitStatCircle/UnitStatCircle';
import { AppStyle } from '../../styles/style';

interface UnitContainerProps {
  unit: Unit;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: ${(props: { vertical?: boolean }) => (props.vertical ? 'column' : 'row')};
`;

const TopRight = styled(Container)`
  margin-left: ${AppStyle.spacing.medium};
`;

/**
 * Primary UI component for user interaction
 */
export const UnitContainer = ({ unit, ...props }: UnitContainerProps) => {
  return (
    <Container className="UnitContainer">
      <UnitStatCircle stats={unit.stats} />
      <TopRight vertical={true}>
        <UnitName name={unit.name} subName={unit.subName} />
        <WeaponTable weapons={unit.weapons} />
      </TopRight>
    </Container>
  );
};
