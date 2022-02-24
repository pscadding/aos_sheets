import { UnitStats } from '../../models/UnitStats';
import { AppStyle } from '../../styles/style';
import styled from 'styled-components';

interface UnitStatTableProps {
  stats: UnitStats;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const Cell = styled.th`
  margin: ${AppStyle.spacing.xxSmall};
  font-size: 120%;
  font-weight: Bold;
  text-align: left;
`;

const Title = styled(Cell)`
  font-weight: normal;
`;

const Table = styled.table`
  padding: ${AppStyle.spacing.xSmall};
  min-width: 5em;
  height: ${AppStyle.sizes.large};
  color: ${AppStyle.roles.panel.dark.color};
`;

const Wrapper = styled.div`
  background-color: ${AppStyle.roles.panel.dark.background};
`;

/**
 * Primary UI component for user interaction
 */
export const UnitStatTable = ({ stats, ...props }: UnitStatTableProps) => {
  return (
    <Wrapper>
      <Table>
        <tbody>
          <tr>
            <Title>M</Title>
            <Cell>{stats?.move}</Cell>
          </tr>
          <tr>
            <Title>W</Title>
            <Cell>{stats?.wounds}</Cell>
          </tr>
          <tr>
            <Title>S</Title>
            <Cell>{stats?.save}</Cell>
          </tr>
          <tr>
            <Title>B</Title>
            <Cell>{stats?.bravery}</Cell>
          </tr>
        </tbody>
      </Table>
    </Wrapper>
  );
};
