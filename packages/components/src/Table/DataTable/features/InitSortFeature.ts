import { TableFeature, TableOptionsResolved, getFilteredRowModel } from '@tanstack/react-table';

const getSortOptions = <TData>(options: TableOptionsResolved<TData>) => {
  const {
    meta: { manual },
  } = options;
  if (!manual) {
    return {
      enableSorting: true,
      getSortedRowModel: getFilteredRowModel(),
      ...options,
    };
  }
  return {
    enableSorting: true,
    manualSorting: true,
    ...options,
  };
};

export const InitFilterFeature: TableFeature<any> = {
  getDefaultOptionsResolved: (options) => {
    return getSortOptions(options);
  },
};
