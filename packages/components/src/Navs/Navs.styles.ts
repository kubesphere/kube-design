import React from 'react';
import styled, { css } from 'styled-components';
import { KubedNumberSize, KubedSizes, KubedTheme, themeUtils } from '../theme';

const { getSizeValue } = themeUtils;

export const WRAPPER_PADDING = 2;

const sizes = {
  xs: {
    fontSize: '10px',
    height: '26px',
  },
  sm: {
    fontSize: '12px',
    height: '28px',
  },
  md: {
    fontSize: '14px',
    height: '36px',
  },
  lg: {
    fontSize: '16px',
    height: '48px',
  },
  xl: {
    fontSize: '18px',
    height: '56px',
  },
};

const getColor = (color, theme: KubedTheme) => {
  const { palette } = theme;
  if (palette[color]) {
    return palette[color];
  }
  if (palette.colors[color]) {
    return palette.colors[color][2];
  }
  return palette.accents_7;
};

const getContainerStyles = (variant, theme: KubedTheme, radius) => {
  const { palette, layout } = theme;
  if (variant === 'pills') {
    return css`
      border-radius: ${getSizeValue(radius, layout.radius)};
      background-color: ${palette.accents_0};
      border: 1px solid ${palette.border};

      .nav-item {
        font-weight: 500;
        min-width: 117px;
      }

      .nav-item__active {
        label {
          color: ${palette.background};
        }
      }
    `;
  }
  return css`
    .nav-item {
      margin: 0 15px;
      &:first-of-type {
        margin-left: 0;
      }
    }

    .nav-item__active {
      label {
        color: ${palette.accents_8};
      }
    }
  `;
};

interface NavsStyles extends React.ComponentPropsWithoutRef<any> {
  theme?: KubedTheme;
  fullWidth?: boolean;
  color?: string;
  radius?: KubedNumberSize;
  reduceMotion?: boolean;
  transitionDuration?: number;
  transitionTimingFunction?: string;
  size?: KubedSizes;
}

export const NavItemDiv = styled('div')<NavsStyles>`
  position: relative;
  box-sizing: border-box;
  flex: 1;
  z-index: 2;
  //min-width: 117px;
  //padding: 0 20px;
  border-radius: ${({ radius, theme }) => getSizeValue(radius, theme.layout.radius)};
  line-height: ${({ size }) => sizes[size].height};
  transition: ${({ reduceMotion, transitionDuration, transitionTimingFunction }) =>
    `border-left-color ${reduceMotion ? 0 : transitionDuration}ms ${
      transitionTimingFunction || 'cubic-bezier(.51,.3,0,1.21)'
    }`};

  .nav-input {
    width: 0;
    height: 0;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;

    &:focus {
      outline: none;
    }
  }
`;

export const NavItemLabel = styled('label')<NavsStyles>`
  display: block;
  cursor: pointer;
  text-overflow: ellipsis;
  text-align: center;
  color: ${({ theme }) => theme.palette.accents_7};
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;
  transition: color 150ms ease 0s;
`;

export const NavsContainer = styled('div')<NavsStyles>`
  position: relative;
  display: block;
  border-bottom: ${({ variant, theme }) =>
    variant === 'line' ? `1px solid ${theme.palette.border}` : 'none'};
`;

export const NavItemList = styled('div')<NavsStyles>`
  position: relative;
  display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
  padding: 1px;
  font-size: ${({ size }) => sizes[size].fontSize};
  align-items: center;
  ${({ variant, theme, radius }) => getContainerStyles(variant, theme, radius)};
`;

interface BgSpanStyles extends React.ComponentPropsWithoutRef<any> {}

export const PillsBg = styled('span')<BgSpanStyles>`
  border-radius: ${({ radius, theme }) => getSizeValue(radius, theme.layout.radius)};
  position: absolute;
  box-sizing: border-box;
  top: 1px;
  bottom: 1px;
  z-index: 1;
  background-color: ${({ theme, color }) => getColor(color, theme)};
  width: ${({ width }) => width}px;
  transform: translateX(${({ transform }) => transform}px);
  transition: transform 150ms ease 0s;
`;

export const LineBg = styled('span')<BgSpanStyles>`
  position: absolute;
  box-sizing: border-box;
  width: ${({ width }) => width}px;
  height: 2px;
  z-index: 1;
  background-color: ${({ theme, color }) => getColor(color, theme)};
  bottom: 0;
  margin-bottom: -1px;
  transform: translateX(${({ transform }) => transform}px);
  transition: transform 150ms ease 0s;
`;
