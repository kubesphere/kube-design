import * as React from 'react';
import * as BaseTable from './BaseTable';
import * as DataTable from './DataTable';

export { BaseTable, DataTable };

export interface TableProps<T> {
  /**  */
  table: DataTable.TableInstance<T>;

  /** */
  className?: string;
}

export function Table<T>({ table }: TableProps<T>) {
  return <DataTable.DataTable table={table} />;
}

export interface Table1111Props<T> {
  /** xxxx */
  table: DataTable.TableInstance<T>;
}
