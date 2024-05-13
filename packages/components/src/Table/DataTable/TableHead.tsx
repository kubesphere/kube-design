import { CaretDown, Information, SortAscending, SortDescending } from '@kubed/icons';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { Header, RowData, Table, flexRender } from '@tanstack/react-table';
import { BaseTable, Dropdown, Menu, MenuItem, MenuLabel, Popover } from '../../index';
import { getDefaultThProps } from './utils';

const TWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  .sort-indicator {
    color: #79879c;
  }

  .kubed-icon {
    margin-left: 4px;
  }

  .filter-menu {
    .menu-label {
      color: #79879c;
    }
    button {
      color: #4a5974;
    }

    .kubed-icon {
      color: #79879c;
      fill: #b6c2cd;
    }
  }
`;

const DropdownWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export interface TableHeadProps<TData extends RowData> {
  header: Header<TData, unknown>;
  table: Table<TData>;
}

function TableHead<T>({ header, table }: PropsWithChildren<TableHeadProps<T>>) {
  const {
    description,
    // filterOptions = [],
    selectType,
    sortable: _sortable,
  } = header.column.columnDef.meta ?? {};

  const {
    options: {
      manualSorting,
      meta: {
        enableDefault: { th: enableTh = true } = {},
        getProps: { th: getThProps, filters: getFiltersProps } = {},
      } = {},
    } = {},
  } = table;

  const suggestions = getFiltersProps?.(table)?.suggestions ?? [];
  const filterOptions =
    suggestions.find((suggestion) => suggestion.key === header.column.id)?.options ?? [];
  const sortable = !manualSorting ? header.column.getCanSort() : _sortable;

  const { enableMultiSort = false } = table.options;
  const handleMultiSort = (direction: 'ascending' | 'descending') => {
    const { sorting } = table.getState();
    const currentSort = sorting.findIndex((sort) => sort.id === header.column.id);
    const isSorted = currentSort > -1;

    let newSorting = [...sorting];
    if (isSorted) {
      newSorting[currentSort] = { id: header.column.id, desc: direction === 'descending' };
    } else {
      newSorting = [...sorting, { id: header.column.id, desc: direction === 'descending' }];
    }
    table.setSorting(newSorting);
  };

  const handleSort = (direction: 'ascending' | 'descending') => {
    if (enableMultiSort) {
      handleMultiSort(direction);
    } else {
      table.setSorting([
        {
          id: header.column.id,
          desc: direction === 'descending',
        },
      ]);
    }
  };

  const handleFilter = (value: any) => {
    const { id } = header.column;
    const { columnFilters } = table.getState();
    const currentFilter = columnFilters.findIndex((filter) => filter.id === id);
    const isFiltered = currentFilter > -1;
    const newFilters = [...columnFilters];
    if (isFiltered) {
      newFilters.splice(currentFilter, 1);
    }
    newFilters.push({ id, value });
    table.setColumnFilters(newFilters);
  };

  const renderDropdown = () => {
    if (sortable || filterOptions.length) {
      const content = (
        <Menu className="filter-menu">
          {sortable && (
            <>
              <MenuLabel>{'KUBE_OPERATE'}</MenuLabel>
              <MenuItem
                icon={<SortAscending />}
                onClick={() => {
                  handleSort('ascending');
                }}
              >
                {'KUBE_ASCENDING_ORDER'}
              </MenuItem>
              <MenuItem
                icon={<SortDescending />}
                onClick={() => {
                  handleSort('descending');
                }}
              >
                {'KUBE_DESCENDING_ORDER'}
              </MenuItem>
            </>
          )}
          {filterOptions.length && (
            <>
              <MenuLabel>{'KUBE_FILTER'}</MenuLabel>
              {filterOptions.map((option: any) => (
                <MenuItem
                  key={option.key}
                  onClick={() => {
                    handleFilter(option.key);
                  }}
                >
                  {option.label}
                </MenuItem>
              ))}
            </>
          )}
        </Menu>
      );

      return (
        <Dropdown content={content}>
          <DropdownWrapper>
            {flexRender(header.column.columnDef.header, header.getContext())}
            <CaretDown className="sort-indicator" />
          </DropdownWrapper>
        </Dropdown>
      );
    }

    if (header.column.id === '_selector' && selectType === 'single') return null;
    return flexRender(header.column.columnDef.header, header.getContext());
  };

  return (
    <BaseTable.TableCell
      colSpan={header.colSpan}
      {...(enableTh && getDefaultThProps(table))}
      {...(getThProps && getThProps(table, header))}
    >
      <div>
        {header.isPlaceholder ? null : (
          <>
            <TWrapper>
              {renderDropdown()}
              {description && (
                <Popover {...(description as Record<string, any>)}>
                  <Information />
                </Popover>
              )}
            </TWrapper>
          </>
        )}
      </div>
    </BaseTable.TableCell>
  );
}

export default TableHead;