import React from 'react';
import cx from 'classnames';
import { useId, useUncontrolled } from '@kubed/hooks';
import isUndefined from 'lodash/isUndefined';
import { DefaultProps } from '../theme';
import forwardRef from '../utils/forwardRef';
import {
  SwitchWrap,
  SwitchControl,
  TextWrap,
  LabelWrap,
  StyledInput,
  ButtonControl,
  StyledButton,
} from './Switch.styles';

export type SwitchChangeEventHandler = (checked: boolean, event: MouseEvent) => void;
export type SwitchClickEventHandler = SwitchChangeEventHandler;

export interface SwitchProps extends DefaultProps {
  /** Id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Switch label */
  label?: React.ReactNode;

  variant?: 'button' | 'default';

  /** Whether the Switch is checked */
  checked?: boolean;

  /** Whether the Switch is default checked */
  defaultChecked?: boolean;

  okText?: React.ReactNode;

  offText?: React.ReactNode;

  disabled?: boolean;

  onChange?: SwitchChangeEventHandler;

  onClick?: SwitchClickEventHandler;
}

export const Switch = forwardRef<SwitchProps, 'input'>(
  (
    {
      id,
      defaultChecked,
      checked,
      disabled,
      onChange,
      okText,
      offText,
      label,
      variant = 'default',
      ...restProps
    },
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

    const onSwitchChange = (e) => {
      if (disabled) return;

      const checkedState = e.target.checked;
      setChecked(checkedState);
      onChange && onChange(checkedState, e);
    };

    if (variant === 'button') {
      const color = _checked ? 'secondary' : 'default';
      const rightSection = (
        <ButtonControl checked={_checked} disabled={disabled}>
          <StyledInput id={uuid} type="checkbox" onChange={onSwitchChange} checked={_checked} />
        </ButtonControl>
      );
      return (
        <StyledButton
          radius="xl"
          variant="filled"
          forwardedAs="label"
          color={color}
          htmlFor={uuid}
          rightIcon={rightSection}
          className={cx({ 'switch-button-checked': _checked, 'switch-button': !_checked })}
        >
          {label}
        </StyledButton>
      );
    }

    return (
      <SwitchWrap ref={ref} {...restProps}>
        <SwitchControl checked={_checked} disabled={disabled}>
          <StyledInput id={uuid} type="checkbox" onChange={onSwitchChange} checked={_checked} />
          <TextWrap checked={_checked}>{_checked ? okText : offText}</TextWrap>
        </SwitchControl>
        {label && <LabelWrap htmlFor={uuid}>{label}</LabelWrap>}
      </SwitchWrap>
    );
  }
);

Switch.displayName = '@kubed/components/Switch';
