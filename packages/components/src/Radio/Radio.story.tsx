import * as React from 'react';
import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioGroup } from './Radio';
import { Button } from '../index';

export default {
  title: 'Components/Radio',
  component: Radio,
  args: {
    label: 'Radio Label',
    value: 'radio-value',
    disabled: false,
    checked: false,
    defaultChecked: false,
  },
  argTypes: {
    label: {
      name: 'label',
      description: 'Radio label',
      control: 'text',
      table: {
        defaultValue: { summary: 'Radio Label' },
      },
    },
    value: {
      name: 'value',
      description: 'Radio value',
      control: 'text',
      table: {
        defaultValue: { summary: 'radio-value' },
      },
    },
    disabled: {
      name: 'disabled',
      description: 'Whether the radio is disabled',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    checked: {
      name: 'checked',
      description: 'Whether the radio is checked (controlled)',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    defaultChecked: {
      name: 'defaultChecked',
      description: 'Whether the radio is checked by default',
      control: 'select',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    onChange: {
      name: 'onChange',
      description: 'Callback when radio state changes',
      control: 'select',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Radio>;

type Story = StoryObj<typeof Radio>;

export const Explame: Story = {
  render: (args) => {
    const [checkedState, setCheckedState] = React.useState<boolean | undefined>(undefined);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCheckedState(e.target.checked);
      if (args.onChange) {
        args.onChange(e);
      }
    };

    const isControlled = args.checked !== undefined;

    React.useEffect(() => {
      if (isControlled) {
        setCheckedState(args.checked);
      }
    }, [args.checked, isControlled]);

    return (
      <Radio
        {...args}
        {...(isControlled ? { checked: checkedState } : {})}
        onChange={handleChange}
      />
    );
  },
};

export const Basic = () => <Radio value="China" label="China" />;

export const DefaultValue = () => <Radio value="China" defaultChecked label="China" />;

export const GroupDemo = () => {
  const onChange = (val) => {
    console.log(val);
  };
  return (
    <>
      <RadioGroup onChange={onChange}>
        <Radio label="China" value="China" />
        <Radio label="USA" value="USA" />
      </RadioGroup>
    </>
  );
};

export const GroupControlDemo = () => {
  const [value, setValue] = useState('China');
  const toggle = () => {
    if (value === 'USA') {
      setValue('China');
    } else {
      setValue('USA');
    }
  };
  const onChange = (val) => {
    console.log(val);
  };
  return (
    <>
      <RadioGroup value={value} onChange={onChange}>
        <Radio label="China" value="China" />
        <Radio label="USA" value="USA" />
      </RadioGroup>
      <div>
        <Button onClick={toggle}>Switch</Button>
      </div>
    </>
  );
};
