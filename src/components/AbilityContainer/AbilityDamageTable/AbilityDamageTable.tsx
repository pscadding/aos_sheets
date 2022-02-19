import { AppStyle } from '../../../styles/style';
import { AbilityDamageTable, AbilityType } from '../../../models/Ability';
import { Table, TableBodyCell, TableHeaderRow, TableHeaderCell } from '../../Table/Table';
import styled from 'styled-components';

interface AbilityDamageTableProps {
  ability: AbilityDamageTable;
}

function colorByAbilityType(type: AbilityType): string {
  switch (type) {
    case AbilityType.Spell:
      return AppStyle.roles.abilities.background.spells;
    case AbilityType.Ability:
      return AppStyle.roles.abilities.background.ability;
    case AbilityType.BattleTrait:
      return AppStyle.roles.abilities.background.battleTrait;
    default:
      return AppStyle.roles.abilities.background.other;
  }
}

const Wrapper = styled.div`
  margin-top: ${AppStyle.spacing.small};
  margin-bottom: ${AppStyle.spacing.small};
`;

/**
 * Primary UI component for user interaction
 */
export const AbilityDamageTablePanel = ({ ability, ...props }: AbilityDamageTableProps) => {
  const headers = ability.columns.map((columnName, index) => (
    <TableHeaderCell key={index}>{columnName}</TableHeaderCell>
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
