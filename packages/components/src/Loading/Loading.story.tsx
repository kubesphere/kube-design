import * as React from 'react';
import { useState, useEffect } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Loading, Group } from '../index';

export default {
  title: 'Components/Loading',
  component: Loading,
  args: {
    size: 'md',
    color: 'dark',
    variant: 'circle1',
  },
  argTypes: {
    size: {
      name: 'size',
      description: 'Size of the loading indicator',
      defaultValue: 'md',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    color: {
      name: 'color',
      description: 'Color of the loading indicator',
      defaultValue: 'dark',
      options: ['dark', 'light', 'primary', 'success', 'warning', 'danger'],
      control: { type: 'select' },
    },
    variant: {
      name: 'variant',
      description: 'Style variant of the loading indicator',
      defaultValue: 'circle1',
      options: ['circle1', 'circle2'],
      control: { type: 'radio' },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Loading>;

type Story = StoryObj<typeof Loading>;

export const Explame: Story = {
  render: (args) => {
    const [loadingProps, setLoadingProps] = useState(args);
    const [background, setBackground] = useState('#ffffff');

    // Update loading properties when args change
    useEffect(() => {
      setLoadingProps(args);

      // Set appropriate background color for light variant
      if (args.color === 'light') {
        setBackground('#333333');
      } else {
        setBackground('#ffffff');
      }
    }, [args]);

    return (
      <div>
        <div
          style={{
            padding: '30px',
            backgroundColor: background,
            display: 'inline-flex',
            borderRadius: '4px',
            transition: 'background-color 0.3s',
          }}
        >
          <Loading {...loadingProps} />
        </div>
      </div>
    );
  },
};

export const Basic = () => (
  <Group>
    <Loading size="sm" />
    <Loading size="md" />
    <Loading size="lg" />
  </Group>
);

export const CircleLoadingLightColor = () => (
  <Group style={{ backgroundColor: '#000', padding: '20px' }}>
    <Loading size="sm" color="light" />
    <Loading size="md" color="light" />
    <Loading size="lg" color="light" />
  </Group>
);

export const CircleLoading2 = () => (
  <Group>
    <Loading size="xs" variant="circle2" />
    <Loading size="sm" variant="circle2" />
    <Loading size="md" variant="circle2" />
    <Loading size="lg" variant="circle2" />
    <Loading size="md" variant="circle2" color="warning" />
  </Group>
);
