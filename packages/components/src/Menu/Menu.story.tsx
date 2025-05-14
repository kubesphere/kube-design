import * as React from 'react';
import { useState, useEffect } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Add, Stop, Pen, Trash, Appcenter } from '@kubed/icons';
import { Menu, MenuItem, MenuLabel, Card, Divider, Button } from '../index';

export default {
  title: 'Components/Menu',
  component: Menu,
  args: {
    width: 220,
    themeType: 'light',
  },
  argTypes: {
    width: {
      name: 'width',
      description: 'Width of the menu',
      table: {
        defaultValue: { summary: '220' },
      },
      control: { type: 'number', min: 150, max: 400 },
    },
    themeType: {
      name: 'themeType',
      description: 'Theme type of the menu',
      table: {
        defaultValue: { summary: 'light' },
      },
      options: ['light', 'dark'],
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
} as Meta<typeof Menu>;

type Story = StoryObj<typeof Menu>;

export const Explame: Story = {
  render: (args) => {
    const [menuProps, setMenuProps] = useState(args);
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const [showDisabled, setShowDisabled] = useState(true);
    const [showDivider, setShowDivider] = useState(true);

    // Update menu properties when args change
    useEffect(() => {
      setMenuProps(args);
    }, [args]);

    const handleItemClick = (itemName: string) => {
      setActiveItem(itemName);
      console.log(`Clicked on: ${itemName}`);
    };

    return (
      <div>
        <div style={{ marginBottom: '20px' }}>
          <Button onClick={() => setShowDisabled(!showDisabled)} style={{ marginRight: '10px' }}>
            {showDisabled ? 'Hide' : 'Show'} Disabled Item
          </Button>
          <Button onClick={() => setShowDivider(!showDivider)}>
            {showDivider ? 'Hide' : 'Show'} Divider
          </Button>
        </div>

        <Card style={{ width: `${menuProps.width}px` }}>
          <Menu {...menuProps}>
            <MenuLabel>Actions</MenuLabel>
            <MenuItem icon={<Add />} onClick={() => handleItemClick('Create')}>
              Create
            </MenuItem>
            <MenuItem icon={<Stop />} onClick={() => handleItemClick('Stop')}>
              Stop
            </MenuItem>
            {showDisabled && (
              <MenuItem disabled icon={<Pen />} onClick={() => handleItemClick('Edit')}>
                Edit
              </MenuItem>
            )}
            {showDivider && <Divider />}
            <MenuItem icon={<Trash />} onClick={() => handleItemClick('Delete')} color="danger">
              Delete
            </MenuItem>
            <MenuItem
              icon={<Appcenter />}
              onClick={() => handleItemClick('Settings')}
              rightSection={<span style={{ opacity: 0.6, fontSize: '12px' }}>⌘S</span>}
            >
              Settings
            </MenuItem>
          </Menu>
        </Card>

        {activeItem && (
          <div style={{ marginTop: '20px' }}>
            <p>
              Last clicked item: <strong>{activeItem}</strong>
            </p>
          </div>
        )}
      </div>
    );
  },
};

const clickCallback = () => {
  console.log('you click me');
};

export const Basic = () => (
  <Card style={{ width: '220px' }}>
    <Menu>
      <MenuLabel>menu label</MenuLabel>
      <MenuItem icon={<Add />} as="a" href="/logout">
        Create
      </MenuItem>
      <MenuItem icon={<Stop />} onClick={clickCallback}>
        Stop scheduling
      </MenuItem>
      <MenuItem disabled icon={<Pen />}>
        Edit
      </MenuItem>
      <Divider />
      <MenuItem icon={<Trash />}>Delete</MenuItem>
    </Menu>
  </Card>
);

export const DarkTheme = () => (
  <Card style={{ width: '220px' }}>
    <Menu themeType="dark">
      <MenuLabel>menu label</MenuLabel>
      <MenuItem icon={<Add />} as="a" href="/logout">
        Create
      </MenuItem>
      <MenuItem icon={<Stop />} onClick={clickCallback}>
        Stop scheduling
      </MenuItem>
      <MenuItem disabled icon={<Pen />}>
        Edit
      </MenuItem>
      <Divider />
      <MenuItem icon={<Trash />}>Delete</MenuItem>
    </Menu>
  </Card>
);
