import {
  TableOptions as ReactTableOptions,
  RowSelectionState,
  TableState,
  getFilteredRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table';
import { pick, set } from 'lodash';
import React, { useMemo } from 'react';
import EventBus, { eventKv } from './eventBus';
import { safeJSON } from './utils';

type TableOptions<TData> = Partial<ReactTableOptions<TData>>;

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

// export const changeEventMiddleware =
//   <TData>(next: Next<TData>) =>
//   (options: TableOptions<TData>) => {
//     const { meta: { __registerEvents = [] } = {} } = options;
//     Object.entries(eventDefaultConfig).forEach(([key, value]) => {
//       const event = options[key];
//       if (event) {
//         __registerEvents.push({
//           eventNames: value as unknown as 'state',
//           callback: event,
//           stopPropagation: true,
//         });
//       }
//     });
//     return next(options);
//   };

export const initStateByStorageMiddleware =
  <TData>(next: Next<TData>) =>
  (options: TableOptions<TData>) => {
    const {
      initialState,
      meta: { tableName, storageStateKeys = [] },
    } = options;
    const key = `kube-table-${tableName}-state`;
    const params = pick(safeJSON.parse(localStorage.getItem(key)) ?? {}, storageStateKeys);
    const newOptions = next({
      ...options,
      initialState: { ...params, ...initialState },
    });
    React.useEffect(() => {
      localStorage.setItem(key, safeJSON.stringify(pick(newOptions.state, storageStateKeys)));
    }, [newOptions.state]);
    return newOptions;
  };

export const visibleMiddleware =
  <TData>(next: Next<TData>) =>
  (options: TableOptions<TData>): TableOptions<TData> => {
    const {
      initialState,
      onColumnVisibilityChange,
      state,
      meta: { __registerEvents = [] } = {},
    } = options;

    const initState = initialState?.columnVisibility ?? {};
    const [visibility, setVisibility] = React.useState(initState);

    if (onColumnVisibilityChange) {
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
    const { columns, initialState } = options;
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
      state,
      initialState,
      meta: { manual, __registerEvents = [], enable = {} },
      meta,
    } = options;
    const [columnFilters, setColumnFilters] = React.useState([]);

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
    return next({
      ...base,
      meta: {
        ...meta,
        enable: {
          ...enable,
          filters: true,
        },
      },
    });
  };

export const paginationMiddleware =
  <TData>(next: Next<TData>) =>
  (options: TableOptions<TData>): TableOptions<TData> => {
    const {
      initialState,
      state,
      initialState: { pagination: defaultPagination } = {},
      meta,
      meta: { manual, __registerEvents = [] } = {},
    } = options;
    const [pagination, setPagination] = React.useState({
      pageSize: defaultPagination?.pageSize ?? 10,
      pageIndex: defaultPagination?.pageIndex ?? 0,
    });

    __registerEvents.push({
      eventNames: 'pagination',
      callback: setPagination,
      stopPropagation: false,
    });

    const base = {
      ...options,
      initialState: { pagination, ...initialState },
      state: {
        pagination,
        ...state,
      },
      meta: {
        ...meta,
        __registerEvents,
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

export const rowSelectionMiddleware =
  <TData>(next: Next<TData>) =>
  (options: TableOptions<TData>) => {
    const [rowSelection, setRowSelection] = React.useState({} as RowSelectionState);
    const { meta: { __registerEvents = [] } = {} } = options;
    __registerEvents.push({
      eventNames: 'rowSelection',
      callback: setRowSelection,
    });
    return next({
      ...options,
      state: {
        ...options.state,
        rowSelection,
      },
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

    React.useEffect(() => {
      const list = [];
      __registerEvents.forEach((event) => {
        if (typeof event.eventNames === 'string' || event.eventNames.length === 1) {
          const eventName =
            typeof event.eventNames === 'string' ? event.eventNames : event.eventNames[0];
          list.push([
            eventName,
            {
              key: eventName,
              stopPropagation: event.stopPropagation || !!options[eventKv[eventName]],
              callback: (_, args) => {
                event.callback(args);
              },
            },
          ]);
        } else if (Array.isArray(event.eventNames)) {
          event.eventNames.forEach((eventName) => {
            const others = (event.eventNames as string[]).filter((name) => name !== eventName);
            list.push([
              eventName,
              {
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
              },
            ]);
          });
        }
      });
      if (list.length > 0) {
        list.forEach(([eventName, handler]) => {
          eventBusRef.current.on(eventName, handler);
        });
        return () => {
          list.forEach(([eventName, handler]) => {
            eventBusRef.current.off(eventName, handler);
          });
        };
      }
      return () => {};
    }, [__registerEvents]);

    const events = useMemo(() => {
      let eventKeys = [];
      const events1 = {};
      __registerEvents.forEach((event) => {
        eventKeys = eventKeys.concat(event.eventNames);
        eventKeys.forEach((key) => {
          events1[eventKv[key]] = (args) => {
            if (options[eventKv[key]]) {
              options[eventKv[key]](args);
            } else {
              eventBusRef.current.emit(key, args);
            }
          };
        });
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

export const getFilterOptions =
  <TData>(next: Next<TData>) =>
  (options: TableOptions<TData>) => {
    const {
      meta: { manual },
    } = options;
    if (!manual) {
      return next({
        enableFilters: true,
        enableColumnFilters: true,
        getFilteredRowModel: getFilteredRowModel(),
        ...options,
      });
    }
    return next({
      enableFilters: false,
      enableColumnFilters: false,
      manualFiltering: true,
      ...options,
    });
  };

export const getSortOptions =
  <TData>(next: Next<TData>) =>
  (options: TableOptions<TData>) => {
    const {
      meta: { manual },
    } = options;
    if (!manual) {
      return next({
        enableSorting: true,
        getSortedRowModel: getFilteredRowModel(),
        ...options,
      });
    }
    return next({
      enableSorting: true,
      manualSorting: true,
      ...options,
    });
  };

export const getPaginationOptions =
  <TData>(next: Next<TData>) =>
  (options: TableOptions<TData>) => {
    const {
      meta: { manual },
    } = options;
    if (!manual) {
      return next({
        getPaginationRowModel: getPaginationRowModel(),
        autoResetPageIndex: false,
        ...options,
      });
    }
    return next({
      manualPagination: true,
      rowCount: 0,
      autoResetPageIndex: true,
      ...options,
    });
  };

export const getSingleRowSelectionOptions =
  <TData>(next: Next<TData>) =>
  (options: TableOptions<TData>) => {
    return next({
      enableMultiRowSelection: false,
      ...options,
    });
  };
