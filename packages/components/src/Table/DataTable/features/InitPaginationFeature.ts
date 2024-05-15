import { TableFeature, TableOptionsResolved, getPaginationRowModel } from '@tanstack/react-table';

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
};
