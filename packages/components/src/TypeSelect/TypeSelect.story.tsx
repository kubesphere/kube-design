import * as React from 'react';
import { useState } from 'react';
import { Cluster } from '@kubed/icons';
import { TypeSelect } from './TypeSelect';
import { useModal, Button } from '../index';

export default {
  title: 'Components/TypeSelect',
  component: TypeSelect,
};

export const Basic = () => {
  const options = [
    {
      label: '默认规则',
      value: 'test1',
      description: '按照默认的规则将容器组副本调度到节点。',
      icon: <Cluster size={40} />,
    },
    {
      label: '同时更新',
      value: 'test2',
      description: '尽可能将容器组副本调度到同一节点上。',
      icon: <Cluster size={40} />,
    },
    {
      label: '分散调度',
      value: 'test3',
      description: '尽可能将容器组副本调度到不同的节点上。',
      icon: <Cluster size={40} />,
    },
  ];
  return (
    <div style={{ height: '300px' }}>
      <TypeSelect
        options={options}
        onChange={(v) => {
          console.log(v);
        }}
      />
    </div>
  );
};

export const Control = () => {
  const options = [
    {
      label: '默认规则',
      value: 'test1',
      description: '按照默认的规则将容器组副本调度到节点。',
      icon: <Cluster size={40} />,
    },
    {
      label: '同时更新',
      value: 'test2',
      description: '尽可能将容器组副本调度到同一节点上。',
      icon: <Cluster size={40} />,
    },
    {
      label: '分散调度',
      value: 'test3',
      description: '尽可能将容器组副本调度到不同的节点上。',
      icon: <Cluster size={40} />,
    },
  ];
  const [value, setValue] = useState('test2');
  return (
    <div style={{ height: '300px' }}>
      <TypeSelect
        options={options}
        onChange={(v) => {
          console.log(v);
          setValue(v);
        }}
        value={value}
      />
    </div>
  );
};

export const InModal = () => {
  const options = [
    {
      label: '默认规则',
      value: 'test2',
      description: '按照默认的规则将容器组副本调度到节点。',
      icon: <Cluster size={40} />,
    },
    {
      label: '同时更新',
      value: 'test1',
      description: '尽可能将容器组副本调度到同一节点上。',
      icon: <Cluster size={40} />,
    },
    {
      label: '分散调度',
      value: 'test3',
      description: '尽可能将容器组副本调度到不同的节点上。',
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
