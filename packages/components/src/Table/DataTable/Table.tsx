import type { Header, Row, RowData, Table, TableState } from '@tanstack/react-table';
import cx from 'classnames';
import * as React from 'react';
import * as BaseTable from '../BaseTable';
import { BaseDataTable } from './BaseTable';
import { Pagination } from './Pagination';
import { Toolbar } from './Toolbar';
import {
  DataTableRootProps,
  DefaultOptionsResolved,
  FeaturesHandlersOptions,
  StateHandler,
  StorageStateOptions,
} from './interfaces';

declare module '@tanstack/react-table' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface TableOptionsResolved<TData extends RowData>
    extends StorageStateOptions,
      FeaturesHandlersOptions {
    loading?: boolean;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue = unknown> {
    description?: Record<string, any>;
    // filterOptions?: { key: string; label: React.ReactNode }[];
    selectType?: 'single' | 'multiple';
    sortable?: boolean;
    searchKey?: string;
    th?: Omit<BaseTable.TableCellProps, 'ref'>;
    td?: Omit<BaseTable.TableCellProps, 'ref'>;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface TableOptions<TData extends RowData> {
    onParamsChange?: (params: Partial<TableState>, key: keyof TableState) => void;
    loading?: boolean;
  }

  interface TableFeature<TData extends RowData = any> extends DefaultOptionsResolved<TData> {}
  interface TableMeta<TData extends RowData> {
    tableName: string;
    refetch?: () => void;
    storageStateKeys?: (keyof TableState)[] | '*';
    _defaultConfig?: {
      selectColumnId?: string;
    };
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
      empty?: () => Partial<BaseTable.TableFilteredEmptyProps>;
    };

    registerHandlers?: StateHandler[];
  }
}

export function DataTable<T>({ className, table }: DataTableRootProps<T>) {
  const { options: { meta: { enable: { pagination, toolbar } = {} } = {} } = {} } = table;
  return (
    <div className={cx('table-container', className)}>
      {!!toolbar && <Toolbar table={table} />}
      <BaseDataTable table={table} />
      {!!pagination && <Pagination table={table} />}
    </div>
  );
}
