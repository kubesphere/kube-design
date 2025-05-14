import * as React from 'react';
import { createRef, useState, useEffect } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Cluster } from '@kubed/icons';
import styled from 'styled-components';
import { Modal, Button, useModal } from '../index';

const HeaderExtra = styled.div`
  position: absolute;
  right: 30px;
  top: 10px;
`;

export default {
  title: 'Components/Modal',
  component: Modal,
  args: {
    title: 'Modal demo',
    description: 'Modal description',
    width: 600,
    centered: true,
    closable: true,
    maskClosable: false,
    confirmLoading: false,
    destroyOnClose: true,
  },
  argTypes: {
    title: {
      name: 'title',
      description: 'Modal title, displayed in header before close button',
      table: {
        defaultValue: { summary: 'Modal demo' },
      },
      control: 'text',
    },
    description: {
      name: 'description',
      description: 'Modal description',
      table: {
        defaultValue: { summary: 'Modal description' },
      },
      control: 'text',
    },
    width: {
      name: 'width',
      description: 'Width of the modal dialog',
      table: {
        defaultValue: { summary: '600' },
      },
      control: { type: 'range', min: 300, max: 1000, step: 50 },
    },
    centered: {
      name: 'centered',
      description: 'Centered Modal',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    closable: {
      name: 'closable',
      description: 'Show or hide close button',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    maskClosable: {
      name: 'maskClosable',
      description: 'Whether to close the modal dialog when the mask is clicked',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    confirmLoading: {
      name: 'confirmLoading',
      description: 'Whether to apply loading visual effect for OK button',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    destroyOnClose: {
      name: 'destroyOnClose',
      description: 'Whether to unmount child components on onClose',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    okText: {
      name: 'okText',
      description: 'Text of the OK button',
      control: 'text',
    },
    cancelText: {
      name: 'cancelText',
      description: 'Text of the Cancel button',
      control: 'text',
    },
  },
} as Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;

export const Example: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(false);
    const ref = createRef();

    const openModal = () => {
      setVisible(true);
    };

    const closeModal = () => {
      setVisible(false);
    };

    useEffect(() => {
      // 当控件面板中的参数变化时，可以在这里处理
    }, [args]);

    return (
      <>
        <Button onClick={openModal}>Open Modal</Button>
        <Modal
          ref={ref}
          visible={visible}
          onCancel={closeModal}
          onOk={closeModal}
          titleIcon={<Cluster size={40} />}
          headerExtra={<HeaderExtra>headerExtra</HeaderExtra>}
          {...args}
        >
          <div style={{ height: '200px', padding: '20px' }}>
            modal content
            <p>try to adjust the parameters in the right control panel to see different effects.</p>
          </div>
        </Modal>
      </>
    );
  },
};

export const Basic = () => {
  const [visible, setVisible] = useState(false);
  const ref = createRef();

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal
        ref={ref}
        visible={visible}
        title="Modal demo"
        description="Modal description"
        titleIcon={<Cluster size={40} />}
        onCancel={closeModal}
        confirmLoading
        headerExtra={<HeaderExtra>headerExtra</HeaderExtra>}
      >
        <div style={{ height: '300px' }} />
      </Modal>
    </>
  );
};

export const ImperativeModal = () => {
  const modal = useModal();

  const openChildModal = () => {
    modal.open({
      title: 'Imperative Modal',
      description: 'description text',
      content: 'modal content',
    });
  };

  const content = <Button onClick={openChildModal}>Nest Imperative Modal</Button>;

  const openModal = () => {
    const modalId = modal.open({
      title: 'Imperative Modal',
      description: 'description text',
      content,
      onOk: () => {
        modal.close(modalId);
      },
    });
  };

  return <Button onClick={openModal}>Imperative Modal</Button>;
};

export const AsyncModal = () => {
  const modal = useModal();

  const content = <div>modal content</div>;

  const openModal = () => {
    modal.open({
      title: 'AsyncOk Modal',
      description: 'description text',
      content,
      onAsyncOk: async () => {
        await new Promise((resolve) => {
          setTimeout(() => {
            console.log('run function...');
            resolve(1);
          }, 1000);
        }).then(() => {
          console.log('run promise then');
        });
        return true;
      },
    });
  };

  return <Button onClick={openModal}>Async Modal</Button>;
};

export const Confirm = () => {
  const modal = useModal();
  return (
    <Button
      onClick={() => {
        const modalId = modal.confirm({
          title: 'confirm modal',
          content: 'confirm content',
          onOk: () => {
            modal.close(modalId);
          },
        });
      }}
    >
      Imperative Modal
    </Button>
  );
};
