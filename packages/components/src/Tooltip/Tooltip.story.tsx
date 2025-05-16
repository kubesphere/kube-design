import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import type { TooltipInstance } from '../index';
import { Tooltip, Button, Col, Row, Group } from '../index';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: {
    content: 'Tooltip content',
    placement: 'top',
    trigger: 'click',
    arrow: true,
    interactive: true,
  },
  argTypes: {
    content: {
      name: 'content',
      description: 'Tooltip content',
      control: 'text',
      table: {
        defaultValue: { summary: 'Tooltip content' },
      },
    },
    placement: {
      name: 'placement',
      description: 'Tooltip placement',
      control: { type: 'select' },
      options: [
        'top',
        'top-start',
        'top-end',
        'right',
        'right-start',
        'right-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
      ],
      table: {
        defaultValue: { summary: 'top' },
      },
    },
    trigger: {
      name: 'trigger',
      description: 'Trigger',
      control: { type: 'select' },
    },
    arrow: {
      name: 'arrow',
      description: 'Display arrow or not',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    interactive: {
      name: 'interactive',
      description: 'Interactive',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '40px', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Tooltip>;

type Story = StoryObj<typeof Tooltip>;

export const Explame: Story = {
  render: (args) => {
    return (
      <Tooltip {...args}>
        <Button>Click me</Button>
      </Tooltip>
    );
  },
};

export const Basic = () => (
  <Tooltip content="Tooltip content">
    <Button>Tooltip</Button>
  </Tooltip>
);

export const Position = () => (
  <>
    <Row style={{ width: '500px' }}>
      <Col span={4}>
        <Tooltip content="Tooltip content Tooltip content" placement="top">
          <Button style={{ minWidth: '100px' }}>top</Button>
        </Tooltip>
      </Col>
      <Col span={4}>
        <Tooltip content="Tooltip content Tooltip content" placement="top-start">
          <Button style={{ minWidth: '100px' }}>top-start</Button>
        </Tooltip>
      </Col>
      <Col span={4}>
        <Tooltip content="Tooltip content Tooltip content" placement="top-end">
          <Button style={{ minWidth: '100px' }}>top-end</Button>
        </Tooltip>
      </Col>
      <Col span={4}>
        <Tooltip
          content="Tooltip content Tooltip content Tooltip content Tooltip content"
          placement="right"
        >
          <Button style={{ minWidth: '100px' }}>right</Button>
        </Tooltip>
      </Col>
      <Col span={4}>
        <Tooltip
          content="Tooltip content Tooltip content Tooltip content Tooltip content"
          placement="right-start"
        >
          <Button style={{ minWidth: '100px' }}>right-start</Button>
        </Tooltip>
      </Col>
      <Col span={4}>
        <Tooltip
          content="Tooltip content Tooltip content Tooltip content Tooltip content"
          placement="right-end"
        >
          <Button style={{ minWidth: '100px' }}>right-end</Button>
        </Tooltip>
      </Col>
      <Col span={4}>
        <Tooltip
          content="Tooltip content Tooltip content Tooltip content Tooltip content"
          placement="left"
        >
          <Button style={{ minWidth: '100px' }}>left</Button>
        </Tooltip>
      </Col>
      <Col span={4}>
        <Tooltip
          content="Tooltip content Tooltip content Tooltip content Tooltip content"
          placement="left-start"
        >
          <Button style={{ minWidth: '100px' }}>left-start</Button>
        </Tooltip>
      </Col>
      <Col span={4}>
        <Tooltip
          content="Tooltip content Tooltip content Tooltip content Tooltip content"
          placement="left-end"
        >
          <Button style={{ minWidth: '100px' }}>left-end</Button>
        </Tooltip>
      </Col>
      <Col span={4}>
        <Tooltip
          content="Tooltip content Tooltip content Tooltip content Tooltip content"
          placement="bottom"
        >
          <Button style={{ minWidth: '100px' }}>bottom</Button>
        </Tooltip>
      </Col>
      <Col span={4}>
        <Tooltip
          content="Tooltip content Tooltip content Tooltip content Tooltip content"
          placement="bottom-start"
        >
          <Button style={{ minWidth: '100px' }}>bottom-start</Button>
        </Tooltip>
      </Col>
      <Col span={4}>
        <Tooltip
          content="Tooltip content Tooltip content Tooltip content Tooltip content"
          placement="bottom-end"
        >
          <Button style={{ minWidth: '100px' }}>bottom-end</Button>
        </Tooltip>
      </Col>
    </Row>
  </>
);

export const Trigger = () => (
  <Group>
    <Tooltip content="Tooltip content" trigger="click">
      <Button>Click</Button>
    </Tooltip>
    <Tooltip content="Tooltip content" trigger="focus">
      <Button>focusin</Button>
    </Tooltip>
  </Group>
);

export const Arrow = () => (
  <Tooltip content="Tooltip content" arrow={false}>
    <Button>Arrow</Button>
  </Tooltip>
);

export const Interactive = () => (
  <Tooltip content="Tooltip content" interactive>
    <Button style={{ marginTop: '40px' }}>Interactive</Button>
  </Tooltip>
);

export const ManualControl = () => {
  const ref = React.useRef<TooltipInstance | null>(null);

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Tooltip
        content="Tooltip content"
        onMount={(instance) => {
          ref.current = instance;
        }}
      >
        <Button>hover me</Button>
      </Tooltip>
      <Button radius="xl" onClick={() => ref.current?.show()}>
        show Popover
      </Button>
    </div>
  );
};
