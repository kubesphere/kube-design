import React from 'react';
import styled from 'styled-components';
import forwardRef from '../utils/forwardRef';
import { DefaultProps, KubedNumberSize, KubedTheme, themeUtils } from '../theme';

const fontSizes = {
  xs: '10px',
  sm: '12px',
  md: '14px',
  lg: '16px',
  xl: '18px',
};

const getColor = (color, theme: KubedTheme) => {
  const { palette } = theme;
  if (palette[color]) {
    return palette[color];
  }
  if (palette.colors[color]) {
    return palette.colors[color][2];
  }
  if (color === 'secondary') {
    return palette.accents_5;
  }
  return palette.accents_7;
};

const TextWrapper = styled('div')<TextOptions>`
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  font-size: ${({ size }) => themeUtils.getSizeValue(size, fontSizes)};
  color: ${({ color, theme }) => getColor(color, theme)};
  ${({ underline }) => underline && 'text-decoration: underline;'};
  ${({ italic }) => italic && 'font-style: italic;'};
  ${({ delete: deleted }) => deleted && 'text-decoration: line-through;'};

  &:hover {
    text-decoration: ${({ variant, theme }) =>
      variant === 'link' ? `${theme.expressiveness.linkHoverStyle}` : 'none'};
  }
`;

interface TextOptions {
  /** Text itself */
  children?: React.ReactNode;

  /** Predefined font-size from theme.fontSizes */
  size?: KubedNumberSize;

  /** Text color from theme */
  color?: string;

  /** Sets font-weight css property */
  weight?: React.CSSProperties['fontWeight'];

  /** Sets text-transform css property */
  transform?: 'capitalize' | 'uppercase' | 'lowercase';

  /** Underline style */
  underline?: boolean;

  /** Italic style */
  italic?: boolean;

  /** Delete style */
  delete?: boolean;

  /** Sets text-align css property */
  align?: 'left' | 'center' | 'right';

  /** Link or text variant */
  variant?: 'text' | 'link';
}

export interface TextProps extends TextOptions, DefaultProps {}

export const Text = forwardRef<TextProps, 'div'>(
  (
    {
      as = 'div',
      children,
      size = 'sm',
      weight,
      transform,
      align,
      style,
      variant = 'text',
      ...rest
    },
    ref
  ) => {
    return (
      <TextWrapper
        ref={ref}
        variant={variant}
        size={size}
        as={as}
        style={{ fontWeight: weight, textTransform: transform, textAlign: align, ...style }}
        {...rest}
      >
        {children}
      </TextWrapper>
    );
  }
);

Text.displayName = '@kubed/components/Text';
