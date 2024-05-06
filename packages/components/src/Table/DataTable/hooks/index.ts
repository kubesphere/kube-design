import { Table, useReactTable } from '@tanstack/react-table';
import { useMemo } from 'react';

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
      meta: { __middlewares = [], __registerEvents = [] } = {},
    } = options;
    const useMiddleware = middleware(
      ...((enableDefaultMiddlewares ? defaultMiddlewares : []) as any[]),
      ...__middlewares
    );
    return useMiddleware({
      ...options,
      meta: {
        ...meta,
        __registerEvents,
      },
    });
  }, [options]);
  return useReactTable(newOptions);
}
