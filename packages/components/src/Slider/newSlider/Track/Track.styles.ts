import {KubedNumberSize, KubedTheme} from "../../../theme/types";
import styled from 'styled-components';
import { themeUtils } from '../../../theme';
const { getSizeValue } = themeUtils;

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
   height: 8px;
   width: 100%;
   background-color: #eff4f9;
   border-radius: 4px;
`;

export const BarWrapper = styled('div')<TrackStyles>`
  top: 0,
  bottom: 0,
  left: 0,
  border-radius: 4px;
  height: 8px;
  background-color: #55bc8a;
  position: absolute,
`;
