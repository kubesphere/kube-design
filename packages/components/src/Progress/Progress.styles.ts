import styled, { css } from 'styled-components';
import { KubedNumberSize, themeUtils } from '../theme';

interface BarProps {
  $striped?: boolean;
  $color?: string;
  $radius?: KubedNumberSize;
}

interface WrapperProps {
  $size?: KubedNumberSize;
  $radius?: KubedNumberSize;
}

const sizes = {
  xs: '3px',
  sm: '5px',
  md: '8px',
  lg: '12px',
  xl: '16px',
};

export const ProgressWrapper = styled('div')<WrapperProps>`
  position: relative;
  background-color: ${({ theme }) => theme.palette.accents_1};
  height: ${({ $size }) => themeUtils.getSizeValue($size, sizes)};
  border-radius: ${({ $radius, theme }) => themeUtils.getSizeValue($radius, theme.layout.radius)};
`;

const getBorderStyle = (radius, theme) => {
  const radiusSize = themeUtils.getSizeValue(radius, theme.layout.radius);
  return css`
    &:first-of-type {
      border-top-left-radius: ${radiusSize};
      border-bottom-left-radius: ${radiusSize};
    }

    &:last-of-type {
      border-top-right-radius: ${radiusSize};
      border-bottom-right-radius: ${radiusSize};
    }
  `;
};

export const ProgressBar = styled('div')<BarProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  background-color: ${({ theme, $color }) => themeUtils.getColor($color, theme)};
  background-image: ${({ $striped }) =>
    $striped
      ? 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)'
      : 'none'};

  ${({ $radius, theme }) => getBorderStyle($radius, theme)};
`;
