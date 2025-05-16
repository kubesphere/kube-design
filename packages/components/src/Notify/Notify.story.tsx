import * as React from 'react';
import { useState, useEffect } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button, Group } from '../index';
import { Notify, notify } from './Notify';

const { WithTitle } = Notify;

export default {
  title: 'Components/Notify',
  component: Notify,
  args: {
    position: 'top-right',
    duration: 3000,
    gutter: 20,
  },
  argTypes: {
    position: {
      name: 'position',
      description: 'Position of the notification',
      table: {
        defaultValue: { summary: 'top-right' },
      },
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      control: { type: 'select' },
    },
    duration: {
      name: 'duration',
      description: 'Duration in milliseconds for notifications to stay visible',
      table: {
        defaultValue: { summary: '3000' },
      },
      control: { type: 'range', min: 1000, max: 10000, step: 500 },
    },
    gutter: {
      name: 'gutter',
      description: 'Space between notifications',
      table: {
        defaultValue: { summary: 20 },
      },
      control: { type: 'range', min: 5, max: 50, step: 5 },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Notify>;

type Story = StoryObj<typeof Notify>;

export const Explame: Story = {
  render: (args) => {
    const [notifyProps, setNotifyProps] = useState(args);
    const [notifyId, setNotifyId] = useState<string | undefined>(undefined);

    // Update notify properties when args change
    useEffect(() => {
      setNotifyProps(args);
    }, [args]);

    const showInfo = () => {
      notify('This is an info notification.');
    };

    const showSuccess = () => {
      notify.success('This is a success notification!');
    };

    const showError = () => {
      notify.error('This is an error notification!');
    };

    const showWithTitle = () => {
      notify.error(
        <WithTitle
          title="Notification Title"
          message="This is a notification with title and message"
        />
      );
    };

    const showLoading = () => {
      const id = notify.loading('Loading in progress...');
      setNotifyId(id);
      return id;
    };

    const updateNotification = () => {
      if (notifyId) {
        notify.success('Loading completed successfully!', { id: notifyId });
        setNotifyId(undefined);
      } else {
        notify.error('No active loading notification to update');
      }
    };

    return (
      <div>
        <Group>
          <Button onClick={showInfo}>Info</Button>
          <Button onClick={showSuccess}>Success</Button>
          <Button onClick={showError}>Error</Button>
          <Button onClick={showWithTitle}>With Title</Button>
          <Button onClick={showLoading}>Loading</Button>
          <Button onClick={updateNotification} disabled={!notifyId}>
            Update Loading
          </Button>
        </Group>
        <div style={{ marginTop: '20px' }}>
          <p>Try clicking the buttons above and adjust the parameters in the control panel.</p>
        </div>
        <Notify {...notifyProps} />
      </div>
    );
  },
};

export const Basic = () => {
  const trigger = () => notify('Here is your Info.');
  const triggerSuccess = () => notify.success('Here is your success message.');
  const triggerError = () =>
    notify.error(<WithTitle title="Kube Design" message="Here is your error message" />);
  const triggerLoading = () => notify.loading('Here is your Info.');
  return (
    <div>
      <Group>
        <Button onClick={trigger}>Blank</Button>
        <Button onClick={triggerSuccess}>Success</Button>
        <Button onClick={triggerError}>Error</Button>
        <Button onClick={triggerLoading}>Loading</Button>
      </Group>
      <Notify position="top-right" />
    </div>
  );
};

export const LongContent = () => {
  const trigger = () =>
    notify.success(
      'Here is your toast.Here is your toast.Here is your toast.Here is your toast.Here is your toast.Here is your toast.Here is your toast.'
    );
  return (
    <div>
      <Button onClick={trigger}>Make me a toast</Button>
      <Notify position="top-right" />
    </div>
  );
};

export const UpdateContent = () => {
  let notifyId;
  const trigger = () => {
    notifyId = notify.loading('uploading...');
  };

  const update = () => {
    notify.success('upload success !', { id: notifyId });
  };

  return (
    <div>
      <Group>
        <Button onClick={trigger}>Make me a notify</Button>
        <Button onClick={update}>Update the notify</Button>
      </Group>
      <Notify position="top-right" />
    </div>
  );
};
