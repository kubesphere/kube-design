import styled from 'styled-components';
import React from 'react';

export interface SliderMark {
  label?: React.ReactNode;
  value?: number;
  weight?: number;
}

export interface SliderBaseProps {
  min?: number;
  max?: number;
  marks?: Array<SliderMark>;
  unit?: string;
  range?: boolean;
  hasTooltip?: boolean;
  value?: number | string | [number, number];
  defaultValue?: number | string | [number, number];
  onChange?: (value: any) => void;
  valueFormatter?: (value: any) => void;
  style?: React.CSSProperties;
}

export const SliderWrapper = styled.div`
  display: flex;
  padding: 5px;
`;

export const InputStyle = styled.div`
  width: 100px;
  margin-left: 20px;
  margin-right: 8px;
`;

export const SliderStyle = styled.div`
  position: relative;
  flex: 1;
  height: 20px;
  padding: 5px 0;
  margin-bottom: 14px;
`;

export const SliderRail = styled.div`
  height: 10px;
  border-radius: 5px;
  background-color: #eff4f9;
`;

export const SliderTrack = styled.div`
  position: absolute;
  top: 5px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.colors.green[2]};
`;

export const SliderHandler = styled.div`
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.palette.accents_4};
  background-color: #fff;
  box-shadow: 0 4px 8px 0 ${({ theme }) => theme.palette.colors.green[2]};
  transition: box-shadow $trans-speed ease-in-out;
  cursor: pointer;
  outline: none;
  user-select: none;

  &:active {
    box-shadow: none;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 2px;
    left: 2px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.palette.colors.green[2]};
    transition: transform $trans-speed ease-in-out;
  }

  &:hover,
  &:active {
    &::after {
      transform: scale(1.35);
    }
  }
`;

export const SliderMarkStyle = styled.div`
  position: absolute;
  top: 22px;
  left: 0;
  width: 100%;
  user-select: none;

  & > span {
    position: absolute;
    top: 0;
    @include TypographyParagraph;
    user-select: none;
    white-space: nowrap;
    transform: translateX(-50%);

    &:first-of-type {
      transform: none;
    }

    &:last-of-type {
      transform: translateX(-100%);
    }
  }
`;
