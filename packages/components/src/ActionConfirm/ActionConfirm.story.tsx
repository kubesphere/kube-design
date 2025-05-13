import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import { Button } from '@kubed/components';
import { ActionConfirm } from './ActionConfirm';

const ActionBox = styled.div`
  position: relative;
  width: 700px;
  height: 500px;
  border: 1px solid #eee;
  overflow: hidden;
`;

export default {
  title: 'Components/ActionConfirm',
  component: ActionConfirm,
  args: {
    visible: true,
    confirmLoading: false,
    onOk: () => {},
    onCancel: () => {},
  },
  argTypes: {
    visible: {
      name: 'visible',
      description: 'Controls whether the confirmation box is visible',
      defaultValue: true,
      control: 'boolean',
    },
    confirmLoading: {
      name: 'confirmLoading',
      description: 'The loading state of the confirm button',
      defaultValue: false,
      control: 'boolean',
    },
    onOk: {
      name: 'onOk',
      description: 'Callback function when the confirm button is clicked',
      action: 'clicked',
    },
    onCancel: {
      name: 'onCancel',
      description: 'Callback function when the cancel button is clicked',
      action: 'cancelled',
    },
    okText: {
      name: 'okText',
      description: 'The text content of the confirm button',
      defaultValue: undefined,
      control: 'text',
    },
    cancelText: {
      name: 'cancelText',
      description: 'The text content of the cancel button',
      defaultValue: undefined,
      control: 'text',
    },
  } as any,
  decorators: [
    (Story) => (
      <div
        style={{
          width: '900px',
          marginTop: '50px',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<typeof ActionConfirm>;

type Story = StoryObj<typeof ActionConfirm>;

// default example
export const Explame: Story = {
  render: (args) => (
    <ActionConfirm
      visible={args.visible}
      confirmLoading={args.confirmLoading}
      onOk={args.onOk}
      onCancel={args.onCancel}
      okText={args.okText}
      cancelText={args.cancelText}
    />
  ),
};

// example with toggle button
export const WithToggleButton: Story = {
  render: (args) => {
    const [visible, setVisible] = React.useState(args.visible);
    const [loading, setLoading] = React.useState(args.confirmLoading);

    // when the visible value in args changes, update the internal state
    React.useEffect(() => {
      setVisible(args.visible);
    }, [args.visible]);

    // when the confirmLoading value in args changes, update the internal state
    React.useEffect(() => {
      setLoading(args.confirmLoading);
    }, [args.confirmLoading]);

    const handleOk = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setVisible(false);
      }, 1000);

      // call the onOk callback passed from args
      if (args.onOk) {
        args.onOk();
      }
    };

    return (
      <ActionBox>
        <Button onClick={() => setVisible(!visible)}>Toggle Visible</Button>
        <ActionConfirm
          visible={visible}
          confirmLoading={loading}
          onOk={handleOk}
          onCancel={() => {
            setVisible(false);
            if (args.onCancel) args.onCancel();
          }}
          okText={args.okText}
          cancelText={args.cancelText}
        />
      </ActionBox>
    );
  },
};
