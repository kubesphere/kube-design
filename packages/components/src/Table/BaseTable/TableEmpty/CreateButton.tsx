import React from 'react';
import type { ReactElement, MouseEvent } from 'react';

import { StyledButton } from './CreateButton.styles';
import { useLocales } from '../../../ConfigProvider/LocaleProvider/LocaleContext';

interface CreateButtonProps {
  enableCreate?: boolean;
  createButton?: ReactElement;
  clickCreateButtonFn?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export type { CreateButtonProps };

export function CreateButton({
  enableCreate,
  createButton,
  clickCreateButtonFn,
}: CreateButtonProps) {
  const { locales } = useLocales();
  const { Table: TableLocales } = locales;
  const { createText } = TableLocales;
  if (enableCreate === false) {
    return null;
  }
  if (createButton) {
    return createButton;
  }
  return <StyledButton onClick={clickCreateButtonFn}>{createText}</StyledButton>;
}
