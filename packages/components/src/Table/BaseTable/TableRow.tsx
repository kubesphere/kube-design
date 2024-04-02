import styled from 'styled-components';
import * as React from 'react';
import cx from 'classnames';
import { TableLvContext } from './context';

const TableRowRoot = styled('tr')(({ theme }) => ({
  color: 'inherit',
  display: 'table-row',
  verticalAlign: 'middle',
  outline: 0,

  '&:not(.selected) > td': {
    borderTop: `1px solid ${theme.palette.accents_1}`,
  },
  '& + &.selected > td': {
    borderBottom: 'transparent',
  },
  '&.selected + & > td': {
    borderTop: `1px solid ${theme.palette.colors.green[2]}`,
  },
  '&.selected': {
    backgroundColor: theme.palette.accents_1,
    '& > td': {
      borderTop: `1px solid ${theme.palette.colors.green[2]}`,
      borderBottom: 'transparent',
      '&:first-child': {
        borderLeft: `1px solid ${theme.palette.colors.green[2]}`,
      },
      '&:last-child': {
        borderRight: `1px solid ${theme.palette.colors.green[2]}`,
      },
    },
    '& + & > td': {
      borderTop: `1px solid transparent`,
    },
    '&:last-child > td': {
      borderBottom: `1px solid ${theme.palette.colors.green[2]}`,
    },
  },
  '&.hover:hover': {
    backgroundColor: theme.palette.accents_1,
  },
  '&.selected > td': {
    backgroundColor: theme.palette.accents_1,
  },
  '&.hover:hover > td': {
    backgroundColor: theme.palette.accents_1,
  },
}));

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
