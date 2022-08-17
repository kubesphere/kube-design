import React from 'react';
import { DefaultProps, KubedNumberSize } from '../theme';
import forwardRef from '../utils/forwardRef';
import { Oval } from './loaders/Oval';
import { CircleLoader } from './loaders/Circle';

export interface LoadingProps extends DefaultProps {
  size?: KubedNumberSize;
  color?: string;
  variant?: 'circle1' | 'circle2';
}

export const sizes = {
  xs: '16px',
  sm: '20px',
  md: '32px',
  lg: '48px',
  xl: '52px',
};

export const Loading = forwardRef<LoadingProps, 'svg'>((props, ref) => {
  const { variant = 'circle1' } = props;

  if (variant === 'circle2') {
    return <Oval {...props} />;
  }

  return <CircleLoader {...props} ref={ref} />;
});

Loading.displayName = '@kubed/components/Loading';
