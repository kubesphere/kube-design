import styled from 'styled-components';
import { KubedNumberSize, KubedTheme } from '../../theme/index';
import { addColorAlpha } from '../../utils/color';

interface ThumbStyles {
  color?: KubedTheme;
  size?: KubedNumberSize;
  labelTransitionTimingFunction?: string;
  disabled?: boolean;
}

export const ThumbWrapper = styled('div')<ThumbStyles>`
  box-sizing: border-box;
  position: absolute;
  height: 20px;
  width: 20px;
  background-color: #fff;
  border: 1px solid
    ${({ theme, disabled }) =>
      disabled ? theme.palette.colors.white[3] : theme.palette.colors.green[2]};
  color: #55bc8a;
  box-shadow: 0 4px 8px 0
    ${({ theme, disabled }) =>
      disabled ? theme.palette.colors.white[3] : theme.palette.colors.green[2]};
  transform: translate(-50%, -50%);
  top: 50%;
  outline: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 100ms;
  transition-property: box-shadow, transform;
  transition-timing-function: cubic-bezier(0.51, 0.3, 0, 1.21);
  z-index: 2;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 2px;
    left: 2px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.palette.colors.white[3] : theme.palette.colors.green[2]};
  }

  &.dragging {
    box-shadow: 0 4px 8px ${({ theme }) => addColorAlpha(theme.palette.accents_8, 0.2)};
  }
`;
