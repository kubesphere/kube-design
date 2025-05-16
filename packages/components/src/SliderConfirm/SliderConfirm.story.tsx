import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Kubesphere } from '@kubed/icons';
import { SliderConfirm } from './SliderConfirm';
import { Notify, notify } from '../Notify/Notify';

export default {
  title: 'Components/SliderConfirm',
  component: SliderConfirm,
  args: {
    tip: 'I understand the risk of removing the cluster',
    dragIcon: <Kubesphere size={30} color="#50b484" />,
  },
  argTypes: {
    tip: {
      name: 'tip',
      description: 'Slider tip text',
      table: {
        defaultValue: { summary: 'I understand the risk of removing the cluster' },
      },
      control: 'text',
    },
    dragIcon: {
      name: 'dragIcon',
      description: 'Drag icon',
      control: 'select',
      options: ['default', 'none'],
      table: {
        defaultValue: { summary: 'default' },
      },
      mapping: {
        default: <Kubesphere size={30} color="#50b484" />,
        none: null,
      },
    },
    onConfirm: {
      name: 'onConfirm',
      description: 'Callback function after confirmation',
      control: 'select',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '600px' }}>
        <Story />
        <Notify position="top-right" />
      </div>
    ),
  ],
} as Meta<typeof SliderConfirm>;

type Story = StoryObj<typeof SliderConfirm>;

export const Explame: Story = {
  render: (args) => {
    const confirm = () => {
      notify.success('confirmed!');
      if (args.onConfirm) {
        args.onConfirm();
      }
    };

    return <SliderConfirm {...args} onConfirm={confirm} />;
  },
};

export const Basic = () => {
  const confirm = () => {
    notify.success('confirmed!');
  };
  return (
    <>
      <SliderConfirm
        tip="I understand the risk of removing the cluster"
        dragIcon={<Kubesphere size={30} color="#50b484" />}
        onConfirm={confirm}
      />
      <Notify position="top-right" />
    </>
  );
};
