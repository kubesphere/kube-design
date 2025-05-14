import * as React from 'react';
import { useState, useEffect } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Group, Button, Divider } from '../index';

export default {
  title: 'Components/Group',
  component: Group,
  args: {
    position: 'left',
    spacing: 'md',
    direction: 'row',
    grow: false,
    noWrap: false,
  },
  argTypes: {
    position: {
      name: 'position',
      description: 'Defines justify-content property',
      table: {
        defaultValue: { summary: 'left' },
      },
      options: ['left', 'center', 'right', 'apart'],
      control: { type: 'select' },
    },
    spacing: {
      name: 'spacing',
      description: 'Space between elements',
      table: {
        defaultValue: { summary: 'md' },
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    direction: {
      name: 'direction',
      description: 'Defines flex-direction property, row for horizontal, column for vertical',
      table: {
        defaultValue: { summary: 'row' },
      },
      options: ['row', 'column'],
      control: { type: 'radio' },
    },
    grow: {
      name: 'grow',
      description: 'Defines flex-grow property for each element, true -> 1, false -> 0',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    noWrap: {
      name: 'noWrap',
      description: 'Defined flex-wrap property',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Group>;

type Story = StoryObj<typeof Group>;

export const Explame: Story = {
  render: (args) => {
    const [groupProps, setGroupProps] = useState(args);
    const [buttonCount, setButtonCount] = useState(3);

    // Update group props when args change
    useEffect(() => {
      setGroupProps(args);
    }, [args]);

    // Generate buttons based on count
    const renderButtons = () => {
      return Array.from({ length: buttonCount }, (_, index) => (
        <Button key={index}>{index + 1}</Button>
      ));
    };

    return (
      <div>
        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
          <div style={{ marginRight: '10px' }}>按钮数量:</div>
          <input
            type="number"
            min="1"
            max="10"
            value={buttonCount}
            onChange={(e) => setButtonCount(Math.max(1, parseInt(e.target.value, 10) || 1))}
            style={{ width: '60px' }}
          />
        </div>

        <Group {...groupProps}>{renderButtons()}</Group>
      </div>
    );
  },
};

export const Basic = () => (
  <Group>
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
  </Group>
);

export const Position = () => (
  <>
    <Group position="center">
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </Group>
    <Group position="right">
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </Group>
  </>
);

export const Spacing = () => (
  <>
    <Group position="center" spacing="xl">
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </Group>
    <Group position="center" spacing={100} style={{ marginTop: '40px' }}>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </Group>
  </>
);

export const Direction = () => (
  <Group direction="column">
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
  </Group>
);

export const Grow = () => (
  <Group grow>
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
  </Group>
);

export const withDivider = () => (
  <Group>
    <Button>1</Button>
    <Divider direction="vertical" margins="sm" />
    <Button>2</Button>
    <Divider direction="vertical" margins="sm" />
    <Button>3</Button>
  </Group>
);
