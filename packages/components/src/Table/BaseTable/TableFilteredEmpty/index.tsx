import React from 'react';
import type { EmptyProps } from '../../../index';

import { useLocales } from '../../../ConfigProvider/LocaleProvider/LocaleContext';

import type { DescriptionProps } from './Description';
import { Description } from './Description';
import { StyledEmpty } from '../TableEmpty/index.styles';

export type TableFilteredEmptyProps = EmptyProps & DescriptionProps;

export function TableFilteredEmpty({
  refetch,
  clearAndRefetch,
  ...emptyProps
}: TableFilteredEmptyProps) {
  const { locales } = useLocales();
  const { Table: TableLocales } = locales;
  const { matchEmptyText } = TableLocales;
  return (
    <StyledEmpty
      title={matchEmptyText}
      description={<Description refetch={refetch} clearAndRefetch={clearAndRefetch} />}
      {...emptyProps}
    />
  );
}
