import React from 'react';
import { Eye, EyeClosed } from '@kubed/icons';
import { useBooleanToggle } from '@kubed/hooks';
import { Input, InputProps } from '../Input/Input';
import forwardRef from '../utils/forwardRef';

export interface InputPasswordProps extends Omit<InputProps, 'addonAfter' | 'suffix'> {}

export const InputPassword = forwardRef<InputPasswordProps, 'input'>(({ ...restProps }, ref) => {
  const [reveal, toggle] = useBooleanToggle(false);

  // eslint-disable-next-line react/button-has-type
  const suffix = reveal ? (
    <Eye
      onMouseDown={(event) => {
        event.preventDefault();
        toggle();
      }}
      size={16}
      cursor="pointer"
    />
  ) : (
    <EyeClosed
      onMouseDown={(event) => {
        event.preventDefault();
        toggle();
      }}
      size={16}
      cursor="pointer"
    />
  );
  return <Input {...restProps} type={reveal ? 'text' : 'password'} suffix={suffix} ref={ref} />;
});

InputPassword.displayName = '@kubed/components/InputPassword';
