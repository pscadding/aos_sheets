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
  margin: ${AppStyle.spacing.xxsmall};
  font-weight: normal;
  // font-size: 70%;
`;

const Title = styled(Cell)`
  font-size: 100%;
  font-weight: bold;
`;

const Table = styled.table`
  border-top-left-radius: ${AppStyle.sizes.small};
  padding: ${AppStyle.spacing.xsmall};
  min-width: 5em;
  height: ${AppStyle.sizes.large};
  background-color: ${AppStyle.roles.panel.dark.background};
  color: ${AppStyle.roles.panel.dark.color};
`;

/**
 * Primary UI component for user interaction
 */
export const UnitStatTable = ({ stats, ...props }: UnitStatTableProps) => {
  return (
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
  );
};
