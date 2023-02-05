import React from 'react';
import styled, { keyframes } from 'styled-components';
import { KubedNumberSize } from '../../theme';
import forwardRef from '../../utils/forwardRef';
import { getSizeValue } from '../../theme/utils';
import { sizes } from '../Loading';
import type { LoadingProps } from '../Loading';

export interface LoaderProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: KubedNumberSize;
  color?: string;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const colorMap = {
  dark: ['#E4EBF1', '#86919C', '#324558', '#86919C'],
  light: ['#ffffff1a', '#ffffff80', '#ffffff', '#ffffff80'],
};

const StyledSvg = styled('svg')<LoadingProps>`
  animation: 1.2s ${rotate} linear infinite;
  width: ${({ size = 'md' }) => getSizeValue(size, sizes)};
  height: ${({ size = 'md' }) => getSizeValue(size, sizes)};
`;

export const CircleLoader = forwardRef<LoadingProps, 'svg'>(({ color = 'dark', ...rest }, ref) => {
  const colors = color === 'light' ? colorMap.light : colorMap.dark;
  const linearIdA = `icon-line-spinner-${color}-a`;
  const linearIdB = `icon-line-spinner-${color}-b`;
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      ref={ref}
      {...rest}
    >
      <defs>
        <linearGradient id={linearIdA} x1="4.167%" x2="4.167%" y1="0%" y2="100%">
          <stop offset="0%" stopColor={colors[0]} />
          <stop offset="100%" stopColor={colors[1]} />
        </linearGradient>
        <linearGradient id={linearIdB} x1="95.833%" x2="95.833%" y1="0%" y2="100%">
          <stop offset="0%" stopColor={colors[2]} />
          <stop offset="100%" stopColor={colors[3]} />
        </linearGradient>
      </defs>
      <g fillRule="evenodd" fill="none">
        <path d="M24,0 C37.254834,-2.4348735e-15 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 C10.745166,48 1.623249e-15,37.254834 0,24 C-1.623249e-15,10.745166 10.745166,2.4348735e-15 24,0 Z" />
        <path
          fill={`url(#${linearIdA})`}
          d="M24,48 L24,46 C36.1502645,46 46,36.1502645 46,24 C46,12.1554065 36.6396211,2.49704654 24.9125246,2.01858157 L24.9954814,0.0202708022 C37.7886803,0.542235439 48,11.078627 48,24 C48,37.254834 37.254834,48 24,48 Z"
        />
        <path
          fill={`url(#${linearIdB})`}
          d="M24,46 L24,48 C10.745166,48 0,37.254834 0,24.0000001 C0,11.0786271 10.2113197,0.542235649 23.0045134,0.0202712255 L23.0874754,2.01858177 C11.3603789,2.49704674 2,12.1554066 2,24.0000001 C2,36.1502645 11.8497355,46 24,46 Z"
        />
      </g>
    </StyledSvg>
  );
});

CircleLoader.displayName = '@kubed/components/CircleLoading';
