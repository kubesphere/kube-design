import React, { useState, forwardRef } from 'react';
import { KubedNumberSize, DefaultProps } from '../../../theme';
import cx from 'classnames';
import { KubedTheme } from '../../../theme/types';
import { KubedTransition } from '../../../Transition';

import { ThumbWrapper } from './Thumb.styles';
import {Tooltip} from "../../../Tooltip/Tooltip";

interface ThumbProps extends DefaultProps {
  max: number;
  min: number;
  value: number;
  position: number;
  dragging: boolean;
  color: KubedTheme;
  size: KubedNumberSize;
  label: React.ReactNode;
  onMouseDown(event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>): void;
  labelTransition?: KubedTransition;
  labelTransitionDuration?: number;
  labelTransitionTimingFunction?: string;
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
      color,
      classNames,
      styles,
      size,
      labelTransition,
      labelTransitionDuration,
      labelTransitionTimingFunction,
      labelAlwaysOn,
      thumbLabel,
      onFocus,
      onBlur,
      showLabelOnHover,
      children = null,
    }: ThumbProps,
    ref
  ) => {
    // const theme = useMantineTheme();
    // const { classes, cx } = useStyles({ color, size }, classNames, 'slider');
    // const _styles = mergeStyles(classes, styles);
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
            'dragging': dragging })}
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
