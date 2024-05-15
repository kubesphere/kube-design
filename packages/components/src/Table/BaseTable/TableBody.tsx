import styled from 'styled-components';
import * as React from 'react';
import cx from 'classnames';
import { TableLvContext } from './context';

const TableBodyRoot = styled('tbody').attrs(({ className }) => cx(className, 'kube-table-body'))(
  () => ({
    display: 'table-row-group',
  })
);

interface TableBodyProps {
  className?: string;
  style?: React.CSSProperties;
  hasBorder?: boolean;
}

const tableLv = {
  variant: 'body',
  hasBorder: false,
} as const;

export const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.PropsWithChildren<TableBodyProps>
>(({ className, hasBorder = tableLv.hasBorder, ...other }, ref) => {
  const lv = React.useMemo(() => ({ ...tableLv, hasBorder }), [hasBorder]);
  return (
    <TableLvContext.Provider value={lv}>
      <TableBodyRoot ref={ref} {...other} />
    </TableLvContext.Provider>
  );
});
