import { AppStyle } from '../../../styles/style';
import { memo } from 'react';
import { Table, TableBodyCell, TableHeaderRow, TableHeaderCell } from '../../Table/Table';
import styled from 'styled-components';
import { Ability } from '../../../models/Ability';

interface AbilityDamageTableProps {
  ability: Ability;
}

const Wrapper = styled.div`
  margin-top: ${AppStyle.spacing.small};
  margin-bottom: ${AppStyle.spacing.small};
`;

/**
 * Primary UI component for user interaction
 */
const AbilityDamageTablePanel = ({ ability }: AbilityDamageTableProps) => {
  const columns = ability.columns ? ability.columns : [];
  const rows = ability.rows ? ability.rows : [];

  const headers = columns.map((columnName, index) => (
    <TableHeaderCell compact={true} key={index}>
      {columnName}
    </TableHeaderCell>
  ));
  const rowsElems = rows.map((row, rowIndex) => {
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
        <tbody>{rowsElems}</tbody>
      </Table>
    </Wrapper>
  );
};

export default memo(AbilityDamageTablePanel);
