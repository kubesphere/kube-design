import * as React from 'react';
import { useState } from 'react';
import { Cluster } from '@kubed/icons';
import { TypeSelect } from '../TypeSelect';

export const Control = () => {
  const options = [
    {
      label: 'Default Rule',
      value: 'test1',
      description:
        'Schedule the container group replicas to the node according to the default rule.',
      icon: <Cluster size={40} />,
    },
    {
      label: 'Update at the same time',
      value: 'test2',
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
