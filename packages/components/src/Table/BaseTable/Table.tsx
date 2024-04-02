import styled from 'styled-components';
import * as React from 'react';
import cx from 'classnames';
import { TableContext } from './context';

const TableRoot = styled('table')<{
  $stickyHeader?: boolean;
}>(({ theme, $stickyHeader }) => ({
  display: 'table',
  width: '100%',
  borderCollapse: 'collapse',
  borderSpacing: 0,
  '& caption': {
    textAlign: 'left',
    padding: theme.layout.spacing.md,
    color: theme.palette.accents_5,
  },
  ...($stickyHeader && {
    borderCollapse: 'separate',
  }),
}));

interface TableInnerProps {
  padding?: 'normal' | 'none';
  size?: 'small' | 'medium';
  stickyHeader?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export type { TableInnerProps as TableProps };

export const Table = React.forwardRef<HTMLTableElement, React.PropsWithChildren<TableInnerProps>>(
  (props, ref) => {
    const {
      padding = 'normal',
      size = 'medium',
      stickyHeader = false,
      className,
      ...other
    } = props;

    const table = React.useMemo(
      () => ({
        padding,
        size,
        stickyHeader,
      }),
      [padding, size, stickyHeader]
    );
    return (
      <TableContext.Provider value={table}>
        <TableRoot
          {...other}
          $stickyHeader={stickyHeader}
          ref={ref}
          className={cx(className, 'kube-table')}
        />
      </TableContext.Provider>
    );
  }
);
