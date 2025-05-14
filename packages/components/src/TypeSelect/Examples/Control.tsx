import * as React from 'react';
import { useState } from 'react';
import { Cluster } from '@kubed/icons';
import { TypeSelect } from '../TypeSelect';

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
