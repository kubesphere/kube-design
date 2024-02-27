import styled from 'styled-components';
import * as React from 'react';
import cx from 'classnames';
import { TableLvContext } from './context';

const TableRowRoot = styled('tr')(({ theme }) => ({
  color: 'inherit',
  display: 'table-row',
  verticalAlign: 'middle',
  outline: 0,
  '&.hover:hover': {
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
