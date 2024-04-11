import styled from 'styled-components';
import * as React from 'react';
import cx from 'classnames';
import { TableLvContext } from './context';

const TableRowRoot = styled('tr')`
  color: inherit;
  display: table-row;
  vertical-align: middle;
  outline: 0;
  &:first-child > th {
    border-top: 1px solid ${({ theme }) => theme.palette.accents_1};
  }
  & > td {
    box-shadow: ${({ theme }) => `inset 0 -1px 0 0 ${theme.palette.accents_1}`};
  }
  & > th {
    box-shadow: ${({ theme }) => `inset 0 -1px 0 0 ${theme.palette.accents_1}`};
  }

  &.selected > td {
    background-color: ${({ theme }) => theme.palette.accents_1};
    &:first-child {
      border-left: 1px solid ${({ theme }) => theme.palette.colors.green[2]};
    }
    &:last-child {
      border-right: 1px solid ${({ theme }) => theme.palette.colors.green[2]};
    }
  }
  &:not(.selected) + &.selected,
  &.selected:first-child,
  &.selected + &:not(.selected) {
    > td {
      box-shadow: inset 0px 1px 0px 0px ${({ theme }) => theme.palette.colors.green[2]};
    }
  }
  &.selected:last-child {
    > td {
      border-bottom: 1px solid ${({ theme }) => theme.palette.colors.green[2]};
    }
  }
  &.hover:hover > td {
    background-color: ${({ theme }) => theme.palette.accents_1};
  }
`;

interface TableRowProps {
  className?: string;
  hover?: boolean;
  selected?: boolean;
  style?: React.CSSProperties;
}

export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.PropsWithChildren<TableRowProps>
>(({ className, selected, hover, ...other }, ref) => {
  const tableLv = React.useContext(TableLvContext);
  return (
    <TableRowRoot
      ref={ref}
      className={cx('kube-table-row', className, {
        'row-selected': selected,
        selected,
        hover: hover ?? tableLv?.variant !== 'head',
      })}
      {...other}
    />
  );
});
