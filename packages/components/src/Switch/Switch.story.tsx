import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
  args: {
    label: 'Label',
    checked: false,
    disabled: false,
    okText: 'ON',
    offText: 'OFF',
    variant: 'default',
  },
  argTypes: {
    label: {
      name: 'label',
      description: 'Switch label',
      table: {
        defaultValue: { summary: 'Label' },
      },
      control: 'text',
    },
    checked: {
      name: 'checked',
      description: 'Whether the Switch is checked',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    disabled: {
      name: 'disabled',
      description: 'Whether the Switch is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    okText: {
      name: 'okText',
      description: 'Text displayed when switch is on',
      table: {
        defaultValue: { summary: 'ON' },
      },
      control: 'text',
    },
    offText: {
      name: 'offText',
      description: 'Text displayed when switch is off',
      table: {
        defaultValue: { summary: 'OFF' },
      },
      control: 'text',
    },
    variant: {
      name: 'variant',
      description: 'Switch variant',
      table: {
        defaultValue: { summary: 'default' },
      },
      options: ['default', 'button'],
      control: { type: 'select' },
    },
    onChange: {
      name: 'onChange',
      description: 'Called when switch state changes',
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
} as Meta<typeof Switch>;

type Story = StoryObj<typeof Switch>;

export const Explame: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(args.checked || false);

    const handleChange = (isChecked: boolean) => {
      setChecked(isChecked);
      if (args.onChange) {
        args.onChange(isChecked, null);
      }
    };

    React.useEffect(() => {
      setChecked(args.checked);
    }, [args.checked]);

    return <Switch {...args} checked={checked} onChange={handleChange} />;
  },
};

export const Basic = () => <Switch label="Label" />;

export const Text = () => <Switch okText="开启" offText="关闭" />;

export const Disabled = () => <Switch disabled />;

export const ButtonMode = () => <Switch variant="button" label="Edit Yaml" />;
