import React from 'react';
import { DefaultProps, KubedNumberSize, KubedSizes } from '../theme';
import forwardRef from '../utils/forwardRef';
import {
  ButtonContainer,
  ButtonInner,
  ButtonLabel,
  IconLeftSpan,
  IconRightSpan,
} from './Button.styles';
import { Loading } from '../Loading/Loading';

interface ButtonOptions {
  /** Predefined button size */
  size?: KubedSizes;

  /** Disable button or not */
  disabled?: boolean;

  /** Display shadow or not */
  shadow?: boolean;

  /** Display block or inline-block */
  block?: boolean;

  /** Display loading indicator	 */
  loading?: boolean;

  /** Adds icon before button label  */
  leftIcon?: React.ReactNode;

  /** Adds icon after button label  */
  rightIcon?: React.ReactNode;

  /** Button border-radius from theme or number to set border-radius in px */
  radius?: KubedNumberSize;

  /** Button color from theme  */
  color?: string | 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';

  /** Controls button appearance */
  variant?: 'filled' | 'outline' | 'text' | 'link';
}

export interface ButtonProps extends ButtonOptions, DefaultProps {}

export const Button = forwardRef<ButtonProps, 'button'>(
  (
    {
      className,
      color = 'default',
      disabled = false,
      shadow = false,
      size = 'sm',
      radius = 'xl',
      as = 'button',
      leftIcon,
      rightIcon,
      variant = 'filled',
      loading,
      children,
      ...others
    },
    ref
  ) => {
    const mergedRightIcon = loading ? <Loading size={16} /> : rightIcon;
    return (
      <ButtonContainer
        {...others}
        as={as}
        $size={size}
        disabled={disabled}
        $loading={loading}
        $shadow={shadow}
        $variant={variant}
        $color={color}
        $radius={radius}
        className={className}
        ref={ref}
      >
        <ButtonInner>
          {leftIcon && <IconLeftSpan>{leftIcon}</IconLeftSpan>}
          <ButtonLabel>{children}</ButtonLabel>
          {mergedRightIcon && <IconRightSpan>{mergedRightIcon}</IconRightSpan>}
        </ButtonInner>
      </ButtonContainer>
    );
  }
);

Button.displayName = '@kubed/components/Button';
