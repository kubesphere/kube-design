import styled, { css, keyframes } from 'styled-components';
import { KubedNumberSize } from '../theme';

const fade = keyframes`
  from {
    opacity: 0.4;
  }
  50% {
    opacity: 1;
  }
  to {
    opacity: 0.4;
  }
`;

const getAnimation = (animate) => {
  if (animate) {
    return css`
      ${fade} 1.5s linear infinite
    `;
  }
  return null;
};

export interface SkeletonProps {
  /** Should skeleton overlay be displayed */
  visible?: boolean;

  /** Skeleton height */
  $height?: number | string;

  /** Skeleton width */
  $width?: number | string;

  /** If Skeleton is a circle, it's width and border-radius will be equal to height */
  $circle?: boolean;

  /** Radius from theme.radius or number to set border-radius in px */
  $radius?: KubedNumberSize;

  /** Whether to show the animation effect */
  $animate?: boolean;
}

export const SkeletonElement = styled('div')<SkeletonProps>`
  position: relative;
  webkittransform: translateZ(0);
  height: ${({ $height }) => $height};
  width: ${({ $circle, $width, $height }) => ($circle ? $height : $width)};
  border-radius: ${({ $radius, theme, $circle, $height }) =>
    $circle ? $height : theme.layout.radius[$radius]};

  &.visible {
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 10;
      background-color: ${({ theme }) =>
        theme.type === 'dark' ? theme.palette.foreground : theme.palette.background};
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 11;
      background-color: ${({ theme }) =>
        theme.type === 'dark' ? theme.palette.accents_8 : theme.palette.accents_2};
      animation: ${({ $animate }) => getAnimation($animate)};
    }
  }
`;
