import * as React from 'react';
import { PaginationInstance, PaginationState } from '../BasePagination';

export const usePaginationInstance = ({
  total = 0,
  pagination: { pageIndex = 0, pageSize = 10 } = {
    pageIndex: 0,
    pageSize: 10,
  },
  onChange,
  autoResetPageIndex = true,
}: {
  total?: number;
  pagination?: PaginationState;
  onChange?: (pagination: PaginationState) => void;
  autoResetPageIndex?: boolean;
}): PaginationInstance => {
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex,
    pageSize,
  });
  const pageCount = Math.ceil(total / pageSize);
  return {
    getCanNextPage: () => pageIndex + 1 < pageCount,
    getCanPreviousPage: () => pageIndex > 0,
    getState: () => pagination,
    getPageCount: () => pageCount,
    getRowCount: () => total,
    nextPage: () => {
      if (pageIndex < pageCount) {
        const newPageIndex = pageIndex + 1;
        setPagination({
          ...pagination,
          pageIndex: newPageIndex,
        });
        onChange?.({
          ...pagination,
          pageIndex: newPageIndex,
        });
      }
    },
    previousPage: () => {
      if (pageIndex > 0) {
        const newPageIndex = pageIndex - 1;
        setPagination({
          ...pagination,
          pageIndex: newPageIndex,
        });
        onChange?.({
          ...pagination,
          pageIndex: newPageIndex,
        });
      }
    },
    setPageIndex(updater) {
      const newPageIndex = typeof updater === 'function' ? updater(pageIndex) : updater;
      setPagination({
        ...pagination,
        pageIndex: newPageIndex,
      });
      onChange?.({
        ...pagination,
        pageIndex: newPageIndex,
      });
    },
    setPageSize(updater) {
      const newPageSize = typeof updater === 'function' ? updater(pageSize) : updater;
      const newPageIndex = autoResetPageIndex ? 0 : pageIndex;
      const page = {
        pageIndex: newPageIndex,
        pageSize: newPageSize,
      };
      setPagination(page);
      onChange?.(page);
    },
  };
};
