import { AppStyle } from '../../styles/style';
import styled from 'styled-components';

export const TableHeaderCell = styled.th`
  padding-top: ${AppStyle.spacing.xSmall};
  padding-bottom: ${AppStyle.spacing.xSmall};
  padding-left: ${(props: { compact?: boolean }) =>
    props.compact ? AppStyle.spacing.xSmall : AppStyle.spacing.medium};
  padding-right: ${(props: { compact?: boolean }) =>
    props.compact ? AppStyle.spacing.xSmall : AppStyle.spacing.medium};
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
