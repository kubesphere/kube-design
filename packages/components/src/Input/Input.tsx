import React, { useState } from 'react';
import cx from 'clsx';
import { DefaultProps, KubedNumberSize } from '../theme';
import forwardRef from '../utils/forwardRef';

import {
  InputWrapper,
  PrefixWrapper,
  SuffixWrapper,
  AddonWrapper,
  InputGroup,
} from './Input.styles';

export interface InputProps extends DefaultProps {
  /** Left section of input */
  addonBefore?: React.ReactNode;

  /** Right section of input */
  addonAfter?: React.ReactNode;

  /** width of input */
  width?: number;

  /** Prefix element of input, like icon */
  prefix?: React.ReactNode;

  /** Suffix element of input, like icon */
  suffix?: React.ReactNode;

  /** Disabled input state */
  disabled?: boolean;

  /** Input border-radius from theme or number to set border-radius in px */
  radius?: KubedNumberSize;
}

export const Input = forwardRef<InputProps, 'div'>(
  ({ className, width, prefix, suffix, disabled, addonAfter, addonBefore, ...rest }, ref) => {
    const [focused, setFocused] = useState(false);
    const onFocus = () => {
      setFocused(true);
    };

    const onBlur = () => {
      setFocused(false);
    };

    const wrapperProps = { focused, disabled, width: undefined };

    const inputInner = (_width?: number) => {
      if (_width) {
        wrapperProps.width = _width;
      }
      return (
        <InputWrapper
          ref={ref}
          {...wrapperProps}
          className={cx(className, 'input-wrapper', {
            'input-focus': focused,
            'input-disabled': disabled,
          })}
        >
          {prefix && <PrefixWrapper>{prefix}</PrefixWrapper>}
          <input
            className="kubed-input"
            disabled={disabled}
            {...rest}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {suffix && <SuffixWrapper>{suffix}</SuffixWrapper>}
        </InputWrapper>
      );
    };

    if (addonBefore || addonAfter) {
      return (
        <InputGroup
          width={width}
          className={cx({ 'has-addon-before': addonBefore, 'has-addon-after': addonAfter })}
        >
          {addonBefore && <AddonWrapper className="addon-before">{addonBefore}</AddonWrapper>}
          {inputInner()}
          {addonAfter && <AddonWrapper className="addon-after">{addonAfter}</AddonWrapper>}
        </InputGroup>
      );
    }

    return <>{inputInner(width)}</>;
  }
);

Input.displayName = '@kubed/components/Input';
