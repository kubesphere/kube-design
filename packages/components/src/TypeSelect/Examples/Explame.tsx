import * as React from 'react';
import { StoryObj } from '@storybook/react';
import { TypeSelect } from '../TypeSelect';

type Story = StoryObj<typeof TypeSelect>;

export const Explame: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(args.value || 'test1');

    const handleChange = (val: any, option: any) => {
      setValue(val);
      if (args.onChange) {
        args.onChange(val, option);
      }
    };

    React.useEffect(() => {
      if (args.value) {
        setValue(args.value);
      }
    }, [args.value]);

    return <TypeSelect {...args} value={value} onChange={handleChange} />;
  },
};
