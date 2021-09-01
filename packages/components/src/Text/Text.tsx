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

const hSizes = {
  h1: '3rem',
  h2: '2.25rem',
  h3: '1.5rem',
  h4: '1.25rem',
  h5: '1rem',
  h6: '0.875rem',
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

const getSize = (size, variant) => {
  if (size) {
    return themeUtils.getSizeValue(size, fontSizes);
  }
  if (variant !== 'text' && variant !== 'link') {
    return hSizes[variant];
  }
  return fontSizes.sm;
};

const TextWrapper = styled('div')<TextOptions>`
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  font-size: ${({ size, variant }) => getSize(size, variant)};
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
  variant?: 'text' | 'link' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export interface TextProps extends TextOptions, DefaultProps {}

export const Text = forwardRef<TextProps, 'div'>(
  ({ as = 'div', children, weight, transform, align, style, variant = 'text', ...rest }, ref) => {
    const element = variant !== 'text' && variant !== 'link' ? variant : as;
    return (
      <TextWrapper
        ref={ref}
        variant={variant}
        as={element}
        style={{ fontWeight: weight, textTransform: transform, textAlign: align, ...style }}
        {...rest}
      >
        {children}
      </TextWrapper>
    );
  }
);

Text.displayName = '@kubed/components/Text';
