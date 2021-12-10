import styled from 'styled-components';
import { KubedNumberSize } from '../../theme/index';

interface SliderRootStyles {
  size?: KubedNumberSize;
}

export const sizes = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
};

export const RootWrapper = styled('div')<SliderRootStyles>`
  webkit-tap-highlight-color: transparent;
  outline: 0;
  height: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
