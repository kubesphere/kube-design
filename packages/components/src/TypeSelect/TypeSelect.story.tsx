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
    label: '默认规则',
    value: 'test1',
    description: '按照默认的规则将容器组副本调度到节点。',
    icon: <Cluster size={40} />,
  },
  {
    label: '同时更新',
    value: 'test2',
    description: '尽可能将容器组副本调度到同一节点上。',
    icon: <Cluster size={40} />,
  },
  {
    label: '分散调度',
    value: 'test3',
    description: '尽可能将容器组副本调度到不同的节点上。',
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
      description: '选择变化时的回调函数',
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
