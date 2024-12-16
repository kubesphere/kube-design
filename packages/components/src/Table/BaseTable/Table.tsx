import styled from 'styled-components';
import * as React from 'react';
import cx from 'classnames';
import { TableContext } from './context';

const TableRoot = styled('table')<{
  $stickyHeader?: boolean;
  $maxContext?: boolean;
}>(({ theme, $stickyHeader, $maxContext }) => ({
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
    width: '100%',
    minWidth: '100%',
  }),
  ...($maxContext && {
    width: 'max-content',
  }),
}));

interface TableInnerProps {
  padding?: 'normal' | 'none';
  size?: 'small' | 'medium';
  stickyHeader?: boolean;
  className?: string;
  style?: React.CSSProperties;
  tableWrapperClassName?: string;
  maxContext?: boolean;
}

export type { TableInnerProps as TableProps };

const TableWrapper = styled.div`
  position: relative;
  overflow-x: auto;
`;

export const Table = React.forwardRef<HTMLTableElement, React.PropsWithChildren<TableInnerProps>>(
  (props, ref) => {
    const {
      padding = 'normal',
      size = 'medium',
      stickyHeader = false,
      className,
      tableWrapperClassName,
      maxContext,
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
        <TableWrapper className={cx(tableWrapperClassName, 'kube-table-wrapper')}>
          <TableRoot
            {...other}
            $stickyHeader={stickyHeader}
            $maxContext={maxContext}
            ref={ref}
            className={cx(className, 'kube-table', {
              'kube-table--max-context': maxContext,
            })}
          />
        </TableWrapper>
      </TableContext.Provider>
    );
  }
);
