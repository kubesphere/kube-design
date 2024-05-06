import * as React from 'react';
import cx from 'classnames';
import type {
  Table,
  RowData,
  Header,
  TableOptions as ReactTableOptions,
  TableState,
  Row,
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
    tableName: string;
    storageStateKeys?: (keyof TableState)[];
    manual?: boolean;
    enable?: {
      pagination?: boolean;
      toolbar?: boolean;
      visible?: boolean;
      filters?: boolean;
    };
    enableDefault?: {
      toolbar?: boolean;
      th?: boolean;
      td?: boolean;
      tr?: boolean;
    };
    getProps?: {
      filters?: (table: Table<TData>) => BaseTable.ToolbarProps['filterProps'];
      toolbar?: (
        table: Table<TData>
      ) => Partial<Omit<BaseTable.ToolbarProps, 'filtersProps' | 'enableFilters'>>;
      table?: (table: Table<TData>) => Partial<BaseTable.TableProps>;
      th?: (
        table: Table<TData>,
        header: Header<TData, unknown>
      ) => Omit<BaseTable.TableCellProps, 'ref'>;
      pagination?: (table: Table<TData>) => Partial<BaseTable.BaseTablePaginationProps> & {
        total?: number;
      };
      tr?: (table: Table<TData>, row: Row<TData>) => Partial<BaseTable.TableRowProps>;
      td?: (
        table: Table<TData>,
        props: Record<string, any>
      ) => Omit<BaseTable.TableCellProps, 'ref'>;
    };

    // Remove middlewares because it's difficult
    __middlewares?: ((
      next: Next<TData>
    ) => (options: TableOptions<TData>) => TableOptions<TData>)[];
    __registerEvents?: {
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
}

export function TableRoot<T>({ className, table }: DataTableProps<T>) {
  const { options: { meta: { enable: { pagination, toolbar } } = {} } = {} } = table;
  return (
    <div className={cx('table-container', className)}>
      {!!toolbar && <Toolbar table={table} />}
      <BaseDataTable table={table} />
      {!!pagination && <Pagination table={table} />}
    </div>
  );
}
