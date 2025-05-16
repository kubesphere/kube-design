import * as React from 'react';
import { useState, useEffect } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { InputNumber } from './InputNumber';

export default {
  title: 'Components/InputNumber',
  component: InputNumber,
  args: {
    width: 120,
    min: -10,
    max: 100,
    step: 1,
    disabled: false,
    controls: true,
    precision: 0,
    stringMode: false,
  },
  argTypes: {
    width: {
      name: 'width',
      description: 'Width of input number',
      table: {
        defaultValue: { summary: '120' },
      },
      control: { type: 'number', min: 80, max: 300 },
    },
    min: {
      name: 'min',
      description: 'Minimal possible value',
      table: {
        defaultValue: { summary: '-10' },
      },
      control: 'number',
    },
    max: {
      name: 'max',
      description: 'Maximum possible value',
      table: {
        defaultValue: { summary: '100' },
      },
      control: 'number',
    },
    step: {
      name: 'step',
      description: 'The step used to increment or decrement the value',
      table: {
        defaultValue: { summary: '1' },
      },
      control: 'number',
    },
    disabled: {
      name: 'disabled',
      description: 'Whether the input is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    controls: {
      name: 'controls',
      description: 'Whether to show +- controls',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    precision: {
      name: 'precision',
      description: 'Config precision of display',
      table: {
        defaultValue: { summary: '0' },
      },
      control: { type: 'number', min: 0, max: 5 },
    },
    stringMode: {
      name: 'stringMode',
      description: 'Value will show as string',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    placeholder: {
      name: 'placeholder',
      description: 'Placeholder text of input',
      control: 'text',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof InputNumber>;

type Story = StoryObj<typeof InputNumber>;

export const Explame: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number | undefined | null>(0);
    const [inputProps, setInputProps] = useState(args);

    // Update input properties when args change
    useEffect(() => {
      setInputProps(args);
    }, [args]);

    const handleChange = (newValue: string | number | undefined | null) => {
      setValue(newValue);
      console.log('Value changed:', newValue);
    };

    return (
      <div>
        <InputNumber {...inputProps} value={value} onChange={handleChange} />
      </div>
    );
  },
};

export const Basic = () => <InputNumber min={-2} />;

export const Disabled = () => <InputNumber disabled placeholder="Please input.." />;
