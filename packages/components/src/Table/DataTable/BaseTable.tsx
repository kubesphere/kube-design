import { Table, flexRender } from '@tanstack/react-table';
import * as React from 'react';
import * as BaseTable from '../BaseTable';
import { getDefaultThProps, getDefaultTrProps } from './utils';

interface BaseDataTableProps<T> {
  table: Table<T>;
}

export function BaseDataTable<T>({ table }: BaseDataTableProps<T>) {
  const {
    options: {
      meta: {
        enableDefault: { th: enableTh = true, tr: enableTr = true } = {},
        getProps: { th: getThProps, table: getTableProps, tr: getTrProps, td: getTdProps } = {},
      } = {},
    } = {},
  } = table;

  const tableProps = getTableProps ? getTableProps(table) : {};
  return (
    <BaseTable.Table {...tableProps}>
      <BaseTable.TableHead>
        {table.getHeaderGroups().map((headerGroup) => (
          <BaseTable.TableRow>
            {headerGroup.headers.map((header) => (
              <BaseTable.TableCell
                colSpan={header.colSpan}
                {...(enableTh && getDefaultThProps(table))}
                {...(getThProps && getThProps(table, header))}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </BaseTable.TableCell>
            ))}
          </BaseTable.TableRow>
        ))}
      </BaseTable.TableHead>
      <BaseTable.TableBody>
        {table.getRowModel().rows.map((row) => (
          <BaseTable.TableRow
            key={row.id}
            {...(enableTr && getDefaultTrProps(table, row))}
            {...(getTrProps && getTrProps(table, row))}
          >
            {row.getVisibleCells().map((cell) => (
              <BaseTable.TableCell
                key={cell.id}
                {...(getTdProps && getTdProps(table, cell.getContext()))}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </BaseTable.TableCell>
            ))}
          </BaseTable.TableRow>
        ))}
      </BaseTable.TableBody>
    </BaseTable.Table>
  );
}
