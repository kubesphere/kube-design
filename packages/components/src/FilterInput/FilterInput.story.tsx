import * as React from 'react';
import { useState } from 'react';
import { FilterInput } from './FilterInput';

export default {
  title: 'Components/FilterInput',
  component: FilterInput,
};

const suggestions = [
  { label: '主机', key: 'instance' },
  {
    label: '状态',
    key: 'status',
    options: [
      { label: '运行中', key: true },
      { label: '已关闭', key: false },
    ],
  },
  {
    label: '系统',
    key: 'system',
    options: [
      { label: 'Debian', key: 'debian' },
      { label: 'Centos', key: 'centos' },
      { label: 'Ubuntu', key: 'ubuntu' },
      { label: 'Windows', key: 'windows' },
    ],
  },
  {
    label: '配置',
    key: 'instanceType',
    options: [
      { label: '1 核 / 512 MB / 20 GB 存储', key: 0 },
      { label: '2 核 / 1 GB / 20 GB 存储', key: 1 },
    ],
  },
  { label: '项目', key: 'project' },
];

export const Basic = () => {
  const [filters, setFilters] = React.useState({ system: 'debian', instanceType: 1 });
  const handleChange = (data) => {
    console.log(data);
    setFilters(data);
  };
  return (
    <FilterInput
      suggestions={suggestions}
      filters={filters}
      placeholder="Search.."
      onChange={handleChange}
    />
  );
};

export const SimpleMode = () => {
  const [initialKeyword, setKeyword] = useState('test');
  const handleChange = (data) => {
    console.log(data);
  };

  const changeKeyword = () => {
    setKeyword(`${Math.random()}`);
  };

  return (
    <>
      <FilterInput
        placeholder="Search.."
        onInputChange={handleChange}
        onChange={handleChange}
        simpleMode
        initialKeyword={initialKeyword}
      />
      <button onClick={changeKeyword}>change keyword</button>
    </>
  );
};
