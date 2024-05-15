import { Table, TableFeature, TableState } from '@tanstack/react-table';
import { pick } from 'lodash';
import { safeJSON } from '../utils/utils';

const defaultOptions = {
  storage2State: (storageKey: string) => {
    return safeJSON.parse(localStorage.getItem(storageKey)) ?? {};
  },
  state2Storage: (storageKey: string, state: Partial<TableState>) => {
    localStorage.setItem(storageKey, safeJSON.stringify(state));
  },
  meta: {
    storageStateKeys: ['columnVisibility'] as (keyof TableState)[],
  },
};

export const Status2StorageFeature: TableFeature<any> = {
  getDefaultOptionsResolved: (options) => {
    const baseOptions = {
      ...defaultOptions,
      ...options,
      meta: {
        ...defaultOptions.meta,
        ...options.meta,
      },
    };
    const {
      meta: { tableName, storageStateKeys },
      storage2State,
    } = baseOptions;
    if (!tableName) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('tableName is required for Status2StorageFeature');
      }
      return baseOptions;
    }
    const key = `kube-table-${tableName}-state`;
    let storageParams = storage2State(key);
    if (storageStateKeys !== '*') {
      storageParams = pick(storageParams, storageStateKeys);
    }
    return {
      ...baseOptions,
      initialState: {
        ...storageParams,
        ...(baseOptions.initialState ?? {}),
      },
    };
  },
  createTable: (table: Table<any>) => {
    const {
      options: {
        storage2State,
        state2Storage,
        meta: { tableName, storageStateKeys },
      },
    } = table;
    if (tableName) {
      const key = `kube-table-${tableName}-state`;
      let storageParams = storage2State(key);

      if (storageStateKeys !== '*') {
        storageParams = pick(storageParams, storageStateKeys);
      }
      table.setOptions((prev) => {
        return {
          ...prev,
          _featuresHandlers: [
            ...(prev._featuresHandlers || []),
            {
              stateKeys: '*',
              callback: (state: Partial<TableState>) => {
                state2Storage(key, state);
              },
            },
          ],
          _featuresInitState: {
            ...prev._featuresInitState,
            ...storageParams,
          },
        };
      });
    }
  },
};
