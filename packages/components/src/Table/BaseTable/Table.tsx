import cx from 'classnames';
import { throttle } from 'lodash';
import * as React from 'react';
import styled, { css } from 'styled-components';
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
  wrapperStyle?: React.CSSProperties;
}

export type { TableInnerProps as TableProps };

const TableWrapper = styled.div<{ atStart?: boolean; atEnd?: boolean }>`
  ${({ atStart }) =>
    atStart &&
    css`
      .table-cell--fixed-last-left:after {
        box-shadow: unset;
      }
    `}
  ${({ atEnd }) =>
    atEnd &&
    css`
      .table-cell--fixed-last-right:before {
        box-shadow: unset;
      }
    `}
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
      wrapperStyle,
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

    const wrapperRef = React.useRef<HTMLDivElement>(null);
    const [scrollStatus, setScrollStatus] = React.useState<{ atStart: boolean; atEnd: boolean }>({
      atStart: true,
      atEnd: false,
    });

    React.useEffect(() => {
      // const throttle = (func: () => void, limit: number) => {
      //   let lastFunc: ReturnType<typeof setTimeout>;
      //   let lastRan: number;
      //   return () => {
      //     const now = Date.now();
      //     if (!lastRan) {
      //       func();
      //       lastRan = now;
      //     } else {
      //       clearTimeout(lastFunc);
      //       lastFunc = setTimeout(() => {
      //         if (Date.now() - lastRan >= limit) {
      //           func();
      //           lastRan = Date.now();
      //         }
      //       }, limit - (now - lastRan));
      //     }
      //   };
      // };

      const handleScroll = () => {
        if (wrapperRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = wrapperRef.current;
          setScrollStatus({
            atStart: scrollLeft === 0,
            atEnd: scrollLeft + clientWidth >= scrollWidth,
          });
        }
      };

      const throttledHandleScroll = throttle(handleScroll, 200);

      const wrapper = wrapperRef.current;
      if (wrapper) {
        throttledHandleScroll();
        wrapper.addEventListener('scroll', throttledHandleScroll);

        const resizeObserver = new ResizeObserver(throttledHandleScroll);
        resizeObserver.observe(wrapper);

        return () => {
          wrapper.removeEventListener('scroll', throttledHandleScroll);
          resizeObserver.disconnect();
        };
      }

      return () => {};
    }, []);

    return (
      <TableContext.Provider value={table}>
        <TableWrapper
          ref={wrapperRef}
          className={cx(tableWrapperClassName, 'kube-table-wrapper')}
          atStart={scrollStatus.atStart}
          atEnd={scrollStatus.atEnd}
          style={wrapperStyle ?? {}}
        >
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
