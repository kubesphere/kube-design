import { Table, flexRender } from '@tanstack/react-table';
import * as React from 'react';
import * as BaseTable from '../BaseTable';
import { getDefaultTrProps } from './utils';
import TableHead from './TableHead';

interface BaseDataTableProps<T> {
  table: Table<T>;
}

export function BaseDataTable<T>({ table }: BaseDataTableProps<T>) {
  const {
    options: {
      meta: {
        refetch,
        enableDefault: { tr: enableTr = true } = {},
        getProps: {
          table: getTableProps,
          tr: getTrProps,
          td: getTdProps,
          empty: getEmptyProps,
        } = {},
      } = {},
    } = {},
  } = table;

  const tableProps = getTableProps ? getTableProps(table) : {};
  return (
    <>
      <BaseTable.Table {...tableProps}>
        <BaseTable.TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <BaseTable.TableRow>
              {headerGroup.headers.map((header) => (
                <TableHead header={header} table={table} />
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
      {table.getRowModel().rows.length === 0 &&
        (table.getState().columnFilters.length > 0 ? (
          <BaseTable.TableFilteredEmpty
            clearAndRefetch={() => {
              table.setColumnFilters([]);
            }}
            refetch={refetch}
            {...getEmptyProps?.()}
          />
        ) : (
          <BaseTable.TableEmpty {...getEmptyProps?.()} />
        ))}
    </>
  );
}
