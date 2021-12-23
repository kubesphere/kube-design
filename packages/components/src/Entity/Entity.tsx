import React from 'react';
import styled, { css } from 'styled-components';

import { Field } from './Field';
import { DefaultProps, KubedTheme } from '../theme';
import forwardRef from '../utils/forwardRef';
import { addColorAlpha } from '../utils/color';

export { Field };

const getHoverStyle = (hoverable, theme: KubedTheme) => {
  const { palette } = theme;
  if (hoverable) {
    return css`
      border-color: ${palette.accents_5};
      box-shadow: 0 4px 8px 0 ${addColorAlpha(palette.accents_8, 0.2)};
    `;
  }
  return null;
};

const EntityWrapper = styled('div')<EntityProps>`
  display: flex;
  flex-direction: column;
  padding: 12px;
  background-color: ${({ theme }) => theme.palette.background};
  border: ${({ bordered, theme }) => (bordered ? `1px solid ${theme.palette.border}` : null)};
  border-radius: 4px;
  transition: all 0.3s ease-in-out;

  &:hover {
    ${({ hoverable, theme }) => getHoverStyle(hoverable, theme)};
  }
`;

const EntityContainer = styled('div')`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
`;

const EntityFooter = styled('div')`
  display: flex;
  border-radius: 4px;
  padding: 8px;
  margin-top: 12px;
  background-color: ${({ theme }) => theme.palette.accents_1};
`;

export interface EntityProps extends DefaultProps {
  /** Add effect on hover	 */
  hoverable?: boolean;

  /** Whether Entity has border	 */
  bordered?: boolean;

  /** Add effect on hover	 */
  footer?: React.ReactNode;
}

export const Entity = forwardRef<EntityProps, 'div'>(
  ({ children, footer, bordered = true, ...rest }, ref) => {
    return (
      <EntityWrapper ref={ref} bordered={bordered} {...rest}>
        <EntityContainer>{children}</EntityContainer>
        {footer && <EntityFooter>{footer}</EntityFooter>}
      </EntityWrapper>
    );
  }
);

Entity.displayName = '@kubed/components/Entity';
