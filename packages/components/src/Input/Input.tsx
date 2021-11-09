import React, { useState } from 'react';
import cx from 'classnames';
import { DefaultProps, KubedNumberSize, KubedSizes } from '../theme';
import forwardRef from '../utils/forwardRef';

import {
  InputWrapper,
  PrefixWrapper,
  SuffixWrapper,
  AddonWrapper,
  InputGroup,
} from './Input.styles';

export function fixControlledValue<T>(value: T) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value;
}

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

  /** Predefined input size */
  size?: KubedSizes;
}

export const Input = forwardRef<InputProps, 'input'>(
  (
    {
      className,
      width,
      value,
      defaultValue,
      size = 'sm',
      prefix,
      suffix,
      disabled,
      readOnly,
      onChange,
      addonAfter,
      addonBefore,
      ...rest
    },
    ref
  ) => {
    const _value = typeof value === 'undefined' ? defaultValue : value;
    const [selfValue, setSelfValue] = useState<string | number | readonly string[]>(_value);
    const [focused, setFocused] = useState(false);
    const onFocus = () => {
      setFocused(true);
    };

    const onBlur = () => {
      setFocused(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled || readOnly) return;
      setSelfValue(event.target.value);
      onChange && onChange(event);
    };

    const wrapperProps = { focused, disabled, width: undefined, size };

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
            readOnly={readOnly}
            {...rest}
            value={fixControlledValue(selfValue)}
            onChange={handleChange}
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
