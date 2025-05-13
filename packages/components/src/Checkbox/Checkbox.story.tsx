import * as React from 'react';
import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Group, Button } from '../index';
import { Checkbox } from './Checkbox';
import { CheckboxGroup } from './CheckboxGroup';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    label: 'Checkbox Label',
    value: 'checkbox-value',
    checked: false,
    defaultChecked: false,
    indeterminate: false,
    disabled: false,
  },
  argTypes: {
    label: {
      name: 'label',
      description: 'Checkbox label',
      defaultValue: 'Checkbox Label',
      control: { type: 'text' },
    },
    value: {
      name: 'value',
      description: 'Checkbox value',
      defaultValue: 'checkbox-value',
      control: { type: 'text' },
    },
    checked: {
      name: 'checked',
      description: 'Whether the Checkbox is checked (controlled)',
      defaultValue: false,
      control: { type: 'boolean' },
    },
    defaultChecked: {
      name: 'defaultChecked',
      description: 'Default checked state (uncontrolled)',
      defaultValue: false,
      control: { type: 'boolean' },
    },
    indeterminate: {
      name: 'indeterminate',
      description: 'Indeterminate state of checkbox, overwrites checked',
      defaultValue: false,
      control: { type: 'boolean' },
    },
    disabled: {
      name: 'disabled',
      description: 'Whether the Checkbox is disabled',
      defaultValue: false,
      control: { type: 'boolean' },
    },
    onChange: {
      name: 'onChange',
      description: 'Callback when checkbox state changes',
      action: 'changed',
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
} as Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const Explame: Story = {
  render: (args) => {
    const [isChecked, setIsChecked] = React.useState(args.checked || args.defaultChecked || false);

    React.useEffect(() => {
      setIsChecked(args.checked);
    }, [args.checked]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!args.checked) {
        // Only update internal state if it's uncontrolled
        setIsChecked(e.target.checked);
      }
      if (args.onChange) {
        args.onChange(e);
      }
    };

    return (
      <Checkbox
        {...args}
        checked={args.checked !== undefined ? args.checked : isChecked}
        onChange={handleChange}
      />
    );
  },
};

export const Basic = () => {
  const onChange = (e) => {
    console.log(e);
  };
  return (
    <Group>
      <Checkbox label="Test1" defaultChecked onChange={onChange} />
      <Checkbox label="Indeterminate" indeterminate />
    </Group>
  );
};

export const Disabled = () => {
  const [disabled, setDisabled] = useState(false);
  const toggle = () => {
    setDisabled(!disabled);
  };
  return (
    <>
      <div>
        <Checkbox label="Test1" disabled={disabled} />
      </div>
      <div>
        <Button onClick={toggle}>Switch</Button>
      </div>
    </>
  );
};

export const Indeterminate = () => {
  const [indeterminate, setIndeterminate] = useState(false);
  const toggle = () => {
    setIndeterminate(!indeterminate);
  };
  return (
    <>
      <div>
        <Checkbox label="Test1" indeterminate={indeterminate} />
      </div>
      <div>
        <Button onClick={toggle}>Switch</Button>
      </div>
    </>
  );
};

export const CheckedControlled = () => {
  const [checked, setChecked] = useState(false);
  const toggle = () => {
    setChecked(!checked);
  };
  return (
    <>
      <div>
        <Checkbox label="Test1" checked={checked} />
      </div>
      <div>
        <Button onClick={toggle}>Switch</Button>
      </div>
    </>
  );
};

export const GroupDemo = () => {
  const [value, setValue] = useState(['China']);
  const toggle = () => {
    if (value.length > 1) {
      setValue(['China']);
    } else {
      setValue(['USA', 'China']);
    }
  };
  const onChange = (val) => {
    console.log(val);
  };
  const onCheckChange = (e) => {
    console.log(e.target.checked);
  };
  return (
    <>
      <CheckboxGroup value={value} onChange={onChange} unstyled>
        <Checkbox label="China" value="China" onChange={onCheckChange} />
        <Checkbox label="USA" value="USA" onChange={onCheckChange} />
      </CheckboxGroup>
      <div>
        <Button onClick={toggle}>Switch</Button>
      </div>
    </>
  );
};
