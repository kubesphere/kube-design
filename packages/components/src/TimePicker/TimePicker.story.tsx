import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TimePicker from './TimePicker';

const { RangePicker } = TimePicker;

export default {
  title: 'Components/TimePicker',
  component: TimePicker,
  args: {
    format: 'HH:mm:ss',
    allowClear: true,
    autoFocus: false,
    bordered: true,
    disabled: false,
    inputReadOnly: false,
    placeholder: '请选择时间',
    size: 'md',
    use12Hours: false,
    hourStep: 1,
    minuteStep: 1,
    secondStep: 1,
  },
  argTypes: {
    format: {
      name: 'format',
      description: 'Time format',
      table: {
        defaultValue: { summary: 'HH:mm:ss' },
      },
      control: { type: 'text' },
    },
    allowClear: {
      name: 'allowClear',
      description: 'Show clear button',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: { type: 'boolean' },
    },
    autoFocus: {
      name: 'autoFocus',
      description: 'Auto focus',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: { type: 'boolean' },
    },
    bordered: {
      name: 'bordered',
      description: 'Has border',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: { type: 'boolean' },
    },
    disabled: {
      name: 'disabled',
      description: 'Disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: { type: 'boolean' },
    },
    inputReadOnly: {
      name: 'inputReadOnly',
      description: 'Set input read only',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: { type: 'boolean' },
    },
    placeholder: {
      name: 'placeholder',
      description: 'Input placeholder',
      table: {
        defaultValue: { summary: '请选择时间' },
      },
      control: { type: 'text' },
    },
    size: {
      name: 'size',
      description: 'Input size',
      table: {
        defaultValue: { summary: 'md' },
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    use12Hours: {
      name: 'use12Hours',
      description: 'Use 12-hour format',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: { type: 'boolean' },
    },
    hourStep: {
      name: 'hourStep',
      description: 'Interval between hours',
      table: {
        defaultValue: { summary: '1' },
      },
      control: { type: 'range', min: 1, max: 12, step: 1 },
    },
    minuteStep: {
      name: 'minuteStep',
      description: 'Interval between minutes',
      table: {
        defaultValue: { summary: '1' },
      },
      control: { type: 'range', min: 1, max: 60, step: 1 },
    },
    secondStep: {
      name: 'secondStep',
      description: 'Interval between seconds',
      table: {
        defaultValue: { summary: '1' },
      },
      control: { type: 'range', min: 1, max: 60, step: 1 },
    },
    onChange: {
      name: 'onChange',
      description: 'Time change callback',
      action: 'select',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof TimePicker>;

type Story = StoryObj<typeof TimePicker>;

export const Explame: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<any>(null);

    const handleChange = (time: any, timeString: string) => {
      setValue(time);
      if (args.onChange) {
        args.onChange(time, timeString);
      }
    };

    return <TimePicker {...args} value={value} onChange={handleChange} />;
  },
};

export const Basic = () => <TimePicker />;

export const Range = () => <RangePicker />;
