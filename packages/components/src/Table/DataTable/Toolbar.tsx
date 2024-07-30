import * as React from 'react';
import classNames from 'classnames';

import { Table } from '@tanstack/react-table';
import * as BaseTable from '../BaseTable';
import { getDefaultToolbarProps } from './utils';
import { useLocales } from '../../ConfigProvider/LocaleProvider/LocaleContext';

interface ToolbarProps<T> {
  table: Table<T>;
  className?: string;
}

export function Toolbar<T>({ table, className }: ToolbarProps<T>) {
  const {
    options: {
      meta: {
        enableDefault: { toolbar: enableDefault = true } = {},
        getProps: { toolbar: getToolbarProps } = {},
      } = {},
    } = {},
  } = table;
  const { locales } = useLocales();

  const props = (getToolbarProps ? getToolbarProps(table) : {}) as BaseTable.ToolbarProps;
  const { filterProps, ...rest } = props;
  const defaultToolbarProps = enableDefault
    ? getDefaultToolbarProps(table, {
        ...props,
        settingMenuText: props?.settingMenuText || locales.Table.settingMenuText,
      })
    : ({ filterProps } as BaseTable.ToolbarProps);

  return (
    <BaseTable.Toolbar
      {...defaultToolbarProps}
      {...rest}
      className={classNames('table-toolbar', className, props.className || '')}
    />
  );
}
