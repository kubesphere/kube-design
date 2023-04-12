import styled from 'styled-components';
import { addColorAlpha } from '../utils/color';

export const SliderConfirmRoot = styled.div`
  width: 560px;
  position: relative;
`;

export const Track = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.accents_1};
  height: 40px;
  border-radius: 40px;
  user-select: none;
`;

interface DragHandlerProps {
  $left?: number;
}

export const DragHandlerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 28px;
  right: 28px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DragBackGround = styled.div`
  background-color: #55bc8a;
  position: absolute;
  top: 0;
  left: -28px;
  height: 100%;
  border-radius: 40px;
  opacity: 0;
`;

export const DragHandler = styled('div')<DragHandlerProps>`
  position: absolute;
  top: 4px;
  width: 48px;
  height: 32px;
  border-radius: 40px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 ${({ theme }) => addColorAlpha(theme.palette.accents_8, 0.06)};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const Tip = styled.div`
  z-index: 9;
  font-weight: 600;
  // color: ${({ theme }) => theme.palette.accents_5};
`;
