import styled from 'styled-components';
import * as React from 'react';
import cx from 'classnames';
import { useTableContext, useTableLvContext } from './context';

export type TableCellProps = {
  padding?: 'none' | 'normal';
  align?: 'left' | 'center' | 'right' | 'justify';
  className?: string;
  size?: 'small' | 'medium';
  ariaSort?: 'asc' | 'desc' | false;
  variant?: 'head' | 'body';
  stickyHeader?: boolean;
  fixed?: 'left' | 'right';
  fixedWidth?: number;
  fixedLastLeft?: boolean;
  fixedLastRight?: boolean;
  style?: React.CSSProperties;
  hasBorder?: boolean;
} & React.HTMLProps<HTMLTableCellElement>;

type OwnerState = Pick<
  TableCellProps & { stickyHeader?: boolean },
  | 'ariaSort'
  | 'variant'
  | 'padding'
  | 'size'
  | 'align'
  | 'stickyHeader'
  | 'fixed'
  | 'fixedWidth'
  | 'fixedLastLeft'
  | 'fixedLastRight'
  | 'hasBorder'
>;
const TableCellRoot = styled.td<{
  $ownerState: OwnerState;
}>(
  ({
    theme,
    $ownerState: {
      ariaSort,
      variant = 'body',
      padding = 'normal',
      size = 'medium',
      align = 'left',
      stickyHeader = false,
      fixed,
      fixedWidth,
      fixedLastLeft,
      fixedLastRight,
      hasBorder = false,
    },
  }) => {
    const paddingV =
      padding === 'none'
        ? '0px'
        : {
            'head-small': '8px 12px',
            'head-medium': '16px 12px',
            'body-small': '4px 8px',
            'body-medium': '8px 12px',
          }[`${variant}-${size}`];
    const textAlign = {
      textAlign: align,
      flexDirection: {
        right: 'row-reverse',
      }[align],
    };
    return {
      display: 'table-cell',
      verticalAlign: 'inherit',
      ...(hasBorder && {
        border: `1px solid ${theme.palette.accents_1}`,
        borderBottom: 'transparent',
      }),
      ...(ariaSort && {
        ariaSort: ariaSort === 'asc' ? 'ascending' : 'descending',
      }),
      ...(variant === 'head' && {
        color: theme.palette.accents_5,
        fontWeight: 600,
        fontSize: theme.font.fontSizeBase,
        fontFamily: theme.font.mono,
        lineHeight: 1.67,
        cursor: 'pointer',
      }),
      ...(variant === 'body' && {
        color: theme.palette.accents_8,
      }),
      padding: paddingV,
      ...textAlign,
      ...(fixed && {
        position: 'sticky',
        [fixed]: fixedWidth,
        zIndex: 1,
        backgroundColor: theme.palette.background,
      }),
      ...(stickyHeader && {
        position: 'sticky',
        top: 0,
        zIndex: fixed ? 3 : 2,
        backgroundColor: theme.palette.background,
      }),
      ...(fixedLastLeft && {
        '&:after': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: 30,
          transform: 'translateX(100%)',
          pointerEvents: 'none',
          boxShadow: 'inset 10px 0 8px -8px #0505050f',
        },
      }),
      ...(fixedLastRight && {
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: 30,
          transform: 'translateX(-100%)',
          pointerEvents: 'none',
          boxShadow: 'inset -10px 0 8px -8px #0505050f',
        },
      }),
    };
  }
);

export const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.PropsWithChildren<TableCellProps>
>(
  (
    {
      className,
      children,
      ariaSort,
      variant: variantProp,
      padding = 'normal',
      size = 'medium',
      align = 'left',
      fixed,
      fixedWidth,
      fixedLastLeft,
      fixedLastRight,
      hasBorder = false,
      ...other
    },
    ref
  ) => {
    const table = useTableContext();
    const tableLv = useTableLvContext();
    const variant = variantProp || ((tableLv && tableLv.variant) as 'head' | 'body');

    const cellProps = {
      ariaSort,
      variant,
      padding: padding || (table && table.padding ? table.padding : 'normal'),
      size: size || (table && table.size ? table.size : 'medium'),
      align,
      stickyHeader: variant === 'head' && table && table.stickyHeader,
      fixed,
      fixedWidth,
      fixedLastLeft,
      fixedLastRight,
      hasBorder,
    };
    const isHeadCell = tableLv && tableLv.variant === 'head';
    const component = isHeadCell ? 'th' : 'td';
    return (
      <TableCellRoot
        as={component as any}
        className={cx('table-cell', className)}
        $ownerState={cellProps}
        ref={ref}
        {...other}
      >
        {children}
      </TableCellRoot>
    );
  }
);
