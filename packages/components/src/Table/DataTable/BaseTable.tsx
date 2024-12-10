import { Table, flexRender } from '@tanstack/react-table';
import * as React from 'react';
import * as BaseTable from '../BaseTable';
import { TableHead } from './TableHead';
import { getDefaultTrProps } from './utils';
import { Skeleton } from '../../Skeleton/Skeleton';

interface BaseDataTableProps<T> {
  table: Table<T>;
}

export function BaseDataTable<T>({ table }: BaseDataTableProps<T>) {
  const {
    options: {
      loading,
      meta: {
        refetch,
        enable: { toolbar } = {},
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
  const tableLoading = loading && table.getRowModel().rows.length === 0;
  return (
    <>
      <BaseTable.Table {...tableProps}>
        <BaseTable.TableHead hasBorderTop={!!toolbar}>
          {table.getHeaderGroups().map((headerGroup) => (
            <BaseTable.TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead header={header} table={table} key={header.id} />
              ))}
            </BaseTable.TableRow>
          ))}
        </BaseTable.TableHead>
        <BaseTable.TableBody style={{ minHeight: tableLoading ? 165 : undefined }}>
          {tableLoading &&
            [1, 2, 3, 4].map((i) => (
              <BaseTable.TableRow key={i}>
                {table.getVisibleLeafColumns().map((column) => (
                  <BaseTable.TableCell key={column.id}>
                    <Skeleton height={30} radius="sm" />
                  </BaseTable.TableCell>
                ))}
              </BaseTable.TableRow>
            ))}
          {!tableLoading &&
            table.getRowModel().rows.map((row) => (
              <BaseTable.TableRow
                key={row.id}
                {...(enableTr && getDefaultTrProps(table, row))}
                {...(getTrProps && getTrProps(table, row))}
              >
                {row.getVisibleCells().map((cell) => (
                  <BaseTable.TableCell
                    key={cell.id}
                    {...(getTdProps && getTdProps(table, cell.getContext()))}
                    {...(cell.column.columnDef.meta?.td ?? {})}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext()) ?? null}
                  </BaseTable.TableCell>
                ))}
              </BaseTable.TableRow>
            ))}
        </BaseTable.TableBody>
      </BaseTable.Table>
      {!loading &&
        table.getRowModel().rows.length === 0 &&
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
