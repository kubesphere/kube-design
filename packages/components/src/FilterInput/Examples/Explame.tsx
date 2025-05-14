import * as React from 'react';
import { useState, useEffect } from 'react';
import { StoryObj } from '@storybook/react';
import { Magnifier } from '@kubed/icons';
import { FilterInput } from '../FilterInput';

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

type Story = StoryObj<typeof FilterInput>;

const Explame: Story = {
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
    useEffect(() => {
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

export default Explame;
