import * as React from 'react';
import { createRef, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button, Drawer } from '@kubed/components';
import { Cluster } from '@kubed/icons';

export default {
  title: 'Components/Drawer',
  component: Drawer,
  args: {
    title: 'Drawer demo',
    description: 'Drawer description',
    width: 400,
    height: 400,
    placement: 'right',
    maskClosable: true,
    mask: true,
    keyboard: true,
  },
  argTypes: {
    title: {
      name: 'title',
      description: 'Drawer title',
      table: {
        defaultValue: { summary: 'Drawer demo' },
      },
      control: 'text',
    },
    description: {
      name: 'description',
      description: 'Drawer description',
      table: {
        defaultValue: { summary: 'Drawer description' },
      },
      control: 'text',
    },
    width: {
      name: 'width',
      description: 'Width of the drawer when placement is left or right',
      table: {
        defaultValue: { summary: '400' },
      },
      control: { type: 'range', min: 100, max: 800, step: 10 },
    },
    height: {
      name: 'height',
      description: 'Height of the drawer when placement is top or bottom',
      table: {
        defaultValue: { summary: '400' },
      },
      control: { type: 'range', min: 100, max: 800, step: 10 },
    },
    placement: {
      name: 'placement',
      description: 'Drawer placement',
      table: {
        defaultValue: { summary: 'right' },
      },
      options: ['right', 'left'],
      control: { type: 'select' },
    },
    maskClosable: {
      name: 'maskClosable',
      description: 'Whether to close the drawer when the mask is clicked',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    mask: {
      name: 'mask',
      description: 'Whether to show the mask',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    keyboard: {
      name: 'keyboard',
      description: 'Whether to support keyboard esc close',
      defaultValue: true,
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
} as Meta<typeof Drawer>;

type Story = StoryObj<typeof Drawer>;

export const Explame: Story = {
  render: (args) => {
    const [visible, setVisible] = React.useState(false);
    const ref = createRef();

    const openDrawer = () => {
      setVisible(true);
    };

    const closeDrawer = () => {
      setVisible(false);
    };

    return (
      <>
        <Button onClick={openDrawer}>Open Drawer</Button>
        <Drawer
          ref={ref}
          visible={visible}
          onClose={closeDrawer}
          titleIcon={<Cluster size={40} />}
          {...args}
        >
          <div style={{ padding: '20px' }}>
            <p>Drawer content</p>
            <p>Try to adjust the parameters in the control panel to see different effects.</p>
            <Button onClick={closeDrawer}>Close Drawer</Button>
          </div>
        </Drawer>
      </>
    );
  },
};

export const basic = () => {
  const [visible, setVisible] = useState(false);
  const ref = createRef();

  const openDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <>
      <Button onClick={openDrawer}>Open Drawer</Button>
      <Drawer
        ref={ref}
        visible={visible}
        title="Modal demo"
        description="Modal description"
        titleIcon={<Cluster size={40} />}
        onClose={closeDrawer}
        width={100}
        maskClosable
        placement="right"
      >
        Drawer content
        <Button onClick={closeDrawer}>Close Drawer</Button>
      </Drawer>
    </>
  );
};

export const left = () => {
  const [visible, setVisible] = useState(false);
  const ref = createRef();

  const openDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <>
      <Button onClick={openDrawer}>Open Drawer</Button>
      <Drawer
        ref={ref}
        visible={visible}
        titleIcon={<Cluster size={40} />}
        onClose={closeDrawer}
        width={100}
        maskClosable
        placement="left"
      >
        Drawer content
        <Button onClick={closeDrawer}>Close Drawer</Button>
      </Drawer>
    </>
  );
};
