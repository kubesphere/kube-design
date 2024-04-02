import React from 'react';
import type { PropsWithChildren } from 'react';
import type { EmptyProps } from '../../../index';

import type { CreateButtonProps } from './CreateButton';
import { CreateButton } from './CreateButton';
import { StyledEmpty, ButtonWrapper } from './index.styles';

export type TableEmptyProps = PropsWithChildren<EmptyProps & CreateButtonProps>;

export function TableEmpty({
  createButton,
  enableCreate,
  clickCreateButtonFn,
  children,
  ...emptyProps
}: TableEmptyProps) {
  return (
    <StyledEmpty {...emptyProps}>
      {enableCreate && (
        <ButtonWrapper>
          <CreateButton
            enableCreate={enableCreate}
            createButton={createButton}
            clickCreateButtonFn={clickCreateButtonFn}
          />
        </ButtonWrapper>
      )}
      {children}
    </StyledEmpty>
  );
}
