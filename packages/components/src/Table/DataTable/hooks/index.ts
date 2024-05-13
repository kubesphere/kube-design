import { RowData, TableOptions, TableOptionsResolved, createTable } from '@tanstack/react-table';
import { concat, flow, isFunction, pick } from 'lodash';
import * as React from 'react';

export function useTable<TData extends RowData>(options: TableOptions<TData>) {
  // Compose in the generic options to the user options
  const resolvedOptions: TableOptionsResolved<TData> = {
    state: {}, // Dummy state
    onStateChange: () => {}, // noop
    renderFallbackValue: null,
    ...options,
  };

  // Create a new table and store it in state
  const [tableRef] = React.useState(() => {
    const fns = (resolvedOptions._features ?? [])
      .map((feature) => {
        return feature.getDefaultOptionsResolved;
      })
      .filter(Boolean);
    const resolvedOptions1 = fns.length ? flow(fns)(resolvedOptions) : resolvedOptions;
    return {
      current: createTable<TData>(resolvedOptions1),
    };
  });

  // By default, manage table state here using the table's initial state
  const [state, setState] = React.useState(() => {
    return {
      ...(tableRef.current.options._featuresInitState ?? {}),
      ...(tableRef.current.initialState ?? {}),
    };
  });
  const stateRef = React.useRef({ state, optionsState: options.state });

  // StateHandler stateKey eq '*' handler
  React.useEffect(() => {
    const handlers = [
      ...(tableRef.current.options._featuresHandlers ?? []),
      ...(tableRef.current.options.meta?.registerHandlers ?? []),
    ];
    if (state !== stateRef.current.state || options.state !== stateRef.current.optionsState) {
      stateRef.current = {
        state,
        optionsState: options.state,
      };
      handlers?.forEach((handler) => {
        const fn = handler.callback ?? options[handler.handlerName];
        if (handler.stateKeys === '*' && fn) {
          fn({
            ...state,
            ...options.state,
          });
        }
      });
    }
  }, [state, options.state]);

  // StateHandler stateKey neq '*' handler
  const stateHandlers = React.useMemo(() => {
    const { meta: { registerHandlers = [] } = {}, _featuresHandlers = [] } =
      tableRef.current.options;
    const events = {};
    concat(registerHandlers, _featuresHandlers).forEach((handler) => {
      const fn = handler.callback ?? options[handler.handlerName];
      if (fn && handler.stateKeys !== '*') {
        handler.stateKeys.forEach((key) => {
          const eventName = `on${key.charAt(0).toUpperCase()}${key.slice(1)}Change`;
          if (options[eventName] || events[eventName]) {
            return;
          }
          const cb = (updater) => {
            const _state = tableRef.current.getState();
            const v = isFunction(updater) ? updater(_state[key]) : updater;
            fn(pick({ ..._state, [key]: v }, handler.stateKeys), key);
          };
          events[eventName] = cb;
        });
      }
    });

    return events;
  }, [options._featuresHandlers, options.meta?.registerHandlers]);

  // Compose the default state above with any user state. This will allow the user
  // to only control a subset of the state if desired.
  tableRef.current.setOptions((prev) => ({
    ...prev,
    ...stateHandlers,
    ...options,
    state: {
      ...state,
      ...options.state,
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (updater) => {
      setState(updater);
      options.onStateChange?.(updater);
    },
  }));

  return tableRef.current;
}
