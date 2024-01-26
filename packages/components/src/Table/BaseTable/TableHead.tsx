import cx from 'classnames';
import * as React from 'react';
import styled from 'styled-components';

import { TableLvContext } from './context';

const tableLv = {
  variant: 'head',
} as const;

interface TableHeadProps {
  className?: string;
  style?: React.CSSProperties;
}

const TableHeadRoot = styled.thead`
  display: table-header-group;
`;

export const TableHead = React.forwardRef<
  HTMLTableSectionElement,
  React.PropsWithChildren<TableHeadProps>
>(({ className, ...rest }, ref) => {
  return (
    <TableLvContext.Provider value={tableLv}>
      <TableHeadRoot {...rest} ref={ref} className={cx('kube-table-head', className)} />
    </TableLvContext.Provider>
  );
});
