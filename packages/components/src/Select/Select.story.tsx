import * as React from 'react';
import { useState, useEffect } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Select } from '../index';

const { Option } = Select;

export default {
  title: 'Components/Select',
  component: Select,
  args: {
    style: { width: '250px' },
    placeholder: '请选择',
    allowClear: true,
    showArrow: true,
    disabled: false,
    loading: false,
    mode: undefined,
  },
  argTypes: {
    style: {
      name: 'style',
      description: 'Style of the component',
      table: {
        defaultValue: { summary: '{ width: "250px" }' },
      },
      control: 'object',
    },
    placeholder: {
      name: 'placeholder',
      description: 'Placeholder text',
      table: {
        defaultValue: { summary: '请选择' },
      },
      control: 'text',
    },
    allowClear: {
      name: 'allowClear',
      description: 'Show clear button',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    showArrow: {
      name: 'showArrow',
      description: 'Show dropdown arrow',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    disabled: {
      name: 'disabled',
      description: 'Whether the component is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    loading: {
      name: 'loading',
      description: 'Show loading indicator',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    mode: {
      name: 'mode',
      description: 'Select mode',
      options: [undefined, 'multiple', 'tags'],
      table: {
        defaultValue: { summary: 'undefined' },
      },
      control: { type: 'select' },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const Explame: Story = {
  render: (args) => {
    const [selectProps, setSelectProps] = useState(args);
    const [selectedValue, setSelectedValue] = useState<string | string[] | undefined>(undefined);
    const options = [
      { value: 'China', label: '按 CPU 平均负载排行' },
      { value: 'USA', label: '按内存用量排行' },
      { value: 'Russian', label: '按磁盘用量排行' },
      { value: 'France', label: '按磁盘用量排行2' },
    ];

    useEffect(() => {
      setSelectProps(args);
    }, [args]);

    const handleChange = (value: string | string[]) => {
      setSelectedValue(value);
      console.log('Selected value:', value);
    };

    return (
      <div>
        <Select {...selectProps} onChange={handleChange} value={selectedValue}>
          {options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
        <div style={{ marginTop: '20px' }}>
          <p>
            Selected value:{' '}
            {selectedValue
              ? Array.isArray(selectedValue)
                ? selectedValue.join(', ')
                : selectedValue
              : 'None'}
          </p>
        </div>
      </div>
    );
  },
};

export const Basic = () => (
  <Select style={{ width: '180px' }} placeholder="请选择" allowClear>
    <Option value="China">按 CPU 平均负载排行</Option>
    <Option value="USA">按内存用量排行</Option>
    <Option value="Russian">按磁盘用量排行</Option>
    <Option value="France">按磁盘用量排行2</Option>
  </Select>
);

export const Search = () => (
  <Select allowClear style={{ width: '120px' }} placeholder="请选择">
    <Option value="China">China</Option>
    <Option value="USA">USA</Option>
    <Option value="Russian">Russian</Option>
  </Select>
);

export const Multiple = () => (
  <Select style={{ width: '300px' }} placeholder="请选择" allowClear mode="multiple">
    <Option value="China">按 CPU 平均负载排行</Option>
    <Option value="USA">按内存用量排行</Option>
    <Option value="Russian">按磁盘用量排行</Option>
  </Select>
);

export const HasArrow = () => (
  <Select style={{ width: '300px' }} placeholder="请选择" allowClear mode="multiple" showArrow>
    <Option value="China">按 CPU 平均负载排行</Option>
    <Option value="USA">按内存用量排行</Option>
    <Option value="Russian">按磁盘用量排行</Option>
  </Select>
);

export const HasLoading = () => {
  const [loading, setLoading] = React.useState(false);
  const [options, setOptions] = React.useState<any[]>([]);

  const timerRef = React.useRef<any>();
  const handleChange = (value?: string) => {
    setLoading(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      clearTimeout(timerRef.current);
      setOptions([
        { value: 'host', label: 'host' },
        { value: 'member', label: 'member' },
        { value: 'other_member', label: 'other_member_long_long_long_long_long_long_long_label' },
        ...(value ? [{ value: `cluster_${value}`, label: `cluster_${value}` }] : []),
      ]);
      setLoading(false);
    }, 2000);
  };
  React.useEffect(() => {
    handleChange();
  }, []);

  return (
    <Select
      style={{ width: '300px' }}
      placeholder="请选择"
      prefix="集群"
      allowClear
      showArrow
      showSearch
      // mode="multiple"
      loading={loading}
      options={options}
      onSearch={handleChange}
    />
  );
};
