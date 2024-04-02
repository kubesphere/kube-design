import { Table, useReactTable } from '@tanstack/react-table';
import { TableOptions } from '../Table';

import {
  changeEventMiddleware,
  filtersMiddleware,
  initEventBusMiddleware,
  initParamsByUrlMiddleware,
  initStateByStorageMiddleware,
  middleware,
  paginationMiddleware,
  visibleMiddleware,
} from '../utils/middleware';
import { useMemo } from 'react';

const defaultMiddlewares = [
  initEventBusMiddleware,
  changeEventMiddleware,
  initStateByStorageMiddleware,
  initParamsByUrlMiddleware,
  visibleMiddleware,
  paginationMiddleware,
  filtersMiddleware,
] as const;

export function useTable<TData>(options: TableOptions<TData>): Table<TData> {
  const newOptions = useMemo(() => {
    const {
      enableDefaultMiddlewares = true,
      meta,
      meta: { middlewares = [], registerEvents = [] } = {},
    } = options;
    const useMiddleware = middleware(
      ...((enableDefaultMiddlewares ? defaultMiddlewares : []) as any[]),
      ...middlewares
    );
    return useMiddleware({
      ...options,
      meta: {
        ...meta,
        registerEvents,
      },
    });
  }, [options]);
  return useReactTable(newOptions);
}
