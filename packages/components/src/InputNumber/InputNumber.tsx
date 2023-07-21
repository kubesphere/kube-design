import React from 'react';
import RcInputNumber, { InputNumberProps as RcInputNumberProps } from 'rc-input-number';
import styled from 'styled-components';
import { ChevronUp, ChevronDown } from '@kubed/icons';
import { DefaultProps } from '../theme';
import forwardRef from '../utils/forwardRef';
import { addColorAlpha } from '../utils/color';

const StyledInputNumber = styled(RcInputNumber)<RcInputNumberProps>`
  display: inline-flex;
  width: ${({ width }) => (width ? `${width}px` : '90px')};
  position: relative;
  border-radius: 3px;
  height: 32px;
  line-height: 1.67;
  padding: 6px 18px 6px 12px;
  border: 1px solid ${({ theme }) => theme.palette.accents_4};
  color: ${({ theme }) => theme.palette.accents_7};
  transition: all 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.palette.background};

  &:hover {
    border-color: ${({ theme }) => theme.palette.accents_5};
  }

  &.kubed-in-focused {
    border-color: ${({ theme }) => theme.palette.colors.green[2]};
    box-shadow: 0 4px 8px 0 ${({ theme }) => addColorAlpha(theme.palette.colors.green[2], 0.2)};
  }

  &.kubed-in-disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.palette.accents_1};
    border-color: ${({ theme }) => theme.palette.accents_4};

    input,
    .kubed-in-handler {
      cursor: not-allowed;
    }
  }

  .kubed-in-handler-wrap {
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 100%;
    border-radius: 0 3px 3px 0;
    border-left: 1px solid ${({ theme }) => theme.palette.accents_3};
  }

  .kubed-in-handler {
    width: 100%;
    height: 50%;
    display: block;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.palette.accents_1};
    }
  }

  .kubed-in-input-wrap {
    display: inline-flex;
  }

  .kubed-in-handler-down-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .kubed-in-input {
    width: 100%;
    height: 100%;
    font-weight: 600;
    border: none;
    outline: none;
    padding: 0;
  }
`;

type ValueType = string | number;

export interface InputNumberProps extends DefaultProps {
  /** value will show as string */
  stringMode?: boolean;

  /** Default value for uncontrolled variant only */
  defaultValue?: ValueType;

  /** Input value for controlled variant */
  value?: ValueType;

  /** width of input */
  width?: number;

  /** Minimal possible value */
  min?: ValueType;

  /** Maximum possible value */
  max?: ValueType;

  /** The step used to increment or decrement the value */
  step?: ValueType;

  /** Whether to show +- controls */
  controls?: boolean;

  /** Parse display value to validate number */
  parser?: (displayValue: string | undefined) => ValueType;

  /** Transform `value` to display value show in input */
  formatter?: (
    value: ValueType | undefined,
    info: { userTyping: boolean; input: string }
  ) => string;

  /** Syntactic sugar of `formatter`. Config precision of display. */
  precision?: number;

  /** Syntactic sugar of `formatter`. Config decimal separator of display. */
  decimalSeparator?: string;

  /** The callback triggered when the value is changed */
  onChange?: (value: ValueType) => void;

  /** The callback function that is triggered when Enter key is pressed */
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;

  /** The callback function that is triggered when click up or down buttons */
  onStep?: (value: ValueType, info: { offset: ValueType; type: 'up' | 'down' }) => void;
}

export const InputNumber = forwardRef<InputNumberProps, 'input'>(({ ...restProps }, ref) => {
  const upIcon = <ChevronUp size={14} />;
  const downIcon = <ChevronDown size={14} />;
  return (
    <StyledInputNumber
      prefixCls="kubed-in"
      upHandler={upIcon}
      downHandler={downIcon}
      {...restProps}
      ref={ref}
    />
  );
});

InputNumber.displayName = '@kubed/components/InputNumber';
