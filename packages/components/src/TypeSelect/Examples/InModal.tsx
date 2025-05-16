import * as React from 'react';
import { Cluster } from '@kubed/icons';
import { TypeSelect, useModal, Button } from '../../index';

export const InModal = () => {
  const options = [
    {
      label: 'Default Rule',
      value: 'test2',
      description:
        'Schedule the container group replicas to the node according to the default rule.',
      icon: <Cluster size={40} />,
    },
    {
      label: 'Update at the same time',
      value: 'test1',
      description: 'Schedule the container group replicas to the same node as much as possible.',
      icon: <Cluster size={40} />,
    },
    {
      label: 'Distribute scheduling',
      value: 'test3',
      description: 'Schedule the container group replicas to different nodes as much as possible.',
      icon: <Cluster size={40} />,
    },
  ];
  const content = (
    <div style={{ padding: '30px' }}>
      <TypeSelect options={options} />
    </div>
  );

  const modal = useModal();
  const openModal = () => {
    modal.open({
      title: 'Imperative Modal',
      description: 'description text',
      content,
    });
  };

  return <Button onClick={openModal}>Select In Modal</Button>;
};
