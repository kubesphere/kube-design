import React from 'react';
import styled from 'styled-components';
import { getSizeValue, getColor } from '../../theme/utils';
import type { LoadingProps } from '../Loading';
import { sizes } from '../Loading';

const StyledSvg = styled('svg')<LoadingProps>`
  width: ${({ size = 'md' }) => getSizeValue(size, sizes)};
  height: ${({ size = 'md' }) => getSizeValue(size, sizes)};
  stroke: ${({ color = 'primary', theme }) => getColor(color, theme)};
`;

export function Oval(props: LoadingProps) {
  return (
    <StyledSvg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(2.5 2.5)" strokeWidth="5">
          <circle strokeOpacity=".5" cx="16" cy="16" r="16" />
          <path d="M32 16c0-9.94-8.06-16-16-16">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 16 16"
              to="360 16 16"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </StyledSvg>
  );
}
