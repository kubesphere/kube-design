import * as React from 'react';
import { Add } from '@kubed/icons';
import { Empty } from './Empty';

export default {
  title: 'Components/Empty',
  component: Empty,
};

export const Basic = () => {
  return <Empty title="未发现匹配的结果" description="您可以尝试刷新数据或清空搜索结果" />;
};

export const Icon = () => {
  return <Empty description={<span>No_Data</span>} icon={<Add />} />;
};
