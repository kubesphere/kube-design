import {
  ColumnDef,
  TableMeta,
  TableOptions,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import * as React from 'react';
import { TableRoot } from './Table';

export const getDefaultTableOptions = <TData,>(
  tableName: string,
  manual: boolean
): Partial<TableOptions<TData>> => {
  return {
    enableColumnFilters: true,
    enableGlobalFilter: false,
    enableRowSelection: false,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      tableName,
      manual,
      __registerEvents: [],
      __middlewares: [],
      enable: {
        filters: false,
        pagination: false,
        toolbar: false,
        visible: false,
      },
      enableDefault: {
        td: true,
        th: true,
        toolbar: true,
        tr: true,
      },
    } as TableMeta<TData>,
  };
};

export interface DataTableProps<TData> {
  columns: ColumnDef<TData, any>[];
  data: TData[];
  manual?: boolean;
  tableName: string;
  onFetchData?: (state: any) => void;
}

export const DataTable = <TData,>(props: DataTableProps<TData>) => {
  const { columns, data, manual = false, tableName, onFetchData } = props;
  const options = getDefaultTableOptions<TData>(tableName, manual);
  const table = useReactTable<TData>({ ...options, columns, data } as TableOptions<TData>);

  return <TableRoot table={table} />;
};
