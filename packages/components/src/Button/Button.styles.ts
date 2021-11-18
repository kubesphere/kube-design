import styled, { css } from 'styled-components';
import { KubedNumberSize, KubedSizes, KubedTheme } from '../theme';
import { colorToRgbValues } from '../utils/color';

interface ButtonStylesProps {
  $loading?: boolean;
  size?: KubedSizes;
  $radius?: KubedNumberSize;
  theme?: KubedTheme;
  block?: boolean;
  disabled?: boolean;
  shadow?: boolean;
  variant?: 'filled' | 'outline' | 'text' | 'link';
  $color?: string | 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

const getButtonCursor = ($loading: boolean, disabled: boolean) => {
  if (disabled) {
    return css`
      cursor: not-allowed;
      pointer-events: auto;
    `;
  }
  if ($loading) {
    return css`
      cursor: default;
      pointer-events: none;
    `;
  }
  return css`
    cursor: pointer;
    pointer-events: auto;
  `;
};

const sizes = {
  xs: css`
    font-size: 10px;
    padding: 0 14px;
  `,
  sm: css`
    font-size: 12px;
    padding: 0 20px;
  `,
  md: css`
    font-size: 14px;
    padding: 0 23px;
  `,
  lg: css`
    font-size: 16px;
    padding: 0 26px;
  `,
  xl: css`
    font-size: 18px;
    padding: 0 30px;
  `,
};

const getButtonSize = (size, block) => css`
  ${sizes[size]};
  width: ${block ? '100%' : 'auto'};
  height: ${({ theme }) => theme.layout.inputSizes[size]};
`;

const getButtonColor = (variant = 'filled', colorSchema, disabled, $loading, theme: KubedTheme) => {
  const { palette } = theme;
  if (disabled) {
    return css`
      background-color: ${palette.accents_1};
      border-color: ${palette.border};
      color: ${palette.accents_7};
      opacity: 0.7;
    `;
  }

  const styles = {
    filled: css`
      background-color: ${colorSchema.bg};
      border-color: ${colorSchema.border};
      color: ${colorSchema.color};
    `,
    outline: css`
      background-color: #fff;
      border-color: ${colorSchema.border};
      color: ${colorSchema.fg || colorSchema.bg};
    `,
    link: css`
      font-weight: 400;
      background-color: transparent;
      border-color: transparent;
      color: ${colorSchema.fg || colorSchema.bg};
      padding: 0;
    `,
    text: css`
      background-color: transparent;
      border-color: transparent;
      color: ${colorSchema.fg || colorSchema.bg};
    `,
  };

  return styles[variant];
};

const getButtonHoverColor = (
  variant = 'filled',
  colorSchema,
  disabled,
  $loading,
  shadow,
  theme: KubedTheme
) => {
  if (disabled) return null;
  if (shadow) {
    return css`
      box-shadow: none;
    `;
  }
  const { palette } = theme;
  if (variant === 'link') {
    return css`
      text-decoration: underline;
    `;
  }
  if (variant === 'text') {
    return css`
      background-color: ${palette.accents_2};
    `;
  }

  const styles = {
    filled: css`
      background-color: ${colorSchema.hoverBg};
      border-color: ${colorSchema.hoverBorder || colorSchema.hoverBg};
    `,
    outline: css`
      background-color: ${colorSchema.hoverBg};
      color: ${colorSchema.color};
    `,
    text: css`
      background-color: transparent;
      border-color: transparent;
      color: ${palette.accents_5};
    `,
  };
  return styles[variant];
};

const getShadow = (shadow, colorSchema, theme) => {
  if (shadow) {
    const { expressiveness } = theme;
    const rgb = colorToRgbValues(colorSchema.bg).join(' ');
    return expressiveness.buttonShadow(rgb);
  }
  return null;
};

const getButtonStyles = (
  theme: KubedTheme,
  color = 'default',
  variant,
  shadow,
  disabled,
  $loading
) => {
  const { palette } = theme;
  const { background, border, accents_1, accents_2, accents_7, accents_8, accents_9, primary } =
    palette;
  const colors = {
    default: {
      bg: accents_1,
      border,
      color: accents_7,
      fg: accents_7,
      hoverBg: accents_2,
      hoverBorder: border,
    },
    primary: {
      bg: palette.colors[primary][2],
      border: palette.colors[primary][2],
      color: '#fff',
      hoverBg: palette.colors[primary][3],
    },
    secondary: {
      bg: accents_8,
      border: accents_8,
      color: background,
      hoverBg: accents_9,
    },
  };

  let colorSchema;
  if (colors[color]) {
    colorSchema = colors[color];
  } else if (palette[color]) {
    colorSchema = {
      bg: palette[color],
      border: palette[color],
      color: '#fff',
      hoverBg: palette[`${color}Dark`],
    };
  } else if (palette.colors[color]) {
    const currentColor = palette.colors[color];
    colorSchema = {
      bg: currentColor[2],
      border: currentColor[2],
      color: '#fff',
      hoverBg: currentColor[3],
    };
  } else {
    colorSchema = colors.default;
  }

  return css`
    box-shadow: ${getShadow(shadow, colorSchema, theme)};
    ${getButtonColor(variant, colorSchema, disabled, $loading, theme)};

    &:hover {
      ${getButtonHoverColor(variant, colorSchema, disabled, $loading, shadow, theme)};
    }
  `;
};

export const ButtonContainer = styled('div')<ButtonStylesProps>`
  box-sizing: border-box;
  user-select: none;
  outline: none;
  position: relative;
  overflow: hidden;
  font-weight: 600;
  border: 1px solid;
  transition: all 0.3s ease-in-out;
  border-radius: ${({ $radius, theme }) => theme.layout.radius[$radius]};
  display: ${(props) => (props.block ? 'block' : 'inline-block')};
  ${({ $loading, disabled }) => getButtonCursor($loading, disabled)};
  ${({ size, block }) => getButtonSize(size, block)};
  ${({ theme, $color, variant, shadow, disabled, $loading }) =>
    getButtonStyles(theme, $color, variant, shadow, disabled, $loading)};
  ${({ $loading }) => ($loading ? 'opacity: 0.6;' : null)};
`;

export const ButtonInner = styled('div')<ButtonStylesProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ButtonLabel = styled('span')<ButtonStylesProps>`
  display: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const IconLeftSpan = styled('span')<ButtonStylesProps>`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const IconRightSpan = styled('span')<ButtonStylesProps>`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
