import { Table } from '@tanstack/react-table';
import { isEmpty } from 'lodash';
import * as React from 'react';
import { BaseTable } from '../index';
import styled from 'styled-components';

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
  const { options, getPrePaginationRowModel } = table;
  const { meta = {} } = options;
  const { enablePagination, paginationProps, manual } = meta;

  const props = paginationProps || ({} as typeof paginationProps);
  if (!manual) {
    props.total = getPrePaginationRowModel().rows.length;
  }
  if (!enablePagination || isEmpty(props)) {
    return null;
  }

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
      getTotal: () => props.total,
      getState: () => table.getState().pagination,
    };
  }, [table, props.total]);

  return (
    <TableFooter>
      <BaseTable.BasePagination instance={instance} {...props} />
    </TableFooter>
  );
};
