import styled, { css } from 'styled-components';
import { KubedNumberSize, KubedTheme } from '../../theme/types';
import { getSizeValue } from '../../theme/utils';

export const sizes = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
};

interface TrackStyles {
  radius?: KubedNumberSize;
  size?: KubedNumberSize;
  color?: KubedTheme;
}

export const TrackWrapper = styled('div')<TrackStyles>`
  position: relative;
  height: ${({ size = 'md' }) => getSizeValue(size, sizes)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.colors.white[1]};
  border-radius: 4px;
`;

export const BarWrapper = styled('div')<TrackStyles>`
  position: absolute,
  top: 0,
  bottom: 0,
  left: 0,
  border-radius: ${({ radius, theme }) => theme.layout.radius[radius]};
  height: ${({ size = 'md' }) => getSizeValue(size, sizes)}px;
  background-color: ${({ theme }) => theme.palette.colors.green[1]};
`;
