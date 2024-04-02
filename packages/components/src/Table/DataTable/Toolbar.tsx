import * as React from 'react';

import { Table } from '@tanstack/react-table';
import * as BaseTable from '../BaseTable';
import { getDefaultToolbarProps } from './utils';
import { useLocales } from '../../ConfigProvider/LocaleProvider/LocaleContext';

interface ToolbarProps<T> {
  table: Table<T>;
}

export function Toolbar<T>({ table }: ToolbarProps<T>) {
  const { options } = table;
  const { meta = {} } = options;
  const { enableToolbar, getToolbarProps } = meta;
  const { locales } = useLocales();

  if (!enableToolbar) {
    return null;
  }
  const props = (getToolbarProps ? getToolbarProps(table) : {}) as BaseTable.ToolbarProps;
  const { filterProps, ...rest } = props;
  const defaultToolbarProps = getDefaultToolbarProps(table, {
    ...props,
    settingMenuText: props?.settingMenuText || locales.Table.settingMenuText,
  });

  return <BaseTable.Toolbar {...defaultToolbarProps} {...rest} />;
}
