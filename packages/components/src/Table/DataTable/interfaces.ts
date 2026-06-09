import type {
  TableOptionsResolved as _TableOptionsResolved,
  ColumnMeta as _ColumnMeta,
  TableOptions as _TableOptions,
  TableFeature as _TableFeature,
  TableMeta as _TableMeta,
  Header,
  Row,
  RowData,
  ColumnDef as _ColumnDef,
  Table as _Table,
  TableState as _TableState,
} from '@tanstack/react-table';
import type * as BaseTable from '../BaseTable';

export type TableOptionsResolved<TData extends RowData> = _TableOptionsResolved<TData>;

export type ColumnMeta<TData extends RowData, TValue = unknown> = _ColumnMeta<TData, TValue>;

export type TableOptions<TData extends RowData> = _TableOptions<TData>;

export type TableFeature<TData extends RowData = any> = _TableFeature<TData>;

export type TableMeta<TData extends RowData> = _TableMeta<TData>;

export type ColumnDef<TData, TValue> = _ColumnDef<TData, TValue>;

export interface TableState extends _TableState {}

export interface TableEnableConfig {
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

export interface FeaturesHandlersOptions {
  _featuresHandlers?: StateHandler[];
  _featuresInitState?: Partial<TableState>;
}

export interface DefaultOptionsResolved<TData> {
  getDefaultOptionsResolved?: (options: TableOptionsResolved<TData>) => TableOptionsResolved<TData>;
}

export type Table<T> = _Table<T>;
export interface DataTableRootProps<T> {
  className?: string;
  table: Table<T>;
}

declare module '@tanstack/react-table' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface TableOptionsResolved<TData extends RowData>
    extends StorageStateOptions,
      FeaturesHandlersOptions {
    loading?: boolean;
    autoResetFiltersWhenPageChange?: boolean;
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
