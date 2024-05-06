import { getFilteredRowModel, getPaginationRowModel } from '@tanstack/react-table';
import { isEqual, pick, set } from 'lodash';
import React, { useEffect, useMemo } from 'react';
import { TableOptions } from '../Table';
import EventBus, { eventDefaultConfig, eventKv } from './eventBus';
import { safeJSON } from './utils';

export type Next<TData> = (options: TableOptions<TData>) => TableOptions<TData>;

export type MapperOptionMiddlewareHook<TData> = (next?: Next<TData>) => Next<TData>;

const filedMapper = (params: Record<string, string>) => {
  const { page, limit, sortBy, ascending, ...rest } = params;
  const state = {};
  if (page !== undefined) {
    set(state, 'pagination.pageIndex', Number(page) - 1);
  }
  if (limit !== undefined) {
    set(state, 'pagination.pageSize', Number(limit));
  }
  if (sortBy !== undefined) {
    set(state, `sorting[0].id`, sortBy);
  }
  if (ascending !== undefined) {
    set(state, `sorting[0].desc`, ascending === 'true' ? 'asc' : 'desc');
  }

  return {
    ...state,
    columnFilters: Object.entries(rest).reduce((acc, [id, value]) => {
      return [...acc, { id, value }];
    }, []),
  };
};

export const changeEventMiddleware =
  <TData>(next: Next<TData>) =>
  (options: TableOptions<TData>) => {
    const { meta: { __registerEvents = [] } = {} } = options;
    Object.entries(eventDefaultConfig).forEach(([key, value]) => {
      const event = options[key];
      if (event) {
        __registerEvents.push({
          eventNames: value as unknown as 'state',
          callback: event,
          stopPropagation: true,
        });
      }
    });
    return next(options);
  };

export const initStateByStorageMiddleware =
  <TData>(next: Next<TData>) =>
  (options: TableOptions<TData>) => {
    const { tableName, initialState, enableStateToStorage, storageStateKeys = [] } = options;
    const key = `kube-table-${tableName}-state`;
    const params = !enableStateToStorage
      ? {}
      : pick(safeJSON.parse(localStorage.getItem(key)) ?? {}, storageStateKeys);
    const newOptions = next({
      ...options,
      initialState: { ...params, ...initialState },
    });
    React.useEffect(() => {
      if (enableStateToStorage) {
        localStorage.setItem(key, safeJSON.stringify(pick(newOptions.state, storageStateKeys)));
      }
    }, [newOptions.state]);
    return newOptions;
  };

export const visibleMiddleware =
  <TData>(next: Next<TData>) =>
  (options: TableOptions<TData>): TableOptions<TData> => {
    const { enableVisible, initialState, state, meta: { __registerEvents = [] } = {} } = options;
    const initState = initialState?.columnVisibility ?? {};
    const [visibility, setVisibility] = React.useState(initState);
    if (!enableVisible) {
      return next(options);
    }

    __registerEvents.push({
      eventNames: 'columnVisibility',
      callback: setVisibility,
      stopPropagation: false,
    });
    return next({
      ...options,
      initialState: {
        columnVisibility: visibility,
        ...initialState,
      },
      state: {
        columnVisibility: visibility,
        ...state,
      },
    });
  };

export const initParamsByUrlMiddleware =
  <TData>(next: Next<TData>) =>
  (options: TableOptions<TData>): TableOptions<TData> => {
    const { columns, initialState, enableParamsToUrl } = options;
    if (!enableParamsToUrl) {
      return next(options);
    }
    const fields = ['page', 'limit', 'sortBy', 'ascending'];
    columns.forEach((column) => {
      const def = column.meta?._columnDefV7.field;
      if (def !== undefined) {
        fields.push(def);
      }
    });
    const params = {};
    new URLSearchParams(window.location.search).forEach((k, v) => {
      params[k] = v;
    });
    const newOption = next({
      ...options,
      initialState: { ...filedMapper(params), ...initialState },
    });
    return newOption;
  };

export const filtersMiddleware =
  <TData>(next: Next<TData>) =>
  (options: TableOptions<TData>): TableOptions<TData> => {
    const {
      enableFilters,
      manual,
      state,
      initialState,
      meta: { __registerEvents = [], enable = {} },
    } = options;
    const [columnFilters, setColumnFilters] = React.useState([]);
    if (!enableFilters) {
      return next(options);
    }

    __registerEvents.push({
      eventNames: 'columnFilters',
      callback: setColumnFilters,
      stopPropagation: false,
    });

    const base = {
      ...options,
      initialState: { columnFilters, ...initialState },
      state: {
        columnFilters,
        ...state,
      },
    };
    if (!manual) {
      return {
        ...base,
        getFilteredRowModel: getFilteredRowModel(),
      };
    }
    return {
      ...base,
      meta: {
        enable: {
          ...enable,
          filters: true,
        },
      },
    };
  };

export const paginationMiddleware =
  <TData>(next: Next<TData>) =>
  (options: TableOptions<TData>): TableOptions<TData> => {
    const {
      enablePagination,
      manual,
      initialState,
      state,
      initialState: { pagination: defaultPagination } = {},
      meta,
      meta: { __registerEvents = [] } = {},
    } = options;
    const [pagination, setPagination] = React.useState({
      pageSize: defaultPagination?.pageSize ?? 10,
      pageIndex: defaultPagination?.pageIndex ?? 0,
    });
    if (!enablePagination) {
      return next(options);
    }

    const handleChange = (newPagination) => {
      setPagination(newPagination);
    };
    __registerEvents.push({
      eventNames: 'pagination',
      callback: handleChange,
      stopPropagation: false,
    });

    const base = {
      ...options,
      initialState: { pagination, ...initialState },
      state: {
        pagination,
        ...state,
      },
      onPaginationChange: handleChange,
      meta: {
        ...meta,
        __registerEvents,
        enablePagination,
      },
    };
    if (manual) {
      return next({
        ...base,
        manualPagination: true,
      });
    }
    return next({
      ...base,
      getPaginationRowModel: getPaginationRowModel(),
    });
  };

export const initEventBusMiddleware =
  <TData>(next: Next<TData>) =>
  (options: TableOptions<TData>) => {
    const eventBusRef = React.useRef(new EventBus());
    const { meta, meta: { __registerEvents: _events = [] } = {} } = options;

    const config = next({
      ...options,
      meta: {
        ...meta,
        __registerEvents: _events,
      },
    });
    const { state, meta: { __registerEvents = [] } = {} } = config;

    const events = useMemo(() => {
      let eventKeys = [];
      // TODO: event just need register one time
      eventBusRef.current.clear();
      __registerEvents.forEach((event) => {
        eventKeys = eventKeys.concat(event.eventNames);
        if (typeof event.eventNames === 'string' || event.eventNames.length === 1) {
          const eventName =
            typeof event.eventNames === 'string' ? event.eventNames : event.eventNames[0];
          eventBusRef.current.on(eventName, {
            key: eventName,
            stopPropagation: event.stopPropagation,
            callback: (_, args) => {
              event.callback(args);
            },
          });
        } else if (Array.isArray(event.eventNames)) {
          event.eventNames.forEach((eventName) => {
            const others = (event.eventNames as string[]).filter((name) => name !== eventName);
            eventBusRef.current.on(eventName, {
              key: eventName,
              stopPropagation: event.stopPropagation,
              callback: (_, args) => {
                if (eventName === 'state') {
                  event.callback(args);
                } else {
                  event.callback({
                    [eventName]: args,
                    ...pick(state, others),
                  });
                }
              },
            });
          });
        }
      });

      const events1 = {};
      eventKeys.forEach((key) => {
        events1[eventKv[key]] = (args) => {
          eventBusRef.current.emit(key, args);
        };
      });
      return events1;
    }, [__registerEvents]);

    return {
      ...config,
      ...events,
    };
  };

export const middleware = <TData>(...hooks: MapperOptionMiddlewareHook<TData>[]) =>
  hooks.reduce((acc: MapperOptionMiddlewareHook<TData>, cur: MapperOptionMiddlewareHook<TData>) => {
    return (next) => acc(cur(next));
  })((d: TableOptions<TData>) => d);
