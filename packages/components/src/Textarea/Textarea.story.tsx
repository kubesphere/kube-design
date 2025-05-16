import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  args: {
    placeholder: 'please input some text',
    width: 360,
    disabled: false,
    readOnly: false,
    autosize: false,
    maxHeight: 300,
    minRows: 3,
  },
  argTypes: {
    placeholder: {
      name: 'placeholder',
      description: 'Placeholder text',
      table: {
        defaultValue: { summary: 'please input some text' },
      },
      control: 'text',
    },
    width: {
      name: 'width',
      description: 'Width of textarea in pixels',
      table: {
        defaultValue: { summary: '360' },
      },
      control: { type: 'range', min: 200, max: 600, step: 10 },
    },
    disabled: {
      name: 'disabled',
      description: 'Whether the textarea is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    readOnly: {
      name: 'readOnly',
      description: 'Whether the textarea is read-only',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    autosize: {
      name: 'autosize',
      description: 'If true textarea will grow with content until maxRows are reached',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    maxHeight: {
      name: 'maxHeight',
      description: 'Defines maxRows in autosize variant',
      table: {
        defaultValue: { summary: '300' },
      },
      control: { type: 'range', min: 100, max: 500, step: 10 },
    },
    minRows: {
      name: 'minRows',
      description: 'Defined minRows in autosize variant and rows in regular variant',
      table: {
        defaultValue: { summary: '3' },
      },
      control: { type: 'range', min: 1, max: 10, step: 1 },
    },
    onChange: {
      name: 'onChange',
      description: 'Called when textarea content changes',
      table: {
        defaultValue: { summary: 'undefined' },
      },
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
} as Meta<typeof Textarea>;

type Story = StoryObj<typeof Textarea>;

export const Explame: Story = {
  render: (args) => {
    const [value, setValue] = React.useState('');

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
      if (args.onChange) {
        args.onChange(e);
      }
    };

    return <Textarea {...args} value={value} onChange={handleChange} />;
  },
};

export const Basic = () => <Textarea placeholder="please input some text" width={360} />;

export const Disabled = () => <Textarea placeholder="please input some text" disabled />;

export const ReadOnly = () => <Textarea placeholder="please input some text" readOnly />;

export const Autosize = () => <Textarea placeholder="please input some text" autosize />;
