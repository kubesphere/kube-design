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
