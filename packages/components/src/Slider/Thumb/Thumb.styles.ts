import styled from 'styled-components';
import { KubedNumberSize, KubedTheme } from '../../theme/index';
import { addColorAlpha } from '../../utils/color';

interface ThumbStyles {
  color?: KubedTheme;
  size?: KubedNumberSize;
  labelTransitionTimingFunction?: string;
}

export const ThumbWrapper = styled('div')<ThumbStyles>`
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  position: absolute;
  height: 16px;
  width: 16px;
  background-color: rgb(255, 255, 255);
  border: 4px solid #55bc8a;
  color: #55bc8a;
  transform: translate(-50%, -50%);
  top: 50%;
  cursor: pointer;
  border-radius: 1000px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  transition-duration: 100ms;
  transition-property: box-shadow, transform;
  transition-timing-function: cubic-bezier(0.51, 0.3, 0, 1.21);
  z-index: 2;

  &.dragging {
    box-shadow: 0 4px 8px ${({ theme }) => addColorAlpha(theme.palette.accents_8, 0.2)};
  }
`;
