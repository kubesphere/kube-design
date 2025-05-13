import * as React from 'react';
import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Magnifier } from '@kubed/icons';
import { FilterInput } from './FilterInput';
import { DatePicker } from '../DatePicker/DatePicker';

// TODO:抽离简化
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
      defaultValue: 'Search...',
      control: 'text',
    },
    simpleMode: {
      name: 'simpleMode',
      description: 'Enable simple mode (no filters, just keyword search)',
      defaultValue: false,
      control: 'boolean',
    },
    disabled: {
      name: 'disabled',
      description: 'Disable the input',
      defaultValue: false,
      control: 'boolean',
    },
    isMultiKeyword: {
      name: 'isMultiKeyword',
      description: 'Allow multiple keywords',
      defaultValue: false,
      control: 'boolean',
    },
    initialKeyword: {
      name: 'initialKeyword',
      description: 'Initial keyword (for simple mode)',
      defaultValue: '',
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

type Story = StoryObj<typeof FilterInput>;

// Default suggestions for examples
const defaultSuggestions = [
  {
    label: 'Host',
    customLabel: (
      <>
        <Magnifier size={14} style={{ marginRight: '4px' }} />
        Host
      </>
    ),
    key: 'instance',
  },
  {
    label: 'Status',
    key: 'status',
    options: [
      { label: 'Running', key: true },
      { label: 'Stopped', key: false },
    ],
  },
  {
    label: 'OS',
    key: 'system',
    options: [
      { label: 'Debian', key: 'debian' },
      { label: 'Centos', key: 'centos' },
      { label: 'Ubuntu', key: 'ubuntu' },
      { label: 'Windows', key: 'windows' },
    ],
  },
  {
    label: 'Configuration',
    key: 'instanceType',
    options: [
      { label: '1 Core / 512 MB / 20 GB Storage', key: 0 },
      { label: '2 Cores / 1 GB / 20 GB Storage', key: 1 },
    ],
  },
  { label: 'Project', key: 'project' },
];

export const Explame: Story = {
  render: (args) => {
    const [filters, setFilters] = useState<Record<string, any>>(
      args.simpleMode ? {} : { system: 'debian', instanceType: 1 }
    );
    const [keyword, setKeyword] = useState<string>(args.initialKeyword || '');
    const [suggestions] = useState(defaultSuggestions);

    // Handle filter changes
    const handleChange = (data: any) => {
      if (args.simpleMode) {
        setKeyword(data);
      } else {
        setFilters(data);
      }

      if (args.onChange) {
        args.onChange(data);
      }
    };

    // Handle input changes
    const handleInputChange = (value: string) => {
      if (args.simpleMode) {
        setKeyword(value);
      }

      if (args.onInputChange) {
        args.onInputChange(value);
      }
    };

    // Update state when args change
    React.useEffect(() => {
      if (args.simpleMode) {
        setKeyword(args.initialKeyword || '');
      }
    }, [args.initialKeyword, args.simpleMode]);

    return (
      <div>
        <FilterInput
          {...args}
          suggestions={suggestions}
          filters={args.simpleMode ? undefined : filters}
          initialKeyword={args.simpleMode ? keyword : undefined}
          onChange={handleChange}
          onInputChange={handleInputChange}
        />

        {/* Display current state for demonstration */}
        <div style={{ marginTop: '20px', fontSize: '14px' }}>
          <h4>Current State:</h4>
          {args.simpleMode ? (
            <div>Keyword: {keyword || '(empty)'}</div>
          ) : (
            <div>
              Filters:{' '}
              {Object.keys(filters).length > 0 ? JSON.stringify(filters, null, 2) : '(no filters)'}
            </div>
          )}
        </div>
      </div>
    );
  },
};

const suggestions = [
  {
    label: 'Host',
    customLabel: (
      <>
        <Magnifier size={14} />
        Host
      </>
    ),
    key: 'instance',
  },
  {
    label: 'Status',
    key: 'status',
    options: [
      { label: 'Running', key: true },
      { label: 'Stopped', key: false },
    ],
  },
  {
    label: 'OS',
    key: 'system',
    options: [
      { label: 'Debian', key: 'debian' },
      { label: 'Centos', key: 'centos' },
      { label: 'Ubuntu', key: 'ubuntu' },
      { label: 'Windows', key: 'windows' },
    ],
  },
  {
    label: 'Configuration',
    key: 'instanceType',
    options: [
      { label: '1 Core / 512 MB / 20 GB Storage', key: 0 },
      { label: '2 Cores / 1 GB / 20 GB Storage', key: 1 },
    ],
  },
  { label: 'Project', key: 'project' },
];

export const Basic = () => {
  const [filters, setFilters] = React.useState({ system: 'debian', instanceType: 1 });
  const handleChange = (data) => {
    console.log(data);
    setFilters(data);
  };
  return (
    <FilterInput
      suggestions={suggestions}
      filters={filters}
      placeholder="Search.."
      onChange={handleChange}
    />
  );
};

export const SimpleMode = () => {
  const [initialKeyword, setKeyword] = React.useState('test');
  const handleChange = (data) => {
    console.log(data);
  };

  const changeKeyword = () => {
    setKeyword(`${Math.random()}`);
  };

  return (
    <>
      <FilterInput
        placeholder="Search.."
        onInputChange={handleChange}
        onChange={handleChange}
        simpleMode
        initialKeyword={initialKeyword}
      />
      <button type="button" onClick={changeKeyword}>
        change keyword
      </button>
    </>
  );
};

export const CustomDropdown = () => {
  const [filters, setFilters] = React.useState({ system: 'debian', instanceType: 1, year: 2022 });
  const handleChange = (data) => {
    setFilters(data);
  };

  const customSuggestions = [
    ...suggestions,
    {
      label: 'Year',
      key: 'year',
      customDropdown: (
        <DatePicker
          onChange={(value) =>
            setFilters({
              ...filters,
              year: value?.year() || 2022,
            })
          }
        />
      ),
    },
  ];

  return (
    <FilterInput
      suggestions={customSuggestions}
      filters={filters}
      placeholder="Search.."
      onChange={handleChange}
    />
  );
};
