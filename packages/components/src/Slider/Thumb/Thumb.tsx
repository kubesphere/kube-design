import React, { useState, forwardRef } from 'react';
import cx from 'classnames';
import { KubedNumberSize, DefaultProps } from '../../theme/index';
import { KubedTheme } from '../../theme/types';

import { ThumbWrapper } from './Thumb.styles';
import { Tooltip } from '../../Tooltip/Tooltip';

interface ThumbProps extends DefaultProps {
  max: number;
  min: number;
  value: number;
  position: number;
  dragging: boolean;
  label: React.ReactNode;
  onMouseDown(event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>): void;
  labelAlwaysOn: boolean;
  thumbLabel: string;
  onFocus?(): void;
  onBlur?(): void;
  showLabelOnHover?: boolean;
  children?: React.ReactNode;
}

export const Thumb = forwardRef<HTMLDivElement, ThumbProps>(
  (
    {
      max,
      min,
      value,
      position,
      label,
      dragging,
      onMouseDown,
      classNames,
      labelAlwaysOn,
      thumbLabel,
      onFocus,
      onBlur,
      showLabelOnHover,
      children = null,
    }: ThumbProps,
    ref
  ) => {
    const [focused, setFocused] = useState(false);
    const isVisible = labelAlwaysOn || dragging || focused || showLabelOnHover;
    return (
      <Tooltip content={label} visible={isVisible}>
        <ThumbWrapper
          tabIndex={0}
          role="slider"
          aria-label={thumbLabel}
          aria-valuemax={max}
          aria-valuemin={min}
          aria-valuenow={value}
          ref={ref}
          className={cx(classNames, {
            dragging,
          })}
          onFocus={() => {
            setFocused(true);
            typeof onFocus === 'function' && onFocus();
          }}
          onBlur={() => {
            setFocused(false);
            typeof onBlur === 'function' && onBlur();
          }}
          onTouchStart={onMouseDown}
          onMouseDown={onMouseDown}
          onClick={(event) => event.stopPropagation()}
          style={{ left: `${position}%` }}
        >
          {children}
        </ThumbWrapper>
      </Tooltip>
    );
  }
);

Thumb.displayName = '@kubed/components/SliderThumb';
