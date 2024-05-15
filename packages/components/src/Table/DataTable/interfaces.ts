export interface BaseColumn {
  title: string | React.ReactNode;
  description?: { title?: string; content?: React.ReactNode };
  id?: string;
  searchable?: boolean;
  sortable?: boolean;
  filterOptions?: { label: string | React.ReactNode; key: any }[];
  canHide?: boolean;
  width?: number | string;
  minWidth?: number;
  maxWidth?: number;
}

interface RequiredFieldColumn<T extends Record<string, any>, TValue = unknown> {
  field: string;
  render?: (value: TValue, record: T) => React.ReactNode;
}

interface RequiredRenderColumn<T extends Record<string, any>> {
  field: undefined;
  render?: (record: T) => React.ReactNode;
}

export type ColumnV7<T extends Record<string, any> = unknown, TValue = unknown> = BaseColumn &
  (RequiredFieldColumn<T, TValue> | RequiredRenderColumn<T>);
