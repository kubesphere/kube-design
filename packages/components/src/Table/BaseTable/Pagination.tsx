import * as React from 'react';

import { BasePagination, DEFAULT_PAGE_SIZE, PaginationState } from './BasePagination';
import { usePaginationInstance } from './hooks';

interface TablePaginationProps {
  className?: string;
  style?: React.CSSProperties;
  total: number;
  pagination?: {
    page: number;
    pageSize?: number;
  };
  isShowSetPageSize?: boolean;
  isShowDivider?: boolean;
  isShowTotalCount?: boolean;
  isShowPagination?: boolean;
  autoResetPageIndex?: boolean;
  onChange?: (pagination: { page: number; pageSize: number }) => void;
}

export const Pagination = ({
  className,
  style,
  total,
  autoResetPageIndex = true,
  pagination: { page = 1, pageSize = DEFAULT_PAGE_SIZE } = {
    page: 1,
    pageSize: DEFAULT_PAGE_SIZE,
  },
  onChange: onChangeProp,
  isShowSetPageSize = true,
  isShowDivider = true,
  isShowTotalCount = true,
  isShowPagination = true,
}: TablePaginationProps) => {
  const onChange = (pagination: PaginationState) => {
    onChangeProp?.({
      page: pagination.pageIndex + 1,
      pageSize: pagination.pageSize,
    });
  };
  const table = usePaginationInstance({
    pagination: {
      pageSize,
      pageIndex: page - 1,
    },
    total,
    autoResetPageIndex,
    onChange,
  });
  const config = React.useMemo(() => {
    return {
      isShowSetPageSize,
      isShowDivider,
      isShowTotalCount,
      isShowPagination,
    };
  }, [isShowSetPageSize, isShowDivider, isShowTotalCount, isShowPagination]);
  return <BasePagination className={className} style={style} config={config} instance={table} />;
};

export type { TablePaginationProps };
