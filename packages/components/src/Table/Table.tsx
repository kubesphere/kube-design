import * as React from 'react';
import * as BaseTable from './BaseTable';
import * as DataTable from './DataTable';

export { BaseTable, DataTable };

export interface TableProps<T> {
  /** react table instance */
  table: DataTable.TableInstance<T>;

  /** class name */
  className?: string;
}

export function Table<T>({ table, className }: TableProps<T>) {
  return <DataTable.DataTable table={table} className={className} />;
}
