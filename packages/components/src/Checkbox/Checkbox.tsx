import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { isUndefined } from 'lodash';
import { useId, useUncontrolled } from '@kubed/hooks';
import { DefaultProps, KubedTheme } from '../theme';
import forwardRef from '../utils/forwardRef';
import { useCheckbox } from './CheckboxContext';
import { CheckboxGroup } from './CheckboxGroup';

export { CheckboxGroup };

interface WrapProps {
  disabled: boolean;
}
const CheckboxWrap = styled('div')<WrapProps>`
  display: inline-flex;
  align-items: center;

  &:hover {
    .kubed-checkbox-control {
      background-color: ${({ theme, disabled }) => (disabled ? '' : theme.palette.accents_1)};
    }
  }

  ${({ disabled }) => (disabled ? `opacity: 0.5;` : null)};
`;

const getStateStyles = (checked, indeterminate, theme) => {
  if (checked) {
    return css`
      border-color: transparent;
      background-color: ${theme.palette.colors.green[2]} !important;

      &:before {
        position: absolute;
        top: 1.2px;
        left: 5px;
        display: block;
        width: 3.2px;
        height: 8.2px;
        border-width: 0 2px 2px 0;
        border-style: solid;
        border-color: #fff;
        transform: rotate(45deg);
        backface-visibility: hidden;
        box-sizing: content-box;
        content: '';
        will-change: transform;
      }
    `;
  }

  if (indeterminate) {
    return css`
      border-color: transparent;
      background-color: ${theme.palette.colors.green[2]} !important;

      &:before {
        position: absolute;
        top: 6px;
        left: 2px;
        display: block;
        width: 8px;
        height: 0;
        border: 1px solid #fff;
        box-sizing: content-box;
        content: '';
        will-change: transform;
      }
    `;
  }

  return null;
};

interface ControlProps {
  state?: string;
  theme?: KubedTheme;
  disabled?: boolean;
  indeterminate?: boolean;
  checked?: boolean;
}

const CheckboxControl = styled('div')<ControlProps>`
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid ${({ theme }) => theme.palette.border};
  border-radius: 2px;
  outline: none;
  background-color: ${({ theme }) => theme.palette.background};
  transition: border 0.2s ease;

  ${({ checked, indeterminate, theme }) => getStateStyles(checked, indeterminate, theme)};

  input {
    outline: 0;
    appearance: none;
    display: inline-block;
    width: 16px;
    height: 16px;
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

export interface CheckboxProps extends DefaultProps {
  /** Checkbox label */
  label?: React.ReactNode;

  /** Checkbox value */
  value?: string;

  /** Indeterminate state of checkbox, overwrites checked */
  indeterminate?: boolean;

  /** Id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Whether the Checkbox is checked */
  checked?: boolean;

  defaultChecked?: boolean;

  disabled?: boolean;
}

export const Checkbox = forwardRef<CheckboxProps, 'input'>(
  (
    { id, checked, defaultChecked, indeterminate, onChange, disabled, label, ...restProps },
    ref
  ) => {
    const uuid = useId(id);
    const [_checked, setChecked] = useUncontrolled({
      value: checked,
      defaultValue: defaultChecked,
      finalValue: false,
      rule: (val) => !isUndefined(val),
      onChange: () => {},
    });
    const { updateState, inGroup, disabledAll, values } = useCheckbox();
    const isDisabled = inGroup ? disabledAll || disabled : disabled;

    if (inGroup && checked) {
      // eslint-disable-next-line no-console
      console.warn('Remove props "checked" when [Checkbox] component is in the group.');
    }

    if (inGroup) {
      const deps = Array.isArray(values) ? values.join(',') : values;
      useEffect(() => {
        const isChecked = Array.isArray(values) && values.includes(restProps.value);
        setChecked(isChecked);
      }, [deps]);
    }

    const onCheckboxChange = (e) => {
      if (isDisabled) return;

      if (inGroup && updateState) {
        updateState(restProps.value, e.target.checked);
        onChange && onChange(e);
      } else {
        setChecked(e.target.checked);
        onChange && onChange(e);
      }
    };

    return (
      <CheckboxWrap disabled={isDisabled}>
        <CheckboxControl
          className="kubed-checkbox-control"
          checked={_checked}
          indeterminate={indeterminate}
          disabled={isDisabled}
        >
          <input
            id={uuid}
            ref={ref}
            type="checkbox"
            checked={indeterminate || _checked}
            onChange={onCheckboxChange}
            disabled={isDisabled}
            {...restProps}
          />
        </CheckboxControl>
        {label && (
          <LabelWrap htmlFor={uuid} disabled={isDisabled}>
            {label}
          </LabelWrap>
        )}
      </CheckboxWrap>
    );
  }
);

Checkbox.displayName = '@kubed/components/Checkbox';
