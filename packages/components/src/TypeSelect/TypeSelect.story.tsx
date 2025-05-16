import * as React from 'react';
import { Meta } from '@storybook/react';
import { Cluster } from '@kubed/icons';
import { TypeSelect } from './TypeSelect';
import { Explame } from './Examples/Explame';
import { Basic } from './Examples/Basic';
import { Searchable } from './Examples/Searchable';
import { Disabled } from './Examples/Disabled';
import { DisabledOption } from './Examples/DisabledOption';
import { Control } from './Examples/Control';
import { InModal } from './Examples/InModal';

const defaultOptions = [
  {
    label: 'Default Rule',
    value: 'test1',
    description: 'Schedule the container group replicas to the node according to the default rule.',
    icon: <Cluster size={40} />,
  },
  {
    label: 'Update at the same time',
    value: 'test2',
    description: 'Schedule the container group replicas to the same node as much as possible.',
    icon: <Cluster size={40} />,
  },
  {
    label: 'Distribute scheduling',
    value: 'test3',
    description: 'Schedule the container group replicas to different nodes as much as possible.',
    icon: <Cluster size={40} />,
  },
];

export default {
  title: 'Components/TypeSelect',
  component: TypeSelect,
  args: {
    options: defaultOptions,
    disabled: false,
    searchable: false,
  },
  argTypes: {
    options: {
      name: 'options',
      description: 'Options',
      control: 'object',
    },
    disabled: {
      name: 'disabled',
      description: 'Disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    searchable: {
      name: 'searchable',
      description: 'Searchable',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    value: {
      name: 'value',
      description: 'Current selected value',
      control: 'select',
      options: ['test1', 'test2', 'test3'],
    },
    onChange: {
      name: 'onChange',
      description: 'Callback function when the selection changes',
      control: 'select',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '300px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof TypeSelect>;

export { Explame, Basic, Searchable, Disabled, DisabledOption, Control, InModal };
