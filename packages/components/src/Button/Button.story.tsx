import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Add } from '@kubed/icons';
import { Group } from '../Group/Group';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'KubeSphere',
    variant: 'filled',
    color: 'secondary',
    size: 'sm',
    radius: 'xl',
    shadow: true,
    disabled: false,
    loading: false,
    leftIcon: null,
    rightIcon: null,
    block: false,
  },
  argTypes: {
    children: {
      name: 'children',
      description: 'Button content',
      defaultValue: 'KubeSphere',
      control: { type: 'text' },
    },
    variant: {
      name: 'variant',
      description: 'Controls button appearance',
      defaultValue: 'filled',
      options: ['filled', 'outline', 'text', 'link'],
      control: { type: 'select' },
    },
    color: {
      name: 'color',
      description: 'Button color from theme',
      defaultValue: 'secondary',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error'],
      control: { type: 'select' },
    },
    size: {
      name: 'size',
      description: 'Predefined button size',
      defaultValue: 'sm',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    radius: {
      name: 'radius',
      description: 'Button border-radius from theme or number to set border-radius in px',
      defaultValue: 'xl',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    shadow: {
      name: 'shadow',
      description: 'Display shadow or not',
      defaultValue: true,
      control: { type: 'boolean' },
    },
    disabled: {
      name: 'disabled',
      description: 'Disable button or not',
      defaultValue: false,
      control: { type: 'boolean' },
    },
    loading: {
      name: 'loading',
      description: 'Display loading indicator',
      defaultValue: false,
      control: { type: 'boolean' },
    },
    leftIcon: {
      name: 'leftIcon',
      description: 'Adds icon before button label',
      defaultValue: null,
      options: ['none', 'add'],
      mapping: {
        none: null,
        add: <Add size={16} />,
      },
      control: { type: 'select' },
    },
    block: {
      name: 'block',
      description: 'Display block or inline-block',
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
  parameters: {
    component: Button,
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Explame: Story = {
  render: (args) => {
    return <Button {...args} />;
  },
};

export const Demos = () => (
  <Group spacing="xl">
    <Button variant="filled" color="secondary" shadow radius="xl">
      KubeSphere
    </Button>
    <Button variant="filled" color="default" radius="xl">
      KubeSphere
    </Button>
    <Button variant="text" radius="xl">
      KubeSphere
    </Button>
    <Button variant="filled" shadow color="secondary" radius="xl" disabled>
      KubeSphere
    </Button>
  </Group>
);

export const Colors = () => (
  <Button variant="filled" color="warning" shadow radius="xl">
    KubeSphere
  </Button>
);

export const WithIcon = () => (
  <Button variant="filled" color="default" radius="xl" leftIcon={<Add size={16} />}>
    KubeSphere
  </Button>
);

export const Size = () => (
  <Button variant="filled" color="default" radius="xl" size="md" leftIcon={<Add size={16} />}>
    KubeSphere
  </Button>
);

export const Loading = () => (
  <Group>
    <Button variant="filled" color="default" radius="xl" loading>
      KubeSphere
    </Button>
    <Button variant="filled" color="secondary" shadow radius="xl" loading>
      KubeSphere
    </Button>
    <Button variant="text" radius="xl" loading>
      KubeSphere
    </Button>
    <Button variant="filled" color="warning" radius="xl" loading>
      KubeSphere
    </Button>
    <Button variant="filled" color="error" radius="xl" loading>
      KubeSphere
    </Button>
  </Group>
);
