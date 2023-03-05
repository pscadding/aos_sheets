import { AppStyle } from '../../../styles/style';
import { memo } from 'react';
import { AbilityDamageTable } from '../../../models/Ability';
import { Table, TableBodyCell, TableHeaderRow, TableHeaderCell } from '../../Table/Table';
import styled from 'styled-components';

interface AbilityDamageTableProps {
  ability: AbilityDamageTable;
}

const Wrapper = styled.div`
  margin-top: ${AppStyle.spacing.small};
  margin-bottom: ${AppStyle.spacing.small};
`;

/**
 * Primary UI component for user interaction
 */
const AbilityDamageTablePanel = ({ ability }: AbilityDamageTableProps) => {
  const headers = ability.columns.map((columnName, index) => (
    <TableHeaderCell compact={true} key={index}>
      {columnName}
    </TableHeaderCell>
  ));
  const rows = ability.rows.map((row, rowIndex) => {
    const rowElements = row.map((cell, cellIndex) => (
      <TableBodyCell key={cellIndex}>{cell}</TableBodyCell>
    ));
    return <tr key={rowIndex}>{rowElements}</tr>;
  });

  return (
    <Wrapper>
      <Table>
        <thead>
          <TableHeaderRow>{headers}</TableHeaderRow>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Wrapper>
  );
};

export default memo(AbilityDamageTablePanel);
