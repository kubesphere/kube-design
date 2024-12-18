import { CaretDown, Information, SortAscending, SortDescending } from '@kubed/icons';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { Header, RowData, Table, flexRender } from '@tanstack/react-table';
import { BaseTable, Dropdown, Menu, MenuItem, MenuLabel, Popover } from '../../index';
import { getDefaultThProps } from './utils';
import { useLocales } from '../../ConfigProvider/LocaleProvider/LocaleContext';

const TWrapper = styled.div<{ center?: boolean }>`
  ${({ center }) => center && 'display: flex; align-items: center; justify-content: center;'}

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
  cursor: pointer;
`;

interface TableHeadProps<TData extends RowData> {
  header: Header<TData, unknown>;
  table: Table<TData>;
}

export type { TableHeadProps };

export function TableHead<T>({ header, table }: PropsWithChildren<TableHeadProps<T>>) {
  const {
    description,
    // filterOptions = [],
    searchKey: _searchKey,
    selectType,
    sortable: _sortable,
    th = {},
  } = header.column.columnDef.meta ?? {};

  const { locales } = useLocales();
  const { id } = header.column;
  const {
    options: {
      manualSorting,
      meta: {
        enableDefault: { th: enableTh = true } = {},
        getProps: { th: getThProps, filters: getFiltersProps } = {},
      } = {},
    } = {},
  } = table;

  const searchKey = _searchKey ?? id;

  const isCheckbox = selectType
    ? selectType === 'multiple'
    : table.options.enableMultiRowSelection &&
      id === table.options.meta._defaultConfig?.selectColumnId;

  const isRadio = selectType
    ? selectType === 'single'
    : table.options.enableRowSelection &&
      !table.options.enableMultiRowSelection &&
      id === table.options.meta._defaultConfig?.selectColumnId;

  const suggestions = getFiltersProps?.(table)?.suggestions ?? [];
  const filterOptions =
    suggestions.find((suggestion) => suggestion.key === searchKey)?.options ?? [];

  const sortable =
    header.column.columnDef.enableSorting ??
    (!manualSorting ? header.column.getCanSort() : _sortable);

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
    if (searchKey === id) {
      header.column.setFilterValue(value);
    } else {
      table.setColumnFilters((rows) => {
        const index = rows.findIndex((row) => row.id === searchKey);
        return [
          ...rows.slice(index, 1),
          {
            id: searchKey,
            value,
          },
        ];
      });
    }
  };

  const renderDropdown = () => {
    if (sortable || filterOptions.length) {
      const content = (
        <Menu className="filter-menu">
          {sortable && (
            <>
              <MenuLabel>{locales.Table.operate}</MenuLabel>
              <MenuItem
                icon={<SortAscending />}
                onClick={() => {
                  handleSort('ascending');
                }}
              >
                {locales.Table.ascendingOrder}
              </MenuItem>
              <MenuItem
                icon={<SortDescending />}
                onClick={() => {
                  handleSort('descending');
                }}
              >
                {locales.Table.descendingOrder}
              </MenuItem>
            </>
          )}
          {header.column.getCanFilter() && filterOptions.length && (
            <>
              <MenuLabel>{locales.Table.Filter}</MenuLabel>
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
        <Dropdown content={content} appendTo={document.body}>
          <DropdownWrapper>
            {flexRender(header.column.columnDef.header, header.getContext())}
            <CaretDown className="sort-indicator" />
          </DropdownWrapper>
        </Dropdown>
      );
    }

    if (isRadio) return null;
    return flexRender(header.column.columnDef.header, header.getContext());
  };

  return (
    <BaseTable.TableCell
      colSpan={header.colSpan}
      {...(enableTh && getDefaultThProps(table))}
      {...(getThProps && getThProps(table, header))}
      {...th}
    >
      {header.isPlaceholder ? null : (
        <TWrapper center={isCheckbox}>
          {renderDropdown()}
          {description && (
            <Popover {...(description as Record<string, any>)}>
              <Information />
            </Popover>
          )}
        </TWrapper>
      )}
    </BaseTable.TableCell>
  );
}
