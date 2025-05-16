import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import type { PopoverInstance } from '../index';
import { Popover, Button } from '../index';

export default {
  title: 'Components/Popover',
  component: Popover,
  args: {
    title: 'Popover Title',
    content: 'Display additional, floating content on hover or click',
    width: 240,
    placement: 'top',
    trigger: 'click',
    interactive: true,
    maxWidth: '264px',
  },
  argTypes: {
    title: {
      name: 'title',
      description: 'Title of the popover',
      table: {
        defaultValue: { summary: 'Popover Title' },
      },
      control: 'text',
    },
    content: {
      name: 'content',
      description: 'Content of the popover',
      table: {
        defaultValue: { summary: 'Display additional, floating content on hover or click' },
      },
      control: 'text',
    },
    width: {
      name: 'width',
      description: 'Width of the popover in pixels',
      table: {
        defaultValue: { summary: '240' },
      },
      control: { type: 'range', min: 100, max: 500, step: 10 },
    },
    placement: {
      name: 'placement',
      description: 'Preferred placement of the popover',
      table: {
        defaultValue: { summary: 'top' },
      },
      options: ['top', 'bottom', 'left', 'right'],
      control: { type: 'select' },
    },
    trigger: {
      name: 'trigger',
      description: 'Events that cause the popover to show',
      table: {
        defaultValue: { summary: 'click' },
      },
      options: ['click', 'mouseenter', 'focus'],
      control: { type: 'select' },
    },
    interactive: {
      name: 'interactive',
      description: 'Whether the popover is interactive',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    maxWidth: {
      name: 'maxWidth',
      description: 'Maximum width of the popover',
      table: {
        defaultValue: { summary: '264px' },
      },
      control: 'text',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '100px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Popover>;

type Story = StoryObj<typeof Popover>;

export const Explame: Story = {
  render: (args) => {
    const [popoverProps, setPopoverProps] = useState(args);
    const popoverRef = useRef<PopoverInstance | null>(null);

    useEffect(() => {
      setPopoverProps({
        ...args,
        trigger: args.trigger || 'click',
      });
    }, [args]);

    const handleManualShow = () => {
      if (popoverRef.current) {
        popoverRef.current.show();
      }
    };

    const handleManualHide = () => {
      if (popoverRef.current) {
        popoverRef.current.hide();
      }
    };

    return (
      <div>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <Popover
            {...popoverProps}
            onMount={(instance) => {
              popoverRef.current = instance;
            }}
          >
            <Button radius="xl">Interact With Me</Button>
          </Popover>
          <Button radius="xl" onClick={handleManualShow}>
            Show Popover
          </Button>
          <Button radius="xl" onClick={handleManualHide}>
            Hide Popover
          </Button>
        </div>
        <div style={{ marginTop: '20px' }}>
          <p>
            Try adjusting the parameters in the control panel to see different popover behaviors.
          </p>
          <p>
            Current trigger: <strong>{popoverProps.trigger}</strong>
          </p>
          <p>
            Current placement: <strong>{popoverProps.placement}</strong>
          </p>
          <p>Instructions:</p>
          <ul>
            <li>
              For <strong>click</strong> trigger: Click on the button
            </li>
            <li>
              For <strong>hover</strong> or <strong>mouseenter</strong> trigger: Hover over the
              button
            </li>
            <li>
              For <strong>focus</strong> trigger: Click or tab to focus the button
            </li>
          </ul>
        </div>
      </div>
    );
  },
};

export const HoverExample = () => (
  <div style={{ marginTop: '70px', marginLeft: '100px' }}>
    <Popover
      title="Hover Popover"
      content="This popover appears on hover"
      width={240}
      trigger="mouseenter"
    >
      <Button radius="xl">Hover Over Me</Button>
    </Popover>
  </div>
);

export const Basic = () => (
  <div style={{ marginTop: '70px', marginLeft: '100px' }}>
    <Popover
      title="popover title"
      content="Display additional, floating content on click"
      width={240}
      contentClassName="test-classname"
    >
      <Button radius="xl">KubeSphere</Button>
    </Popover>
  </div>
);

export const ManualControl = () => {
  const ref = React.useRef<PopoverInstance | null>(null);

  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        marginTop: '70px',
        marginLeft: '100px',
      }}
    >
      <Popover
        title="popover title"
        content="Display additional, floating content on click"
        width={240}
        contentClassName="test-classname"
        onMount={(instance) => {
          ref.current = instance;
        }}
      >
        <Button radius="xl">hover me</Button>
      </Popover>
      <Button radius="xl" onClick={() => ref.current?.show()}>
        show Popover
      </Button>
    </div>
  );
};
