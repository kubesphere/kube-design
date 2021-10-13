import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { isUndefined } from 'lodash';
import { useId, useUncontrolled } from '@kubed/hooks';
import { DefaultProps, KubedTheme } from '../theme';
import forwardRef from '../utils/forwardRef';
import { useRadioContext } from './RadioContext';
import { RadioGroup } from './RadioGroup';

export { RadioGroup };

interface WrapProps {
  disabled: boolean;
}
const RadioWrap = styled('div')<WrapProps>`
  display: inline-flex;
  align-items: center;

  &:hover {
    .kubed-radio-control {
      background-color: ${({ theme, disabled }) => (disabled ? '' : theme.palette.accents_1)};
    }
  }

  ${({ disabled }) => (disabled ? `opacity: 0.5;` : null)};
`;

const getStateStyles = (checked, theme) => {
  if (checked) {
    return css`
      border-color: transparent;
      background-color: ${theme.palette.colors.green[2]} !important;
      box-shadow: 0 1px 2px 0 rgb(0 41 27 / 4%);

      &:before {
        position: absolute;
        top: 3px;
        left: 3px;
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 100%;
        background-color: ${theme.palette.background};
        backface-visibility: hidden;
        box-sizing: content-box;
        content: '';
        will-change: transform;
        box-shadow: 0 1px 2px 0 rgb(0 68 36 / 4%);
      }
    `;
  }

  return null;
};

interface ControlProps {
  theme?: KubedTheme;
  disabled?: boolean;
  checked?: boolean;
}

const RadioControl = styled('div')<ControlProps>`
  position: relative;
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 1px solid ${({ theme }) => theme.palette.border};
  border-radius: 100%;
  box-shadow: inset 0 1px 2px 0 rgb(2 5 8 / 8%);
  outline: none;
  background-color: ${({ theme }) => theme.palette.background};
  transition: border 0.2s ease;

  ${({ checked, theme }) => getStateStyles(checked, theme)};

  input {
    outline: 0;
    appearance: none;
    display: inline-block;
    width: 14px;
    height: 14px;
    margin: 0;
    opacity: 0;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }
`;

const LabelWrap = styled('label')<ControlProps>`
  user-select: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  padding: 0 8px;
  line-height: 1.67;
`;

export interface RadioProps extends DefaultProps {
  /** Radio label */
  label?: React.ReactNode;

  /** Radio value */
  value?: string;

  /** Id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Whether the Radio is checked */
  checked?: boolean;

  defaultChecked?: boolean;

  disabled?: boolean;
}

export const Radio = forwardRef<RadioProps, 'input'>(
  ({ id, checked, defaultChecked, onChange, disabled, label, ...restProps }, ref) => {
    const uuid = useId(id);
    const [_checked, setChecked] = useUncontrolled({
      value: checked,
      defaultValue: defaultChecked,
      finalValue: false,
      rule: (val) => !isUndefined(val),
      onChange: () => {},
    });
    const { updateState, inGroup, disabledAll, value: groupValue } = useRadioContext();
    const isDisabled = inGroup ? disabledAll || disabled : disabled;

    if (inGroup && checked) {
      // eslint-disable-next-line no-console
      console.warn('Remove props "checked" when [Radio] component is in the group.');
    }

    if (inGroup) {
      useEffect(() => {
        const isChecked = groupValue === restProps.value;
        setChecked(isChecked);
      }, [groupValue]);
    }

    const onRadioChange = (e) => {
      if (isDisabled) return;

      if (inGroup && updateState) {
        updateState(restProps.value);
      } else {
        setChecked(e.target.checked);
        onChange && onChange(e);
      }
    };

    return (
      <RadioWrap disabled={isDisabled}>
        <RadioControl className="kubed-radio-control" checked={_checked} disabled={isDisabled}>
          <input
            id={uuid}
            ref={ref}
            type="radio"
            checked={_checked}
            onChange={onRadioChange}
            disabled={isDisabled}
            {...restProps}
          />
        </RadioControl>
        {label && (
          <LabelWrap htmlFor={uuid} disabled={isDisabled}>
            {label}
          </LabelWrap>
        )}
      </RadioWrap>
    );
  }
);

Radio.displayName = '@kubed/components/Radio';
