import React from 'react';
import cx from 'classnames';
import forwardRef from '../utils/forwardRef';
import { DefaultProps, KubedNumberSize } from '../theme';
import { DividerWrapper, Label } from './Divider.styles';

export interface DividerProps extends DefaultProps {
  /** Line color from theme, defaults to gray in light color scheme and to dark in dark color scheme */
  color?: string;

  /** Line direction */
  direction?: 'horizontal' | 'vertical';

  /** Sets height in horizontal orientation and with in vertical */
  size?: KubedNumberSize;

  /** Adds text after line in horizontal orientation */
  label?: React.ReactNode;

  /** Label position */
  labelPosition?: 'left' | 'center' | 'right';

  /** Props spread to Text component in label */
  labelProps?: Record<string, any>;

  /** Divider borderStyle */
  variant?: 'solid' | 'dashed' | 'dotted';

  /** Top and bottom margins for horizontal variant, left and right for vertical, xs, sm, md, lg, xl for value from theme.spacing, number for margins in px */
  margins?: KubedNumberSize;

  /** Divider height, only available if direction is vertical */
  height?: number;
}

export const Divider = forwardRef<DividerProps, 'hr'>(
  (
    {
      className,
      color,
      direction = 'horizontal',
      size = 'xs',
      label,
      labelPosition = 'left',
      labelProps,
      themeOverride,
      variant = 'solid',
      margins = 0,
      height,
      ...rest
    },
    ref
  ) => {
    const vertical = direction === 'vertical';
    const horizontal = !vertical;
    const withLabel = !!label && horizontal;

    return (
      <DividerWrapper
        ref={ref}
        className={cx({ 'with-label': withLabel, vertical, horizontal }, className)}
        direction={direction}
        variant={variant}
        $margins={margins}
        $size={size}
        $height={height}
        $color={color}
        {...rest}
      >
        {!!label && horizontal && (
          <Label as="label" className={labelPosition} $variant={variant}>
            {label}
          </Label>
        )}
      </DividerWrapper>
    );
  }
);

Divider.displayName = '@kubed/components/Divider';
