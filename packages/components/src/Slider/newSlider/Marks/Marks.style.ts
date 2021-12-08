
import {KubedNumberSize, KubedTheme} from "../../../theme/types";
import styled from "styled-components";
import { themeUtils } from '../../../theme';
const { getSizeValue } = themeUtils;

export const sizes = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
};

const fontSizes = {
  xs: '10px',
  sm: '12px',
  md: '14px',
  lg: '16px',
  xl: '18px',
};

interface MarkStylesProps {
  size?: number;
}

export const MarkWrapper = styled.div`
  position: absolute,
  top: 0,
`;

export const Mark = styled.div<MarkStylesProps>`
  box-sizing: border-box;
  border: 2px solid #a2d8bb;
  z-index: 1;
  height: 8px;
  width: 8px;
  border-radius: 1000px;
  -webkit-transform: translateX(-4px);
  -moz-transform: translateX(-4px);
  -ms-transform: translateX(-4px);
  transform: translateX(-4px);
  // background-color: #fff;

  &.mark-filled{
    box-sizing: border-box;
    border: 2px solid #a2d8bb !important;
    z-index: 1;
    height: 8px;
    width: 8px;
    border-radius: 1000px;
    -webkit-transform: translateX(-4px);
    -moz-transform: translateX(-4px);
    -ms-transform: translateX(-4px);
    transform: translateX(-4px);
    background-color: #fff;
    border-color: #228be6;
  }
`;

export const MarkLabel = styled.div<MarkStylesProps>`
  transform: translate(-50%, 0);
  fontSize: 14px;
  color: #868e96;
  marginTop: 5px,
`;
