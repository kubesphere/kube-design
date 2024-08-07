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
  hasBorderTop?: boolean;
}

const TableHeadRoot = styled.thead<{
  $ownerState: {
    stickyHeader?: boolean;
    hasBorderTop?: boolean;
  };
}>(({ $ownerState: { stickyHeader, hasBorderTop }, theme }) => ({
  display: 'table-header-group',
  backgroundColor: theme.palette.background,

  ...(stickyHeader && {
    position: 'sticky',
    top: 0,
    zIndex: 2,
  }),
  ...(hasBorderTop && {
    borderTop: `1px solid ${theme.palette.accents_1}`,
  }),
  '&.with-sticky': {
    position: 'sticky',
    top: 0,
    zIndex: 2,
  },
}));

export const TableHead = React.forwardRef<
  HTMLTableSectionElement,
  React.PropsWithChildren<TableHeadProps>
>(({ className, hasBorderTop, hasBorder = tableLv.hasBorder, ...rest }, ref) => {
  const lv = React.useMemo(() => ({ ...tableLv, hasBorder }), [hasBorder]);
  const table = useTableContext();

  return (
    <TableLvContext.Provider value={lv}>
      <TableHeadRoot
        {...rest}
        $ownerState={{
          stickyHeader: table?.stickyHeader,
          hasBorderTop,
        }}
        ref={ref}
        className={cx(
          'kube-table-head',
          {
            'with-sticky': table?.stickyHeader,
          },
          className
        )}
      />
    </TableLvContext.Provider>
  );
});
