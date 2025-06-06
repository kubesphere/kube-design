import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Alert, Group } from '../index';

export default {
  title: 'Components/Alert',
  component: Alert,
  args: {
    type: 'default',
    title: 'KubeSphere',
    showIcon: true,
    closable: false,
    children:
      'Kubesphere.io is an upstream project of the KubeSphere container management platform.',
  },
  argTypes: {
    type: {
      name: 'type',
      description: 'Types of warnings',
      table: {
        defaultValue: { summary: 'default' },
      },
      options: ['default', 'info', 'warning', 'error'],
      control: { type: 'select' },
    },
    title: {
      name: 'title',
      description: 'Title of the warning',
      table: {
        defaultValue: { summary: 'KubeSphere' },
      },
      control: { type: 'text' },
    },
    showIcon: {
      name: 'showIcon',
      description: 'Whether to display the icon',
      table: {
        defaultValue: { summary: true },
      },
      control: { type: 'boolean' },
    },
    closable: {
      name: 'closable',
      description: 'Whether to closeable',
      table: {
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
    children: {
      name: 'children',
      description: 'Content of the warning',
      defaultValue:
        'Kubesphere.io is an upstream project of the KubeSphere container management platform.',
      control: { type: 'text' },
    },
  } as any,
  decorators: [
    (Story) => (
      <div style={{ width: '900px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Alert>;

type Story = StoryObj<typeof Alert>;

export const Explame: Story = {
  render: (args) => {
    const [visible, setVisible] = React.useState(true);

    React.useEffect(() => {
      if (args.closable) {
        const handleClose = () => {
          setVisible(false);
          setTimeout(() => setVisible(true), 5000);
        };

        const closeButton = document.querySelector('.kubed-alert-close');
        if (closeButton) {
          closeButton.addEventListener('click', handleClose);
          return () => closeButton.removeEventListener('click', handleClose);
        }
      }
      return undefined;
    }, [args.closable]);

    if (!visible) {
      return <div>Alert has been closed. Will reappear in 5 seconds.</div>;
    }

    return <Alert {...args} />;
  },
};

export const Basic = () => (
  <Alert title="KubeSphere">
    Kubesphere.io is an upstream project of the KubeSphere container management platform.
  </Alert>
);

export const Types = () => (
  <Group direction="row" grow>
    <Alert title="KubeSphere">
      Kubesphere.io is an upstream project of the KubeSphere container management platform.
    </Alert>
    <Alert title="KubeSphere" type="warning">
      Kubesphere.io is an upstream project of the KubeSphere container management platform.
    </Alert>
    <Alert title="KubeSphere" type="error">
      Kubesphere.io is an upstream project of the KubeSphere container management platform.
    </Alert>
    <Alert title="KubeSphere" type="info" closable>
      Kubesphere.io is an upstream project of the KubeSphere container management platform.
    </Alert>
  </Group>
);
