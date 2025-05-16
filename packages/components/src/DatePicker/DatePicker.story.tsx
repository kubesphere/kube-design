import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';
import { DatePicker } from './DatePicker';

const { RangePicker } = DatePicker;

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  args: {
    picker: 'date',
    format: 'YYYY-MM-DD',
    allowClear: true,
    autoFocus: false,
    bordered: true,
    disabled: false,
    inputReadOnly: false,
    placeholder: 'Select Date',
    size: 'md',
    showToday: true,
  },
  argTypes: {
    picker: {
      name: 'picker',
      description: 'Selector Type',
      table: {
        defaultValue: { summary: 'date' },
      },
      options: ['date', 'week', 'month', 'quarter', 'year', 'time'],
      control: { type: 'select' },
    },
    format: {
      name: 'format',
      description: 'Date Format',
      table: {
        defaultValue: { summary: 'YYYY-MM-DD' },
      },
      control: { type: 'text' },
    },
    allowClear: {
      name: 'allowClear',
      description: 'Show Clear Button',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: { type: 'boolean' },
    },
    autoFocus: {
      name: 'autoFocus',
      description: 'Auto Focus',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: { type: 'boolean' },
    },
    bordered: {
      name: 'bordered',
      description: 'Has Border',
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
      description: 'Set Input Read Only',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: { type: 'boolean' },
    },
    placeholder: {
      name: 'placeholder',
      description: 'Input Placeholder',
      table: {
        defaultValue: { summary: 'Select Date' },
      },
      control: { type: 'text' },
    },
    size: {
      name: 'size',
      description: 'Input Size',
      table: {
        defaultValue: { summary: 'md' },
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    showToday: {
      name: 'showToday',
      description: 'Show Today Button',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: { type: 'boolean' },
    },
    onChange: {
      name: 'onChange',
      description: 'Date Change Callback',
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
} as Meta<typeof DatePicker>;

type Story = StoryObj<typeof DatePicker>;

export const Explame: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<any>(null);

    const handleChange = (date: any, dateString: string) => {
      setValue(date);
      if (args.onChange) {
        args.onChange(date, dateString);
      }
    };

    return <DatePicker {...args} value={value} onChange={handleChange} />;
  },
};

export const Basic = () => <DatePicker />;

export const Range = () => <RangePicker />;

export const DatePickerTypes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div>
      <h4>Date Picker</h4>
      <DatePicker />
    </div>
    <div>
      <h4>Week Picker</h4>
      <DatePicker picker="week" />
    </div>
    <div>
      <h4>Month Picker</h4>
      <DatePicker picker="month" />
    </div>
    <div>
      <h4>Quarter Picker</h4>
      <DatePicker picker="quarter" />
    </div>
    <div>
      <h4>Year Picker</h4>
      <DatePicker picker="year" />
    </div>
    <div>
      <h4>Time Picker</h4>
      <DatePicker.TimePicker />
    </div>
  </div>
);

export const RangePickerExample = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div>
      <h4>Date Range Picker</h4>
      <RangePicker />
    </div>
    <div>
      <h4>Week Range Picker</h4>
      <RangePicker picker="week" />
    </div>
    <div>
      <h4>Month Range Picker</h4>
      <RangePicker picker="month" />
    </div>
    <div>
      <h4>Year Range Picker</h4>
      <RangePicker picker="year" />
    </div>
  </div>
);

export const DisabledDate = () => {
  const disabledDate = (current: any) => {
    return current && current < dayjs().startOf('day');
  };

  return <DatePicker disabledDate={disabledDate} />;
};
