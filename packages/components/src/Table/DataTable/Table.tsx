import cx from 'classnames';
import * as React from 'react';
import { BaseDataTable } from './BaseTable';
import { Pagination, TableFooter } from './Pagination';
import { Toolbar } from './Toolbar';
import { DataTableRootProps } from './interfaces';

export function DataTable<T>({ className, table }: DataTableRootProps<T>) {
  const { options: { meta: { enable: { pagination, toolbar } = {} } = {} } = {} } = table;
  return (
    <div className={cx('table-container', className)}>
      {!!toolbar && <Toolbar table={table} />}
      <BaseDataTable table={table} />
      {!!pagination && (
        <TableFooter>
          <Pagination table={table} />
        </TableFooter>
      )}
    </div>
  );
}
