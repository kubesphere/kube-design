import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { StatusDot, Group, Tooltip } from '../index';

export default {
  title: 'Components/StatusDot',
  component: StatusDot,
  args: {
    color: 'success',
    motion: false,
    shadow: true,
    children: 'Status Text',
  },
  argTypes: {
    color: {
      name: 'color',
      description: 'Status point color',
      table: {
        defaultValue: { summary: 'success' },
      },
      options: ['default', 'success', 'warning', 'error'],
      control: { type: 'select' },
    },
    motion: {
      name: 'motion',
      description: 'Whether to enable animation effect',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    shadow: {
      name: 'shadow',
      description: 'Whether to show shadow effect',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    children: {
      name: 'children',
      description: 'Status point text label',
      table: {
        defaultValue: { summary: 'Status Text' },
      },
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
} as Meta<typeof StatusDot>;

type Story = StoryObj<typeof StatusDot>;

export const Explame: Story = {
  render: (args) => {
    return <StatusDot {...args} />;
  },
};

export const Basic = () => (
  <Group>
    <StatusDot color="success">Ready</StatusDot>
    <StatusDot color="warning">Warning</StatusDot>
    <Tooltip content="Warning tips">
      <StatusDot color="error" />
    </Tooltip>
  </Group>
);

export const WithoutLabel = () => (
  <Group>
    <StatusDot />
    <StatusDot color="warning" />
    <StatusDot color="success" />
    <StatusDot color="error" />
  </Group>
);

export const Motion = () => (
  <Group spacing={30}>
    <StatusDot motion />
    <StatusDot motion color="warning" />
    <StatusDot motion color="success">
      Starting
    </StatusDot>
    <StatusDot motion color="error">
      Restarting
    </StatusDot>
  </Group>
);

export const WithoutShadow = () => (
  <Group>
    <StatusDot shadow={false} />
    <StatusDot color="warning" shadow={false} />
    <StatusDot color="success" shadow={false} />
    <StatusDot color="error" shadow={false} />
  </Group>
);
