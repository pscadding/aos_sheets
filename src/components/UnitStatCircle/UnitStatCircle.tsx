import { UnitStats } from '../../models/UnitStats';
import { AppStyle } from '../../styles/style';
import styled from 'styled-components';

interface UnitStatCircleProps {
  stats: UnitStats;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const Title = styled.p`
  margin: ${AppStyle.spacing.xxsmall};
  font-size: 70%;
  margin-right: ${(props: { middle?: boolean }) =>
    props.middle ? AppStyle.spacing.small : AppStyle.spacing.xxsmall};
`;
const Values = styled.p`
  margin: ${AppStyle.spacing.xxsmall};
  font-size: 70%;
`;

const OuterRow = styled.div`
  text-align: center;
  margin-top: ${(props: { top?: boolean }) => (props.top ? AppStyle.spacing.small : '0em')};
  margin-bottom: ${(props: { top?: boolean }) => (props.top ? '0em' : AppStyle.spacing.small)};
`;

const MiddleText = styled.div`
  display: flex;
`;

const MiddleRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: ${AppStyle.spacing.small};
  margin-left: ${AppStyle.spacing.small};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: ${AppStyle.sizes.small} solid ${AppStyle.roles.table.border};
  border-radius: 50%;
  min-width: 6.5em;
  height: 6.5em;
  background: ${AppStyle.roles.panel.light.background};
`;

/**
 * Primary UI component for user interaction
 */
export const UnitStatCircle = ({ stats, ...props }: UnitStatCircleProps) => {
  return (
    <Container className="UnitStatCircle">
      <OuterRow top={true}>
        <Title>M</Title>
        <Values>{stats.move}</Values>
      </OuterRow>
      <MiddleRow>
        <MiddleText>
          <Title middle={true}>W</Title>
          <Values>{stats.wounds}</Values>
        </MiddleText>
        <MiddleText>
          <Title middle={true}>S</Title>
          <Values>{stats.save}</Values>
        </MiddleText>
      </MiddleRow>
      <OuterRow>
        <Title>B</Title>
        <Values>{stats.bravery}</Values>
      </OuterRow>
    </Container>
  );
};
