import * as React from 'react';
import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Add, Pen, Stop, Trash, More } from '@kubed/icons';
import { Button, Dropdown, Menu, MenuItem, MenuLabel } from '../index';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  args: {
    visible: false,
    placement: 'bottom',
    interactive: true,
    trigger: 'click',
    hideOnClick: true,
    arrow: false,
    maxWidth: 210,
    animation: 'shift-away',
  },
  argTypes: {
    visible: {
      name: 'visible',
      description: 'Whether the dropdown is visible (controlled mode)',
      control: 'boolean',
    },
    placement: {
      name: 'placement',
      description: 'The placement of the dropdown',
      defaultValue: 'bottom',
      options: ['top', 'right', 'bottom', 'left'],
      control: { type: 'select' },
    },
    interactive: {
      name: 'interactive',
      description: 'Whether the dropdown is interactive',
      defaultValue: true,
      control: 'boolean',
    },
    trigger: {
      name: 'trigger',
      description: 'How to trigger the dropdown',
      defaultValue: 'click',
      options: ['click', 'hover', 'focus', 'manual'],
      control: { type: 'select' },
    },
    hideOnClick: {
      name: 'hideOnClick',
      description: 'Whether to hide the dropdown when clicking on it',
      defaultValue: true,
      control: 'boolean',
    },
    arrow: {
      name: 'arrow',
      description: 'Whether to show an arrow',
      defaultValue: false,
      control: 'boolean',
    },
    maxWidth: {
      name: 'maxWidth',
      description: 'Maximum width of the dropdown',
      defaultValue: 210,
      control: { type: 'number' },
    },
    animation: {
      name: 'animation',
      description: 'Animation type',
      defaultValue: 'shift-away',
      options: ['shift-away', 'shift-toward', 'scale', 'perspective', 'fade'],
      control: { type: 'select' },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '300px', width: '100%', backgroundColor: '#f9fbfd', padding: '50px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Dropdown>;

type Story = StoryObj<typeof Dropdown>;

// Default menu content for examples
const DefaultMenuContent = (
  <Menu>
    <MenuLabel>Actions</MenuLabel>
    <MenuItem icon={<Add />}>Create</MenuItem>
    <MenuItem icon={<Stop />}>Stop</MenuItem>
    <MenuItem icon={<Pen />}>Edit</MenuItem>
    <MenuItem icon={<Trash />}>Delete</MenuItem>
  </Menu>
);

export const Explame: Story = {
  render: (args) => {
    const [isVisible, setIsVisible] = useState<boolean | undefined>(args.visible);

    // Handle menu item click
    const handleMenuItemClick = (action: string) => {
      console.log(`Action: ${action}`);
      if (args.hideOnClick) {
        setIsVisible(false);
      }
    };

    // Custom menu content with click handlers
    const MenuContent = (
      <Menu>
        <MenuLabel>Actions</MenuLabel>
        <MenuItem icon={<Add />} onClick={() => handleMenuItemClick('Create')}>
          Create
        </MenuItem>
        <MenuItem icon={<Stop />} onClick={() => handleMenuItemClick('Stop')}>
          Stop
        </MenuItem>
        <MenuItem icon={<Pen />} onClick={() => handleMenuItemClick('Edit')}>
          Edit
        </MenuItem>
        <MenuItem icon={<Trash />} onClick={() => handleMenuItemClick('Delete')}>
          Delete
        </MenuItem>
      </Menu>
    );

    // Update visibility when args.visible changes
    React.useEffect(() => {
      if (args.visible !== undefined && args.visible !== isVisible) {
        setIsVisible(args.visible);
      }
    }, [args.visible]);

    // Toggle dropdown visibility (for controlled mode)
    const toggleDropdown = () => {
      if (args.visible !== undefined) {
        setIsVisible(!isVisible);
      }
    };

    return (
      <Dropdown
        {...args}
        content={MenuContent}
        visible={isVisible}
        onShow={() => setIsVisible(true)}
        onHide={() => setIsVisible(false)}
      >
        <Button variant="text" radius="lg" onClick={toggleDropdown}>
          <More size={16} />
        </Button>
      </Dropdown>
    );
  },
};

export const Basic = () => (
  <div style={{ height: '300px', width: '100%', backgroundColor: '#f9fbfd' }}>
    <Dropdown content={DefaultMenuContent}>
      <Button variant="text" radius="lg">
        <More size={16} />
      </Button>
    </Dropdown>
  </div>
);

export const Placements = () => (
  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
    <Dropdown content={DefaultMenuContent} placement="top">
      <Button>Top</Button>
    </Dropdown>
    <Dropdown content={DefaultMenuContent} placement="bottom">
      <Button>Bottom</Button>
    </Dropdown>
    <Dropdown content={DefaultMenuContent} placement="left">
      <Button>Left</Button>
    </Dropdown>
    <Dropdown content={DefaultMenuContent} placement="right">
      <Button>Right</Button>
    </Dropdown>
  </div>
);

export const Triggers = () => (
  <div style={{ display: 'flex', gap: '20px' }}>
    <Dropdown content={DefaultMenuContent} trigger="click">
      <Button>Click</Button>
    </Dropdown>
    <Dropdown content={DefaultMenuContent} trigger="hover">
      <Button>Hover</Button>
    </Dropdown>
    <Dropdown content={DefaultMenuContent} trigger="focus">
      <Button>Focus</Button>
    </Dropdown>
  </div>
);

export const WithArrow = () => (
  <Dropdown content={DefaultMenuContent} arrow>
    <Button>With Arrow</Button>
  </Dropdown>
);
