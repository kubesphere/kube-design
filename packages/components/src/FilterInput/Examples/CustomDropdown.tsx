import * as React from 'react';
import { useState } from 'react';
import { Magnifier } from '@kubed/icons';
import { FilterInput } from '../FilterInput';
import { DatePicker } from '../../DatePicker/DatePicker';

// Base suggestions
const baseSuggestions = [
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

const CustomDropdown = () => {
  const [filters, setFilters] = useState({ system: 'debian', instanceType: 1, year: 2022 });

  const handleChange = (data) => {
    setFilters(data);
  };

  const customSuggestions = [
    ...baseSuggestions,
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

export default CustomDropdown;
