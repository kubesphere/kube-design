import { Eye, EyeClosed } from '@kubed/icons';
import { pick } from 'lodash';
import {
  Row,
  RowData,
  Table,
  TableMeta,
  TableOptions,
  getCoreRowModel,
} from '@tanstack/react-table';
import * as React from 'react';

import { Menu, MenuItem, MenuLabel } from '../../../index';
import type { ToolbarProps } from '../../BaseTable';
import { Suggestions } from '../../BaseTable';
import { EnableConfig } from '../Table';
import {
  InitFilterFeature,
  InitPaginationFeature,
  InitSortFeature,
  Status2StorageFeature,
} from '../features';

export function getDefaultToolbarFiltersProps<T>(
  table: Table<T>,
  config: {
    simpleMode?: boolean;
    suggestions?: Suggestions;
  }
): ToolbarProps['filterProps'] {
  const filters = (table.getState().columnFilters ?? []).reduce(
    (acc, cur) => ({
      ...acc,
      [cur.id]: cur.value,
    }),
    {}
  );
  const { simpleMode = true, suggestions = [] } = config;

  const setFilters = React.useCallback(
    (value: string | Record<string, any>) => {
      if (simpleMode) {
        const searchKey = suggestions[0]?.key;
        if (searchKey) {
          table.setColumnFilters([{ id: searchKey, value }]);
        }
      }
      table.setColumnFilters(Object.entries(value).map(([id, v]) => ({ id, value: v })));
    },
    [table, simpleMode, suggestions]
  );
  const keyword = simpleMode ? (table.getState().columnFilters ?? [])[0]?.value || '' : '';

  return {
    filters,
    onChange: setFilters,
    suggestions,
    simpleMode,
    initialKeyword: keyword as string,
  };
}

export function getDefaultToolbarProps<T>(
  table: Table<T>,
  props: Partial<ToolbarProps>
): Partial<ToolbarProps> & Pick<ToolbarProps, 'filterProps'> {
  const {
    options: {
      meta: {
        enable: { filters: enableFilters } = {},
        getProps: { filters: getFiltersProps } = {},
      } = {},
    },
  } = table;
  const { settingMenuText } = props;
  let { enableSettingMenu } = props;

  const visibilityColumns = table
    .getAllLeafColumns()
    .filter((column) => column.columnDef.enableHiding);

  if (enableSettingMenu === undefined) {
    enableSettingMenu = visibilityColumns.length > 0;
  }
  const enableBatchActions = table.getIsSomeRowsSelected();

  let filterProps;
  let defaultFilterProps;
  if (enableFilters) {
    filterProps = getFiltersProps?.(table) ?? {};
    defaultFilterProps = getDefaultToolbarFiltersProps(
      table,
      pick(filterProps, ['simpleMode', 'suggestions'])
    );
  }

  const filterPropsWithDefault = enableFilters
    ? {
        ...defaultFilterProps,
        ...filterProps,
      }
    : undefined;

  const handleDisableBatchActions = () => {
    table.resetRowSelection(true);
  };

  const settingMenu = !enableSettingMenu ? null : (
    <Menu width={160} className="menu-setting">
      <MenuLabel>{settingMenuText}</MenuLabel>
      {visibilityColumns.map((column) => {
        const { id: menuItemKey } = column;
        const isVisible = column.getIsVisible();
        const icon = isVisible ? <Eye /> : <EyeClosed />;
        return (
          <MenuItem
            key={menuItemKey}
            icon={icon}
            onClick={() => {
              column.toggleVisibility(!isVisible);
            }}
          >
            {column.id}
          </MenuItem>
        );
      })}
    </Menu>
  );

  return {
    filterProps: filterPropsWithDefault,
    enableFilters,
    enableBatchActions,
    onDisableBatchActions: handleDisableBatchActions,
    enableSettingMenu,
    settingMenu,
    settingMenuText,
    loading: table.options.loading,
  };
}

export function getDefaultThProps<T>(table: Table<T>) {
  return {
    hasBorder: table.getHeaderGroups().length > 1,
  };
}

export function getDefaultTrProps<T>(table: Table<T>, row: Row<T>) {
  return {
    selected: row.getIsSelected(),
  };
}

export function getDefaultTableOptions<TData extends RowData>(
  tableName: string,
  manual: boolean = true,
  enableConfig: EnableConfig = {}
): Partial<TableOptions<TData>> &
  Required<Pick<TableOptions<TData>, '_features' | 'meta' | 'getCoreRowModel'>> {
  const {
    enableFilters = true,
    enablePagination = true,
    enableToolbar = true,
    enableVisible = true,
    // enableParamsToUrl = true,
    enableSelection = false,
    enableMultiSelection = true,
    enableStateToStorage = true,
    enableSort = true,
  } = enableConfig;

  return {
    _features: [
      enablePagination && InitPaginationFeature,
      enableFilters && InitFilterFeature,
      // enableSelection && InitRowSelectionFeature,
      enableSort && InitSortFeature,
      enableStateToStorage && Status2StorageFeature,
    ].filter(Boolean) as TableOptions<TData>['_features'],
    enableMultiRowSelection: enableMultiSelection,
    enableRowSelection: enableSelection,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      tableName,
      manual,
      autoResetPageIndex: false,
      storageStateKeys: ['columnVisibility'],
      registerHandlers: manual
        ? [
            {
              handlerName: 'onParamsChange',
              stateKeys: ['pagination', 'columnFilters', 'sorting'],
            },
          ]
        : [],
      enable: {
        filters: enableFilters,
        pagination: enablePagination,
        toolbar: enableToolbar,
        visible: enableVisible,
      },
      enableDefault: {
        td: true,
        th: true,
        toolbar: true,
        tr: true,
      },
    } as TableMeta<TData>,
  };
}
