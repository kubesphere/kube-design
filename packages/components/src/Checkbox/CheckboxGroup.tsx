import React, { useMemo, useEffect } from 'react';
import { useUncontrolled } from '@kubed/hooks';
import { isUndefined } from 'lodash';
import { Group } from '../Group/Group';
import { CheckboxContext } from './CheckboxContext';

interface Props {
  value?: string[];
  defaultValue?: string[];
  disabled?: boolean;
  onChange?: (values: string[]) => void;
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export type CheckboxGroupProps = Props & NativeAttrs;

export const CheckboxGroup: React.FC<React.PropsWithChildren<CheckboxGroupProps>> = ({
  onChange,
  disabled,
  value,
  defaultValue,
  children,
}: CheckboxGroupProps) => {
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: [],
    rule: (val) => !isUndefined(val),
    onChange,
  });

  const updateState = (val, checked) => {
    if (!isUndefined(value)) return;
    const removed = _value.filter((v) => v !== val);
    const next = checked ? [...removed, val] : removed;
    setValue(next);
  };

  const providerValue = useMemo(() => {
    return {
      updateState,
      disabledAll: disabled,
      inGroup: true,
      values: _value,
    };
  }, [disabled, _value.join(',')]);

  if (value) {
    useEffect(() => {
      setValue(value);
    }, [value.join(',')]);
  }

  return (
    <CheckboxContext.Provider value={providerValue}>
      <Group>{children}</Group>
    </CheckboxContext.Provider>
  );
};

CheckboxGroup.displayName = '@kubed/components/CheckboxGroup';
