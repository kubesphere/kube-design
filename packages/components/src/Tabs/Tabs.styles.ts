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

const getOutlineControlBorder = (variant, theme: KubedTheme, direction, position) => {
  const border = `1px solid ${theme.palette.border}`;
  if (direction === 'vertical') {
    if (position === 'left') {
      return css`
        border-right: ${border};

        .tab-item {
          width: 100%;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
          border-width: 1px 0 1px 1px;
        }
        .tab-group {
          margin-right: -1px;
        }
      `;
    }
    if (position === 'right') {
      return css`
        border-left: ${border};
        .tab-item {
          width: 100%;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          border-width: 1px 1px 1px 0;
        }
        .tab-group {
          margin-left: -1px;
        }
      `;
    }
  }
  return css`
    border-bottom: ${border};
    .tab-item {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      border-width: 1px 1px 0;
    }
    .tab-group {
      width: 100%;
      margin-bottom: -1px;
    }
  `;
};

const getLineControlBorder = (variant, theme: KubedTheme, direction, position) => {
  const border = `1px solid ${theme.palette.border}`;
  if (direction === 'vertical') {
    if (position === 'left') {
      return css`
        border-right: ${border};

        .tab-item {
          padding: 0 15px;
          width: 100%;
        }
        .tab-group {
          margin-right: -1px;
        }
      `;
    }
    if (position === 'right') {
      return css`
        border-left: ${border};
        .tab-item {
          padding: 0 15px;
          width: 100%;
        }
        .tab-group {
          margin-left: -1px;
        }
      `;
    }
  }
  return css`
    border-bottom: ${border};
    .tab-item {
      margin: 0 15px;
    }
    .tab-group {
      width: 100%;
    }
  `;
};

const getContainerStyles = (variant, theme: KubedTheme, radius, direction, position) => {
  const { palette, layout } = theme;
  if (variant === 'pills') {
    return css`
      padding: 1px;
      border-radius: ${getSizeValue(radius, layout.radius)};
      background-color: ${palette.accents_0};
      border: 1px solid ${palette.border};

      .tab-item {
        font-weight: 500;
        min-width: 117px;
      }

      .tab-item__active {
        label {
          color: ${palette.background};
        }
      }
    `;
  }
  if (variant === 'outline') {
    return css`
      ${getOutlineControlBorder(variant, theme, direction, position)};

      .tab-item {
        padding: 0 15px;
        background-color: transparent;
        border-style: solid;
        border-color: transparent;
        &:first-of-type {
          margin-left: 0;
        }
      }

      .tab-item__active {
        background-color: ${palette.background};
        border-color: ${palette.border};
        label {
          color: ${palette.accents_8};
        }
      }
    `;
  }

  return css`
    ${getLineControlBorder(variant, theme, direction, position)};

    .tab-item {
      &:first-of-type {
        margin-left: 0;
      }
    }

    .tab-item__active {
      label {
        color: ${palette.accents_8};
      }
    }
  `;
};

interface TabsStyles extends React.ComponentPropsWithoutRef<any> {
  theme?: KubedTheme;
  fullWidth?: boolean;
  color?: string;
  radius?: KubedNumberSize;
  reduceMotion?: boolean;
  transitionDuration?: number;
  transitionTimingFunction?: string;
  size?: KubedSizes;
  direction?: 'horizontal' | 'vertical';
  variant?: 'pills' | 'line' | 'outline';
  active?: boolean;
}

const getPanelPadding = (direction, position, tabPadding, theme) => {
  const padding = getSizeValue(tabPadding, theme.layout.spacing);
  if (direction === 'horizontal') {
    return css`
      padding-top: ${padding};
    `;
  }
  return css`
    padding-${position}: ${padding};
  `;
};

export const TabControl = styled('div')<TabsStyles>`
  position: relative;
  box-sizing: border-box;
  flex: 1;
  z-index: 2;
  line-height: ${({ size }) => sizes[size].height};
  transition: ${({ reduceMotion, transitionDuration, transitionTimingFunction }) =>
    `border-left-color ${reduceMotion ? 0 : transitionDuration}ms ${
      transitionTimingFunction || 'cubic-bezier(.51,.3,0,1.21)'
    }`};
`;

export const TabControlLabel = styled('label')<TabsStyles>`
  display: block;
  cursor: pointer;
  text-overflow: ellipsis;
  text-align: center;
  color: ${({ theme }) => theme.palette.accents_7};
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;
  transition: color 150ms ease 0s;
`;

export const TabsContainer = styled('div')<TabsStyles>`
  position: relative;
  display: ${({ direction }) => (direction === 'vertical' ? 'flex' : 'block')};
  ${({ direction, position }) =>
    direction === 'vertical' && position === 'right' ? 'flex-direction: row-reverse' : null};
`;

export const TabControlList = styled('div')<TabsStyles>`
  position: relative;
  display: ${({ fullWidth, variant }) =>
    fullWidth || variant !== 'pills' ? 'flex' : 'inline-flex'};
  font-size: ${({ size }) => sizes[size].fontSize};
  align-items: center;
  ${({ variant, theme, radius, direction, position }) =>
    getContainerStyles(variant, theme, radius, direction, position)};
`;

export const TabPanel = styled('div')<TabsStyles>`
  display: block;
  ${({ direction, position, tabPadding, theme }) =>
    getPanelPadding(direction, position, tabPadding, theme)};
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
  transition: transform 150ms ease 0s, width 100ms linear 0s;
`;

const getLineBgStyles = (width, height, direction, position, translate, translateY) => {
  if (direction === 'vertical') {
    return css`
      width: 2px;
      height: ${height}px;
      transform: translateY(${translateY}px);
      top: 0;
      ${position === 'right' ? 'left: 0;\nmargin-left: -1px;' : 'right: 0;\nmargin-right: -1px;'};
    `;
  }

  return css`
    height: 2px;
    width: ${width}px;
    transform: translateX(${translate}px);
    bottom: 0;
    margin-bottom: -1px;
  `;
};

export const LineBg = styled('span')<BgSpanStyles>`
  position: absolute;
  box-sizing: border-box;
  z-index: 1;
  background-color: ${({ theme, color }) => getColor(color, theme)};
  transition: transform 150ms ease 0s, width 100ms linear 0s;
  ${({ width, height, direction, position, transform, translateY }) =>
    getLineBgStyles(width, height, direction, position, transform, translateY)};
`;
