import React from 'react';
import styled, { css } from 'styled-components';
import { Dropdown, DropdownProps } from '../Dropdown/Dropdown';
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

const Wrapper = styled.div`
  position: relative;

  & > div:nth-child(2) {
    width: 100%;
  }
`;

const EntityWrapper = styled('div')<EntityProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 12px;
  background-color: ${({ theme }) => theme.palette.background};
  border: ${({ bordered, theme }) => (bordered ? `1px solid ${theme.palette.border}` : null)};
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  cursor: ${({ expandable }) => (expandable ? 'pointer' : null)};

  &:hover,
  &[aria-expanded='true'] {
    ${({ hoverable, theme }) => getHoverStyle(hoverable, theme)};
  }
`;

const EntityContainer = styled('div')<{ $gap: number }>`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  ${({ $gap }) => ($gap ? `gap: ${$gap}px` : null)};
`;

const EntityFooter = styled('div')`
  display: flex;
  border-radius: 4px;
  padding: 8px;
  margin-top: 12px;
  background-color: ${({ theme }) => theme.palette.accents_1};
`;

const ExpandContainer = styled('div')`
  padding: 12px;
  z-index: 1;
  border: 1px solid ${({ theme }) => theme.palette.accents_5};
  border-top: 0;
  border-radius: 0 0 4px 4px;
`;

export interface EntityProps extends DefaultProps {
  /** Add effect on hover	 */
  hoverable?: boolean;

  /** Whether Entity can expand */
  expandable?: boolean;

  /** Render function of expand */
  expandContent?: React.ReactNode;

  /** Whether Entity has border	*/
  bordered?: boolean;

  /** Add effect on hover	 */
  footer?: React.ReactNode;

  /** Gap between children */
  gap?: number;

  /** Props of expand */
  expandProps?: Omit<DropdownProps, 'children'>;
}

export const Entity = forwardRef<EntityProps, 'div'>(
  (
    {
      children,
      footer,
      gap = 20,
      bordered = true,
      expandable = false,
      expandContent,
      expandProps,
      ...rest
    },
    ref
  ) => {
    if (expandable) {
      return (
        <Wrapper>
          <Dropdown
            content={
              <ExpandContainer className="expand-container">{expandContent}</ExpandContainer>
            }
            appendTo="parent"
            className="entity-dropdown"
            maxWidth="100%"
            offset={[0, -3]}
            placement="bottom"
            {...expandProps}
          >
            <EntityWrapper ref={ref} bordered={bordered} expandable={expandable} {...rest}>
              <EntityContainer $gap={gap} className="entity-main">
                {children}
              </EntityContainer>
              {footer && <EntityFooter className="entity-footer">{footer}</EntityFooter>}
            </EntityWrapper>
          </Dropdown>
        </Wrapper>
      );
    }

    return (
      <EntityWrapper ref={ref} bordered={bordered} expandable={expandable} {...rest}>
        <EntityContainer $gap={gap} className="entity-main">
          {children}
        </EntityContainer>
        {footer && <EntityFooter className="entity-footer">{footer}</EntityFooter>}
      </EntityWrapper>
    );
  }
);

Entity.displayName = '@kubed/components/Entity';
