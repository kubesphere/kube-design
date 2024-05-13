import {
  ColumnDef,
  RowData,
  Table,
  TableMeta,
  TableOptions,
  getCoreRowModel,
} from '@tanstack/react-table';
import * as React from 'react';
import { EnableConfig, TableRoot } from './Table';

import {
  InitFilterFeature,
  InitPaginationFeature,
  InitSortFeature,
  Status2StorageFeature,
} from './features';
import { useTable } from './hooks';

export function getDefaultTableOptions<TData extends RowData>(
  tableName: string,
  manual: boolean = true,
  enableConfig: EnableConfig = {}
): Partial<TableOptions<TData>> & { getCoreRowModel: (table: Table<TData>) => any } {
  const {
    enableFilters = true,
    enablePagination = true,
    enableToolbar = true,
    enableVisible = true,
    // enableParamsToUrl = true,
    enableSelection = false,
    enableMultiSelection = true,
    enableStateToStorage = true,
    enableSort = true,
  } = enableConfig;

  return {
    _features: [
      enablePagination && InitPaginationFeature,
      enableFilters && InitFilterFeature,
      // enableSelection && InitRowSelectionFeature,
      enableSort && InitSortFeature,
      enableStateToStorage && Status2StorageFeature,
    ].filter(Boolean) as TableOptions<TData>['_features'],

    enableMultiRowSelection: enableMultiSelection,
    enableRowSelection: enableSelection,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      tableName,
      manual,
      storageStateKeys: ['columnVisibility'],
      registerHandlers: manual
        ? [
            {
              handlerName: 'onParamsChange',
              stateKeys: ['pagination', 'columnFilters', 'sorting'],
            },
          ]
        : [],
      enable: {
        filters: enableFilters,
        pagination: enablePagination,
        toolbar: enableToolbar,
        visible: enableVisible,
      },
      enableDefault: {
        td: true,
        th: true,
        toolbar: true,
        tr: true,
      },
    } as TableMeta<TData>,
  };
}

export interface DataTableProps<TData> {
  columns: ColumnDef<TData, any>[];
  data: TData[];
  manual?: boolean;
  tableName: string;
  onParamsChange?: (state: any) => void;
}

export const DataTable = <TData,>(props: DataTableProps<TData>) => {
  const { columns, data, manual = false, tableName, onParamsChange } = props;
  const options = getDefaultTableOptions<TData>(tableName, manual);
  const table = useTable<TData>({
    ...options,
    onParamsChange,
    columns,
    data,
  } as TableOptions<TData>);

  return <TableRoot table={table} />;
};
