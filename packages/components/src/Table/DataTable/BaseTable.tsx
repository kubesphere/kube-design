import { Table, flexRender } from '@tanstack/react-table';
import * as React from 'react';
import * as BaseTable from '../BaseTable';
import { getDefaultTdProps, getDefaultThProps } from './utils';
import styled from 'styled-components';

interface BaseDataTableProps<T> {
  table: Table<T>;
}

const TableContainer = styled.div`
  padding: 0px 12px 12px;
`;
export function BaseDataTable<T>({ table }: BaseDataTableProps<T>) {
  const { options } = table;
  const { meta = {} } = options;
  const { getThProps } = meta;

  return (
    <TableContainer>
      <BaseTable.Table>
        <BaseTable.TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <BaseTable.TableRow>
              {headerGroup.headers.map((header) => (
                <BaseTable.TableCell
                  colSpan={header.colSpan}
                  {...getDefaultThProps(table)}
                  {...(getThProps ? getThProps(table, header) : {})}
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
            <BaseTable.TableRow key={row.id} selected={row.getIsSelected()}>
              {row.getVisibleCells().map((cell) => (
                <BaseTable.TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </BaseTable.TableCell>
              ))}
            </BaseTable.TableRow>
          ))}
        </BaseTable.TableBody>
      </BaseTable.Table>
    </TableContainer>
  );
}
