import React, { useMemo, useEffect } from 'react';
import { useUncontrolled } from '@kubed/hooks';
import { isUndefined } from 'lodash';
import { Group } from '../Group/Group';
import { RadioContext } from './RadioContext';

interface Props {
  value?: string | number;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (value) => void;
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export type RadioGroupProps = Props & NativeAttrs;

export const RadioGroup: React.FC<React.PropsWithChildren<RadioGroupProps>> = ({
  onChange,
  disabled,
  value,
  defaultValue,
  children,
}: RadioGroupProps) => {
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: '',
    rule: (val) => !isUndefined(val),
    onChange,
  });

  const updateState = (val) => {
    if (!isUndefined(value)) return;
    setValue(val);
  };

  const providerValue = useMemo(() => {
    return {
      updateState,
      disabledAll: disabled,
      inGroup: true,
      value: _value,
    };
  }, [disabled, _value]);

  useEffect(() => {
    if (isUndefined(value)) return;
    setValue(value);
  }, [value]);

  return (
    <RadioContext.Provider value={providerValue}>
      <Group>{children}</Group>
    </RadioContext.Provider>
  );
};

RadioGroup.displayName = '@kubed/components/RadioGroup';
