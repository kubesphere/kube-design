import {
  KubedNumberSize,
  KubedTheme,
  themeUtils
} from './../../../theme';
import { sizes } from '../SliderRoot/SliderRoot.styles';
import styled from "styled-components";
const { getSizeValue } = themeUtils;
import { addColorAlpha } from '../../../utils/color';

interface ThumbStyles {
  color?: KubedTheme;
  size?: KubedNumberSize;
  labelTransitionTimingFunction?: string;
}

export const LabelWrapper = styled('div')<ThumbStyles>`
  position: absolute;
  top:-32px;
  background-color: ${({ theme }) => theme.palette.border};
  font-size: ${({ theme }) => theme.font.fontSizeBase};
  padding: ${({theme}) => theme.layout.spacing.xs} / 2;
  border-radius: ${({theme}) => theme.layout.radius.sm};
  whiteSpace: nowrap;
`;

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
    transform:  translate(-50%, -50%) scale(1.1);
    box-shadow:  0 4px 8px ${({ theme }) => addColorAlpha(theme.palette.accents_8, 0.2)};
  }
`;

