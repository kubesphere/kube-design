import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Center } from './Center';

export default {
  title: 'Components/Center',
  component: Center,
  args: {
    children: 'Center child element in both horizontal and vertical',
    style: { background: '#eee', height: '50px', width: '100%' },
  },
  argTypes: {
    children: {
      name: 'children',
      description: 'Content that should be centered vertically and horizontally',
      defaultValue: 'Center child element in both horizontal and vertical',
      control: { type: 'text' },
    },
    style: {
      name: 'style',
      description: 'CSS styles for the center container',
      control: 'object',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Center>;

type Story = StoryObj<typeof Center>;

export const Explame: Story = {
  render: (args) => {
    return <Center {...args} />;
  },
};

export const Basic = () => (
  <Center style={{ background: '#eee', height: '50px' }}>
    Center child element in both horizontal and vertical
  </Center>
);

export const WithDifferentHeights = () => (
  <Center style={{ background: '#eee', height: '100px' }}>
    <div style={{ background: '#ddd', padding: '10px' }}>Content with different height</div>
  </Center>
);

export const WithFixedWidth = () => (
  <Center style={{ background: '#eee', height: '80px', width: '300px' }}>
    <div style={{ background: '#ddd', padding: '10px' }}>Content with fixed width container</div>
  </Center>
);
