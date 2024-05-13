import { TableOptionsResolved, getFilteredRowModel } from '@tanstack/react-table';

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
    enableGlobalFilter: false,
    enableSorting: true,
    manualSorting: true,
    ...options,
  };
};

export const InitSortFeature = <TData>(options: TableOptionsResolved<TData>) => {
  return getSortOptions(options);
};
