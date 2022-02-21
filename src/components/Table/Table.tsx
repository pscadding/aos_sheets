import { AppStyle } from '../../styles/style';
import styled from 'styled-components';

export const TableHeaderCell = styled.th`
  padding-top: ${AppStyle.spacing.xSmall};
  padding-bottom: ${AppStyle.spacing.xSmall};
  padding-left: ${AppStyle.spacing.small};
  padding-right: ${AppStyle.spacing.small};
  white-space: nowrap;

  &.name {
    width: 100%;
  }
`;

export const TableHeaderRow = styled.tr`
  background-color: ${AppStyle.roles.table.headerBackground};
`;

export const Table = styled.table`
  border-spacing: 0px;
`;

export const TableBodyCell = styled.td`
  padding: ${AppStyle.spacing.xxSmall};
  text-align: center;
`;
