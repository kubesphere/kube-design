import React, { useState } from 'react';
import { Modal, Button } from '@kubed/components';

export default {
  title: 'Components/Modal',
  component: Modal,
};

export const Basic = () => {
  const [visible, setVisible] = useState(true);

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal visible={visible} title="Modal demo" onCancel={closeModal}>
        Modal content
      </Modal>
    </>
  );
};
