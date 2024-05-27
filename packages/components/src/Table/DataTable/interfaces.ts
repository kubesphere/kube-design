import type {
  TableOptionsResolved as _TableOptionsResolved,
  ColumnMeta as _ColumnMeta,
  TableOptions as _TableOptions,
  TableFeature as _TableFeature,
  TableMeta as _TableMeta,
  RowData,
  ColumnDef as _ColumnDef,
  Table as _Table,
  TableState,
} from '@tanstack/react-table';

export type TableOptionsResolved<TData extends RowData> = _TableOptionsResolved<TData>;

export type ColumnMeta<TData extends RowData, TValue = unknown> = _ColumnMeta<TData, TValue>;

export type TableOptions<TData extends RowData> = _TableOptions<TData>;

export type TableFeature<TData extends RowData = any> = _TableFeature<TData>;

export type TableMeta<TData extends RowData> = _TableMeta<TData>;

export type ColumnDef<TData, TValue> = _ColumnDef<TData, TValue>;

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
