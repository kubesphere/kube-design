import React, { useState, useEffect } from 'react';
import { isUndefined } from 'lodash';
import cx from 'classnames';
import { ChevronDown } from '@kubed/icons';
import { useClickOutside, useMergedRef } from '@kubed/hooks';
import { DefaultProps } from '../theme';
import forwardRef from '../utils/forwardRef';
import { Field } from '../Entity/Field';
import {
  TypeSelectWrapper,
  ControlWrapper,
  DropdownWrapper,
  DropdownOption,
  DropdownArrow,
} from './TypeSelect.styles';

interface OptionProps {
  /** Field label  */
  label: React.ReactNode;

  /** Field description  */
  description?: React.ReactNode;

  value: React.ReactNode;

  /** Field avatar  */
  icon?: React.ReactNode;

  disabled?: boolean;
}

export interface TypeSelectProps extends DefaultProps {
  value?: any;
  defaultValue?: any;
  options: OptionProps[];
  disabled?: boolean;
  onChange?: (value: any, option: OptionProps) => void;
}

export const TypeSelect = forwardRef<TypeSelectProps, 'div'>(
  ({ options, value, defaultValue, disabled, className, onChange }, ref) => {
    const [expanded, setExpanded] = useState(false);

    const useClickOutsideRef = useClickOutside(() => {
      setExpanded(false);
    });
    const mergedRef = useMergedRef(ref, useClickOutsideRef);

    const isValidValue = (v) => {
      if (isUndefined(v)) {
        return false;
      }
      return options.some((option) => option.value === v);
    };

    const getInitialValue = () => {
      if (isValidValue(value)) {
        return value;
      }
      if (isValidValue(defaultValue)) {
        return defaultValue;
      }
      return options[0]?.value;
    };

    const [_value, setValue] = useState(getInitialValue());

    useEffect(() => {
      if (isValidValue(value)) {
        setValue(value);
      }
    }, [value]);

    const renderControl = () => {
      const currentOption = options.find((option) => option.value === _value);
      const { label, description, icon } = currentOption;
      return (
        <ControlWrapper
          onClick={() => {
            if (!disabled) {
              setExpanded(!expanded);
            }
          }}
          $disabled={disabled}
          $expanded={expanded}
        >
          <Field label={description} value={label} avatar={icon} />
        </ControlWrapper>
      );
    };

    const onOptionClick = (option) => {
      if (isUndefined(value)) {
        setValue(option.value);
      }
      setExpanded(false);
      onChange && onChange(option.value, option);
    };

    const renderDropdown = () => {
      const dropdownOptions = options.filter((option) => option.value !== _value);
      return dropdownOptions.map((option) => {
        const { label, description, icon, value: optionValue, disabled: disabledOption } = option;
        return (
          <DropdownOption
            // @ts-ignore
            key={optionValue}
            onClick={() => {
              if (!disabled && !disabledOption) {
                onOptionClick(option);
              }
            }}
            $disabled={disabledOption}
          >
            <Field label={description} value={label} avatar={icon} />
          </DropdownOption>
        );
      });
    };

    return (
      <TypeSelectWrapper
        ref={mergedRef}
        className={cx(className, { 'is-expand': expanded })}
        $disabled={disabled}
      >
        {renderControl()}
        {expanded && <DropdownWrapper>{renderDropdown()}</DropdownWrapper>}
        {!expanded && (
          <DropdownArrow>
            <ChevronDown />
          </DropdownArrow>
        )}
      </TypeSelectWrapper>
    );
  }
);

TypeSelect.displayName = '@kubed/components/TypeSelect';
