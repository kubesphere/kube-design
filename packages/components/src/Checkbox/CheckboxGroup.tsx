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
  unstyled?: boolean;
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export type CheckboxGroupProps = Props & NativeAttrs;

export const CheckboxGroup: React.FC<React.PropsWithChildren<CheckboxGroupProps>> = ({
  onChange,
  disabled,
  value,
  defaultValue,
  children,
  unstyled,
}: CheckboxGroupProps) => {
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: [],
    rule: (val) => !isUndefined(val),
    onChange,
  });

  const updateState = (val, checked) => {
    const removed = Array.isArray(_value) ? _value.filter((v) => v !== val) : [];
    const next = checked ? [...removed, val] : removed;
    setValue(next);
  };

  const providerValueDeps = Array.isArray(_value) ? _value.join(',') : _value;

  const providerValue = useMemo(() => {
    return {
      updateState,
      disabledAll: disabled,
      inGroup: true,
      values: _value,
    };
  }, [disabled, providerValueDeps]);

  const deps = Array.isArray(value) ? value.join(',') : value;
  useEffect(() => {
    setValue(value);
  }, [deps]);

  return (
    <CheckboxContext.Provider value={providerValue}>
      {unstyled ? children : <Group>{children}</Group>}
    </CheckboxContext.Provider>
  );
};

CheckboxGroup.displayName = '@kubed/components/CheckboxGroup';
