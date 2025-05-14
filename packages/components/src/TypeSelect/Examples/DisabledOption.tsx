import * as React from 'react';
import { Cluster } from '@kubed/icons';
import { TypeSelect } from '../TypeSelect';

export const DisabledOption = () => {
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
      disabled: true,
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
