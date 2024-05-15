import { TableFeature, TableOptionsResolved, getSortedRowModel } from '@tanstack/react-table';

const getSortOptions = <TData>(options: TableOptionsResolved<TData>) => {
  const {
    meta: { manual },
  } = options;
  if (!manual) {
    return {
      enableSorting: true,
      getSortedRowModel: getSortedRowModel(),
      ...options,
    };
  }
  return {
    enableSorting: true,
    manualSorting: true,
    ...options,
  };
};

export const InitSortFeature: TableFeature<any> = {
  getDefaultOptionsResolved: (options) => {
    return getSortOptions(options);
  },
};
