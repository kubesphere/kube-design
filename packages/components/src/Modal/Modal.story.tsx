import React, { useState } from 'react';
import { Modal, Button } from '@kubed/components';
import { Cluster } from '@kubed/icons';

export default {
  title: 'Components/Modal',
  component: Modal,
};

export const Basic = () => {
  const [visible, setVisible] = useState(false);

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
        visible={visible}
        title="Modal demo"
        description="Modal description"
        icon={<Cluster size={40} />}
        onCancel={closeModal}
      >
        Modal content
      </Modal>
    </>
  );
};
