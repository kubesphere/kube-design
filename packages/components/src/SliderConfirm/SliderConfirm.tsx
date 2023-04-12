import React, { useState, useEffect, CSSProperties } from 'react';
import { useMove } from '@kubed/hooks';
import { DefaultProps } from '../theme';
import forwardRef from '../utils/forwardRef';

import {
  SliderConfirmRoot,
  Track,
  DragHandlerWrapper,
  DragBackGround,
  DragHandler,
  Tip,
} from './SliderConfirm.styles';

export interface SliderConfirmProps extends DefaultProps {
  tip?: string | React.ReactNode;
  dragIcon?: React.ReactNode;
  onConfirm?: () => void;
}

export const SliderConfirm = forwardRef<SliderConfirmProps, null>(
  ({ tip, dragIcon, onConfirm = () => {}, className }, ref) => {
    const [value, setValue] = useState(0);
    const { ref: moveRef, active } = useMove(({ x }) => setValue(x));

    useEffect(() => {
      if (value === 1) {
        onConfirm();
      }
    }, [value]);

    const left = active ? `calc(${value * 100}% - 24px)` : '-24px';
    const transitionDuration = active ? '0s' : '0.3s';
    const bgRight = active ? `calc(${(1 - value) * 100}% - 28px)` : 'calc(100% - 28px)';
    const opacity = active ? value : 0;
    const tipStyle: CSSProperties = active
      ? {
          color: `rgb(${121 + (255 - 121) * value},
    ${135 + (255 - 135) * value},
    ${156 + (255 - 156) * value})`,
        }
      : {
          color: '#79879c',
        };

    return (
      <SliderConfirmRoot ref={ref} className={className}>
        <Track className="slider-track" />
        <DragHandlerWrapper ref={moveRef}>
          <DragBackGround
            style={{ right: bgRight, transitionDuration, opacity }}
            className="drag-background"
          />
          <Tip style={tipStyle} className="slider-tip">
            {tip}
          </Tip>
          <DragHandler style={{ left, transitionDuration }} className="drag-handler">
            {dragIcon}
          </DragHandler>
        </DragHandlerWrapper>
      </SliderConfirmRoot>
    );
  }
);

SliderConfirm.displayName = '@kubed/components/SliderConfirm';
