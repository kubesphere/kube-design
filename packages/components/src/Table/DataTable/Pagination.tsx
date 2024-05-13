import { Table } from '@tanstack/react-table';
import * as React from 'react';
import styled from 'styled-components';
import { BaseTable } from '../index';

interface PaginationProps<T> {
  table: Table<T>;
}

const TableFooter = styled.div`
  position: relative;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.palette.accents_0};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  color: ${({ theme }) => theme.palette.accents_5};
`;
export type { PaginationProps };
export const Pagination = <T extends {}>({ table }: PaginationProps<T>) => {
  const { options: { meta: { getProps: { pagination: getPaginationProps } = {} } = {} } = {} } =
    table;

  const props = getPaginationProps ? getPaginationProps(table) : {};

  const instance: BaseTable.PaginationInstance = React.useMemo(() => {
    return {
      ...table,
      setPageSize: (pageSize: number) => {
        if (props?.config?.autoResetPageIndex) {
          table.setPagination({
            pageIndex: 0,
            pageSize,
          });
        } else {
          table.setPageSize(pageSize);
        }
      },
      getRowCount: () => table.getRowCount(),
      getPageCount: () => table.getPageCount(),
      getState: () => table.getState().pagination,
    };
  }, [table, props.total]);

  return (
    <TableFooter>
      <BaseTable.BasePagination instance={instance} {...props} />
    </TableFooter>
  );
};
