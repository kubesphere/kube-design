import styled from 'styled-components';
import * as React from 'react';
import cx from 'classnames';
import { TableLvContext } from './context';

const TableRowRoot = styled('tr')`
  color: inherit;
  display: table-row;
  vertical-align: middle;
  outline: 0;
  &.selected {
    background-color: ${({ theme }) => theme.palette.accents_1};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.palette.colors.green[2]};
    & + & {
      box-shadow: none;
    }
    & > td {
      border: transparent;
      &:first-child {
        border-left: 1px solid ${({ theme }) => theme.palette.colors.green[2]};
      }
      &:last-child {
        border-right: 1px solid ${({ theme }) => theme.palette.colors.green[2]};
      }
    }
    &.selected:last-child {
      & > td {
        border-bottom: 1px solid ${({ theme }) => theme.palette.colors.green[2]};
      }
    }
  }

  &.selected + & {
    box-shadow: inset 0px 1px 0px 0px ${({ theme }) => theme.palette.colors.green[2]};
  }
  &.hover:hover {
    background-color: ${({ theme }) => theme.palette.accents_1};
    /* & > td {
      background-color: ${({ theme }) => theme.palette.accents_1};
    } */
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
