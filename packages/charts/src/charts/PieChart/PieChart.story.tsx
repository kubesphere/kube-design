import * as React from 'react';
import { PieChart } from './PieChart';

export default {
  title: 'Charts/PieChart',
  component: PieChart,
};

export const basic = () => {
  const data = [
    { name: 'Group A', value: 2400 },
    { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 },
    { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 },
    { name: 'Group F', value: 4800 },
  ];

  const legendFormatter = (legend) => {
    if (legend.dataKey === 'uv') return '访客量';
    if (legend.dataKey === 'pv') return '页面点击率';
    return null;
  };

  return (
    <div style={{ width: '100%', height: '180px' }}>
      <PieChart data={data} category="value" dataKey="name" showLegend />
    </div>
  );
};
