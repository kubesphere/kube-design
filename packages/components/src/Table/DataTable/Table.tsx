import * as React from 'react';
import cx from 'classnames';
import type {
  Table,
  RowData,
  Header,
  TableOptions as ReactTableOptions,
  TableState,
} from '@tanstack/react-table';
import { Pagination } from './Pagination';
import * as BaseTable from '../BaseTable';
import { Toolbar } from './Toolbar';
import { BaseDataTable } from './BaseTable';
import { ColumnV7 } from './interfaces';

interface EnableConfig {
  enableExpanded?: boolean;
  enableToolbar?: boolean;
  enablePagination?: boolean;
  enableVisible?: boolean;
  enableFilters?: boolean;
  enableParamsToUrl?: boolean;
  enableStateToStorage?: boolean;
  enableDefaultMiddlewares?: boolean;
}

export interface TableOptions<TData> extends EnableConfig, ReactTableOptions<TData> {
  tableName: string;
  manual?: boolean;
  storageStateKeys?: (keyof TableState)[];
  onParamsChange?: (
    state: Partial<Pick<TableState, 'columnFilters' | 'sorting' | 'pagination'>>
  ) => void;
}

export type Next<TData> = (options: TableOptions<TData>) => TableOptions<TData>;

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends RowData, TValue = unknown> {
    _columnDefV7?: ColumnV7<TData, TValue>;
  }

  interface TableMeta<TData extends RowData> {
    manual?: boolean;
    pagination?: React.ReactNode;
    enableToolbar?: boolean;
    enablePagination?: boolean;
    enableVisible?: boolean;
    enableFilters?: boolean;
    getFiltersProps?: (table: Table<TData>) => BaseTable.ToolbarProps['filterProps'];
    getToolbarProps?: (
      table: Table<TData>
    ) => Partial<Omit<BaseTable.ToolbarProps, 'filtersProps' | 'enableFilters'>>;
    getTableProps?: (table: Table<TData>) => Partial<BaseTable.TableProps>;
    paginationProps?: Partial<BaseTable.BaseTablePaginationProps> & {
      total?: number;
    };
    middlewares?: ((next: Next<TData>) => (options: TableOptions<TData>) => TableOptions<TData>)[];
    getThProps?: (
      table: Table<TData>,
      header: Header<TData, unknown>
    ) => Omit<BaseTable.TableCellProps, 'ref'>;
    registerEvents?: {
      eventNames: (keyof TableState | 'state')[] | (keyof TableState | 'state');
      stopPropagation?: boolean;
      callback: (args: Record<string, any>) => void;
    }[];
  }
}

interface TableInnerProps {}

interface TableInstance<T> extends Table<T>, TableInnerProps {}

export interface DataTableProps<T> {
  className?: string;
  table: TableInstance<T>;
  tableProps?: BaseTable.TableProps;
}

export function DataTable<T>({ className, table }: DataTableProps<T>) {
  return (
    <div className={cx('table-container', className)}>
      <Toolbar table={table} />
      <BaseDataTable table={table} />
      <Pagination table={table} />
    </div>
  );
}
