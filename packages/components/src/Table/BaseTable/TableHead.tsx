import cx from 'classnames';
import * as React from 'react';
import styled from 'styled-components';

import { TableLvContext, useTableContext } from './context';

const tableLv = {
  variant: 'head',
  hasBorder: false,
} as const;

interface TableHeadProps {
  className?: string;
  style?: React.CSSProperties;
  hasBorder?: boolean;
}

const TableHeadRoot = styled.thead<{
  $ownerState: {
    stickyHeader?: boolean;
  };
}>(({ $ownerState: { stickyHeader } }) => ({
  display: 'table-header-group',
  ...(stickyHeader && {
    position: 'sticky',
    top: 0,
    zIndex: 2,
  }),
}));

export const TableHead = React.forwardRef<
  HTMLTableSectionElement,
  React.PropsWithChildren<TableHeadProps>
>(({ className, hasBorder = tableLv.hasBorder, ...rest }, ref) => {
  const lv = React.useMemo(() => ({ ...tableLv, hasBorder }), [hasBorder]);
  const table = useTableContext();

  return (
    <TableLvContext.Provider value={lv}>
      <TableHeadRoot
        {...rest}
        $ownerState={{
          stickyHeader: table?.stickyHeader,
        }}
        ref={ref}
        className={cx('kube-table-head', className)}
      />
    </TableLvContext.Provider>
  );
});
