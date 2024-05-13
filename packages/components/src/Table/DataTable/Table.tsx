import * as React from 'react';
import cx from 'classnames';
import type {
  Table,
  RowData,
  Header,
  TableState,
  Row,
  TableOptions as TableOptionsBase,
  TableOptionsResolved,
} from '@tanstack/react-table';
import { Pagination } from './Pagination';
import * as BaseTable from '../BaseTable';
import { Toolbar } from './Toolbar';
import { BaseDataTable } from './BaseTable';
import styled from 'styled-components';

export interface EnableConfig {
  // enableExpanded?: boolean;
  enableToolbar?: boolean;
  enablePagination?: boolean;
  enableVisible?: boolean;
  enableFilters?: boolean;
  enableParamsToUrl?: boolean;
  enableStateToStorage?: boolean;
  enableSelection?: boolean;
  enableSort?: boolean;
  enableMultiSelection?: boolean;
  enableInitParamsByUrl?: boolean;
}

export interface StorageStateOptions {
  storage2State?: (storageKey: string) => Partial<TableState>;
  state2Storage?: (storageKey: string, state: Partial<TableState>) => void;
}
export interface StateHandler {
  handlerName?: string;
  stateKeys: (keyof TableState)[] | '*';
  callback?: (state: Partial<TableState>) => void;
}

export interface FeaturesHandlersOPtions {
  _featuresHandlers?: StateHandler[];
  _featuresInitState?: Partial<TableState>;
}

export interface DefaultOptionsResolved<TData> {
  getDefaultOptionsResolved?: (options: TableOptionsResolved<TData>) => TableOptionsResolved<TData>;
}

declare module '@tanstack/react-table' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface TableOptionsResolved<TData extends RowData>
    extends StorageStateOptions,
      FeaturesHandlersOPtions {
    loading?: boolean;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue = unknown> {
    description?: Record<string, any>;
    filterOptions?: { key: string; label: React.ReactNode }[];
    selectType?: 'single' | 'multiple';
    sortable?: boolean;
    searchKey?: string;
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

export interface TableInstance<T> extends Table<T> {}
export interface TableOptions<T> extends TableOptionsBase<T> {}
export interface DataTableRootProps<T> {
  className?: string;
  table: TableInstance<T>;
}

export function TableRoot<T>({ className, table }: DataTableRootProps<T>) {
  const { options: { meta: { enable: { pagination, toolbar } = {} } = {} } = {} } = table;
  return (
    <div className={cx('table-container', className)}>
      {!!toolbar && <Toolbar table={table} />}
      <BaseDataTable table={table} />
      {!!pagination && <Pagination table={table} />}
    </div>
  );
}
