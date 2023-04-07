import * as React from 'react';
import { createRef, useState } from 'react';
import { Cluster } from '@kubed/icons';
import styled from 'styled-components';
import { Modal, Button, useModal } from '../index';

export default {
  title: 'Components/Modal',
  component: Modal,
};

const HeaderExtra = styled.div`
  position: absolute;
  right: 30px;
  top: 10px;
`;

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
        footer={<div>footer</div>}
        width="100%"
        headerExtra={<HeaderExtra>headerExtra</HeaderExtra>}
      >
        <div style={{ height: '90vh' }} />
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
    const modalId = modal.open({
      title: 'AsyncOk Modal',
      description: 'description text',
      content,
      onAsyncOk: () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            modal.close(modalId);
            resolve(1);
          }, 300);
        });
      },
    });
  };

  return <Button onClick={openModal}>Imperative Modal</Button>;
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
