import * as React from 'react';
import { Meta } from '@storybook/react';
import { FilterInput } from './FilterInput';
import Explame from './Examples/Explame';
import SimpleMode from './Examples/SimpleMode';
import CustomDropdown from './Examples/CustomDropdown';

export default {
  title: 'Components/FilterInput',
  component: FilterInput,
  args: {
    placeholder: 'Search...',
    simpleMode: false,
    disabled: false,
    isMultiKeyword: false,
    initialKeyword: '',
  },
  argTypes: {
    placeholder: {
      name: 'placeholder',
      description: 'Placeholder text for the input',
      table: {
        defaultValue: { summary: 'Search...' },
      },
      control: 'text',
    },
    simpleMode: {
      name: 'simpleMode',
      description: 'Enable simple mode (no filters, just keyword search)',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    disabled: {
      name: 'disabled',
      description: 'Disable the input',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    isMultiKeyword: {
      name: 'isMultiKeyword',
      description: 'Allow multiple keywords',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    initialKeyword: {
      name: 'initialKeyword',
      description: 'Initial keyword (for simple mode)',
      table: {
        defaultValue: { summary: '' },
      },
      control: 'text',
    },
    onChange: {
      name: 'onChange',
      description: 'Callback when filter changes',
      control: 'select',
    },
    onInputChange: {
      name: 'onInputChange',
      description: 'Callback when input value changes',
      control: 'select',
    },
    onClear: {
      name: 'onClear',
      description: 'Callback when filters are cleared',
      control: 'select',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof FilterInput>;

// Export examples
export { Explame, SimpleMode, CustomDropdown };
