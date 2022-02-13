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
  font-size: 70%;
`;

const Values = styled.p`
  margin: ${AppStyle.spacing.xxsmall};
  font-size: 70%;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: ${AppStyle.spacing.xxsmall};
  margin-left: ${AppStyle.spacing.xxsmall};
`;

const Table = styled.table`
  padding: ${AppStyle.spacing.xsmall};
  // padding-left: ${AppStyle.spacing.small};
  // padding-right: ${AppStyle.spacing.small};
  border-right: ${AppStyle.sizes.small} solid ${AppStyle.roles.table.border};
  min-width: 5em;
  background-color: ${AppStyle.roles.panel.light.background};
`;

/**
 * Primary UI component for user interaction
 */
export const UnitStatTable = ({ stats, ...props }: UnitStatTableProps) => {
  return (
    <Table>
      <tbody>
        <tr>
          <Cell>M</Cell>
          <Cell>{stats.move}</Cell>
        </tr>
        <tr>
          <Cell>W</Cell>
          <Cell>{stats.wounds}</Cell>
        </tr>
        <tr>
          <Cell>S</Cell>
          <Cell>{stats.save}</Cell>
        </tr>
        <tr>
          <Cell>B</Cell>
          <Cell>{stats.bravery}</Cell>
        </tr>
      </tbody>
    </Table>
  );
};
