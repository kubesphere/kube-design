import React from 'react';
import styled from 'styled-components';
import { KubedNumberSize, themeUtils } from '../theme';

export const sizes = {
  xs: '570px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

const { getSizeValue } = themeUtils;

const ContainerDiv = styled('div')<ContainerProps>`
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ size, fluid }) => (fluid ? '100%' : getSizeValue(size, sizes))};
  padding: 0 ${({ padding, theme }) => getSizeValue(padding, theme.layout.spacing)};
`;

export interface ContainerProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Predefined container max-width or number for max-width in px */
  size?: KubedNumberSize;

  /** Horizontal padding defined in theme.spacing, or number value for padding in px */
  padding?: KubedNumberSize;

  /** If fluid is set to true, size prop is ignored and Container always take 100% of width */
  fluid?: boolean;
}

export function Container({ className, size, padding = 'md', fluid, ...others }: ContainerProps) {
  return <ContainerDiv className={className} size={size} padding={padding} {...others} />;
}

Container.displayName = '@kubed/core/Container';
