import * as React from 'react';

export interface ColumnProps<T, K extends keyof T> {
  key: string;
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
  render?: (value: T[K], record: T) => React.ReactNode;
}

interface TableProps<T> {
  dataSource: T[];
  columns: ColumnProps<T, keyof T>[];
}

export const BaseDataTable = (props: TableProps) => {};
