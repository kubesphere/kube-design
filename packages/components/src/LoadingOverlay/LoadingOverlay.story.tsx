import * as React from 'react';
import { useState, useEffect } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Card, Button, Group } from '../index';
import { LoadingOverlay } from './LoadingOverlay';

export default {
  title: 'Components/LoadingOverlay',
  component: LoadingOverlay,
  args: {
    visible: true,
    size: 'md',
    overlayOpacity: 0.7,
    overlayColor: '#eff4f9',
    zIndex: 1000,
  },
  argTypes: {
    visible: {
      name: 'visible',
      description: 'Controls the visibility of the overlay',
      defaultValue: { summary: 'true' },
      control: 'boolean',
    },
    size: {
      name: 'size',
      description: 'Size of the loading indicator',
      defaultValue: { summary: 'md' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    overlayOpacity: {
      name: 'overlayOpacity',
      description: 'Opacity of the overlay background',
      defaultValue: { summary: 0.7 },
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
    },
    overlayColor: {
      name: 'overlayColor',
      description: 'Color of the overlay background',
      defaultValue: { summary: '#eff4f9' },
      control: 'color',
    },
    zIndex: {
      name: 'zIndex',
      description: 'Z-index of the loading overlay',
      defaultValue: { summary: 1000 },
      control: { type: 'number', min: 1, max: 9999 },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof LoadingOverlay>;

type Story = StoryObj<typeof LoadingOverlay>;

export const Explame: Story = {
  render: (args) => {
    const [overlayProps, setOverlayProps] = useState(args);
    const [visible, setVisible] = useState(args.visible);

    // Update loading overlay properties when args change
    useEffect(() => {
      const newProps = { ...args };
      setOverlayProps(newProps);
      setVisible(args.visible);
    }, [args]);

    // Toggle visibility manually
    const toggleVisibility = () => {
      setVisible(!visible);
    };

    return (
      <div>
        <Group direction="column" spacing="md">
          <Button onClick={toggleVisibility}>{visible ? 'Hide Overlay' : 'Show Overlay'}</Button>

          <Card style={{ width: '500px', height: '200px', position: 'relative' }}>
            <LoadingOverlay {...overlayProps} visible={visible} />
            <div style={{ padding: '20px' }}>
              <h3>Card Content</h3>
              <p>This content will be overlaid by the loading indicator when visible.</p>
              <p>Try adjusting the controls to see how they affect the overlay.</p>
            </div>
          </Card>
        </Group>
      </div>
    );
  },
};

export const Basic = () => (
  <Card style={{ width: '500px', height: '200px' }}>
    <LoadingOverlay visible />
    Content
  </Card>
);

export const CustomOverlay = () => (
  <Card style={{ width: '500px', height: '200px' }}>
    <LoadingOverlay visible size="lg" overlayColor="#000000" overlayOpacity={0.5} />
    <div style={{ padding: '20px', color: 'white' }}>Content with dark overlay</div>
  </Card>
);
