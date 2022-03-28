import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import forwardRef from '../utils/forwardRef';
import { KubedTheme } from '../theme';
import { colorToRgbValues, addColorAlpha } from '../utils/color';

const flicker = keyframes`
  0% {
    transform: scale(0.7);
    opacity: 0.2;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(0.7);
    opacity: 0.2;
  }
`;

const getAnimation = (motion) => {
  if (motion) {
    return css`
      ${flicker} 1.5s linear infinite
    `;
  }
  return null;
};

const getColor = (color, theme: KubedTheme) => {
  const { palette } = theme;
  if (palette[color]) {
    return palette[color];
  }
  if (palette.colors[color]) {
    return palette.colors[color][2];
  }
  return palette.accents_5;
};

const getDotColor = (color, theme) => {
  const colorHex = getColor(color, theme);
  const colorRgb = colorToRgbValues(colorHex).join(' ');
  return css`
    background-color: ${addColorAlpha(colorHex, 0.1)};
    box-shadow: 0 8px 16px 0 rgb(${colorRgb} / 36%);
  `;
};

const DotWrapper = styled('div')<StatusDotProps>`
  display: inline-flex;
  align-items: center;
`;

const Dot = styled.span<StatusDotProps>`
  position: relative;
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  ${({ color, theme }) => getDotColor(color, theme)};
  animation: ${({ motion }) => getAnimation(motion)};

  &:before {
    position: absolute;
    content: '';
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 8.3px;
    height: 8.3px;
    border-radius: 50%;
    background-color: ${({ color, theme }) => getColor(color, theme)};
  }
`;

const Label = styled.span`
  margin-left: 8px;
  color: ${({ theme }) => theme.palette.accents_8};
  font-weight: 600;
  font-family: Roboto, PingFang SC, Lantinghei SC, Helvetica Neue, Helvetica, Arial, Microsoft YaHei,
    微软雅黑, STHeitiSC-Light, simsun, 宋体, WenQuanYi Zen Hei, WenQuanYi Micro Hei, sans-serif;
`;

export interface StatusDotProps {
  /** Dot color from theme  */
  color?: string | 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';

  /** Disable animation status or not  */
  motion?: boolean;

  /** className of label  */
  labelClassName?: string;
}

export const StatusDot = forwardRef<StatusDotProps, 'div'>(
  ({ color, motion = false, labelClassName, children, ...rest }, ref) => {
    return (
      <DotWrapper ref={ref} {...rest}>
        <Dot color={color} motion={motion} />
        {children && <Label className={labelClassName}>{children}</Label>}
      </DotWrapper>
    );
  }
);

StatusDot.displayName = '@kubed/components/StatusDot';
