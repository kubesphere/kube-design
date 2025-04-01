import * as React from 'react';
import { Select } from '../index';

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
    <Option value="France">按磁盘用量排行2</Option>
  </Select>
);

export const Search = () => (
  <Select allowClear style={{ width: '120px' }} placeholder="请选择">
    <Option value="China">China</Option>
    <Option value="USA">USA</Option>
    <Option value="Russian">Russian</Option>
  </Select>
);

export const Multiple = () => (
  <Select style={{ width: '300px' }} placeholder="请选择" allowClear mode="multiple">
    <Option value="China">按 CPU 平均负载排行</Option>
    <Option value="USA">按内存用量排行</Option>
    <Option value="Russian">按磁盘用量排行</Option>
  </Select>
);

export const HasArrow = () => (
  <Select style={{ width: '300px' }} placeholder="请选择" allowClear mode="multiple" showArrow>
    <Option value="China">按 CPU 平均负载排行</Option>
    <Option value="USA">按内存用量排行</Option>
    <Option value="Russian">按磁盘用量排行</Option>
  </Select>
);

export const HasLoading = () => {
  const [loading, setLoading] = React.useState(false);
  const [options, setOptions] = React.useState<any[]>([]);

  const timerRef = React.useRef<any>();
  const handleChange = (value?: string) => {
    setLoading(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      clearTimeout(timerRef.current);
      setOptions([
        { value: 'host', label: 'host' },
        { value: 'member', label: 'member' },
        { value: 'other_member', label: 'other_member_long_long_long_long_long_long_long_label' },
        ...(value ? [{ value: `cluster_${value}`, label: `cluster_${value}` }] : []),
      ]);
      setLoading(false);
    }, 2000);
  };
  React.useEffect(() => {
    handleChange();
  }, []);

  return (
    <Select
      style={{ width: '300px' }}
      placeholder="请选择"
      prefix="集群"
      allowClear
      showArrow
      showSearch
      // mode="multiple"
      loading={loading}
      options={options}
      onSearch={handleChange}
    />
  );
};
