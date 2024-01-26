import styled from 'styled-components';
import * as React from 'react';
import cx from 'classnames';
import { TableLvContext } from './context';

const TableBodyRoot = styled('tbody').attrs(({ className }) => cx(className, 'kube-table-body'))({
  display: 'table-row-group',
});

interface TableBodyProps {
  className?: string;
  style?: React.CSSProperties;
}

const tableLv = {
  variant: 'body',
} as const;

export const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.PropsWithChildren<TableBodyProps>
>(({ className, ...other }, ref) => {
  return (
    <TableLvContext.Provider value={tableLv}>
      <TableBodyRoot ref={ref} {...other} />
    </TableLvContext.Provider>
  );
});
