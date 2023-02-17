import React from 'react';
import cx from 'classnames';

import { isNumber } from 'lodash';
import { DefaultProps, KubedNumberSize } from '../theme';

import { SkeletonElement } from './Skeleton.styles';

export interface SkeletonProps extends DefaultProps {
  /** Should skeleton overlay be displayed */
  visible?: boolean;

  /** Skeleton height */
  height?: number | string;

  /** Skeleton width */
  width?: number | string;

  /** If Skeleton is a circle, it's width and border-radius will be equal to height */
  circle?: boolean;

  /** Radius from theme.radius or number to set border-radius in px */
  radius?: KubedNumberSize;

  /** Whether to show the animation effect */
  animate?: boolean;
}

export const Skeleton = ({
  width = '100%',
  height = 'auto',
  animate = true,
  visible = true,
  circle,
  radius = 'md',
  className,
  ...rest
}: SkeletonProps) => {
  const $width = isNumber(width) ? `${width}px` : width;
  const $height = isNumber(height) ? `${height}px` : height;

  return (
    <SkeletonElement
      $radius={radius}
      $circle={circle}
      $animate={animate}
      $width={$width}
      $height={$height}
      {...rest}
      className={cx(className, { visible })}
    />
  );
};

Skeleton.displayName = '@kubed/components/Skeleton';
