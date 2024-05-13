import { TableFeature, TableOptionsResolved, getFilteredRowModel } from '@tanstack/react-table';

const getFilterOptions = <TData>(options: TableOptionsResolved<TData>) => {
  const {
    meta: { manual },
  } = options;
  if (!manual) {
    return {
      enableSorting: true,
      getFilteredRowModel: getFilteredRowModel(),
      ...options,
    };
  }
  return {
    enableGlobalFilter: false,
    enableColumnFilter: true,
    manualFiltering: true,
    ...options,
  };
};

export const InitFilterFeature: TableFeature<any> = {
  getDefaultOptionsResolved: (options) => {
    return getFilterOptions(options);
  },
};
