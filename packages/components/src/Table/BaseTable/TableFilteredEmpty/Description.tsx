import React from 'react';

import { LinkButton } from './Description.styles';
import { useLocales } from '../../../ConfigProvider/LocaleProvider/LocaleContext';

interface DescriptionProps {
  clearAndRefetch?: () => void;
  refetch?: () => void;
}

export type { DescriptionProps };

export function Description({ refetch, clearAndRefetch }: DescriptionProps) {
  const isFunctionRefetch = typeof refetch === 'function';
  const isFunctionClearAndRefetch = typeof clearAndRefetch === 'function';
  const { locales } = useLocales();
  const { Table: TableLocales } = locales;
  const { matchCanText, matchOrText, refresh: refreshText, clearSearch } = TableLocales;

  if (isFunctionRefetch && isFunctionClearAndRefetch) {
    return (
      <>
        {matchCanText}
        <LinkButton onClick={refetch}>{refreshText}</LinkButton>
        {matchOrText}
        <LinkButton onClick={clearAndRefetch}>{clearSearch}</LinkButton>
      </>
    );
  }

  if (isFunctionRefetch) {
    return (
      <>
        {matchCanText}
        <LinkButton onClick={refetch}>{refreshText}</LinkButton>
      </>
    );
  }

  if (isFunctionClearAndRefetch) {
    return (
      <>
        {matchCanText}
        <LinkButton onClick={clearAndRefetch}>{clearSearch}</LinkButton>
      </>
    );
  }

  return null;
}
