import React from 'react';
import { Select } from '@kubed/components';

const { Option } = Select;

export default {
  title: 'Components/Select',
  component: Select,
};

export const Basic = () => (
  <Select style={{ width: '180px' }} placeholder="请选择" allowClear>
    <Option value="China">按 CPU 平均负载排行</Option>
    <Option value="USA">按内存用量排行</Option>
    <Option value="Russian">按磁盘用量排行</Option>
  </Select>
);

export const Search = () => (
  <Select allowClear style={{ width: '120px' }} placeholder="请选择" showSearch>
    <Option value="China">China</Option>
    <Option value="USA">USA</Option>
    <Option value="Russian">Russian</Option>
  </Select>
);

export const Multiple = () => (
  <Select style={{ width: '300px' }} placeholder="请选择" allowClear mode="multiple" showArrow>
    <Option value="China">按 CPU 平均负载排行</Option>
    <Option value="USA">按内存用量排行</Option>
    <Option value="Russian">按磁盘用量排行</Option>
  </Select>
);
