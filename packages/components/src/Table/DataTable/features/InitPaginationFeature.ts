import {
  PaginationState,
  TableFeature,
  TableOptionsResolved,
  Updater,
  functionalUpdate,
  getPaginationRowModel,
} from '@tanstack/react-table';

const getPaginationOptions = <TData>(options: TableOptionsResolved<TData>) => {
  const {
    meta: { manual },
  } = options;
  if (!manual) {
    return {
      getPaginationRowModel: getPaginationRowModel(),
      autoResetPageIndex: false,
      ...options,
    };
  }
  return {
    manualPagination: true,
    rowCount: 0,
    autoResetPageIndex: false,
    autoResetFiltersWhenPageChange: true,
    ...options,
  };
};

export const InitPaginationFeature: TableFeature<any> = {
  getInitialState: (state) => {
    return {
      pagination: {
        pageIndex: 0,
        pageSize: 10,
      },
      ...state,
    } as any;
  },
  getDefaultOptionsResolved: (options) => {
    return getPaginationOptions(options);
  },
  createTable: (table) => {
    // eslint-disable-next-line no-param-reassign
    table.setPagination = (updater) => {
      const safeUpdater: Updater<PaginationState> = (old) => {
        const newState = functionalUpdate(updater, old);
        return newState;
      };

      const { autoResetFiltersWhenPageChange = false } = table.options;
      if (autoResetFiltersWhenPageChange) {
        table.setRowSelection({});
      }
      return table.options.onPaginationChange?.(safeUpdater);
    };
  },
};
