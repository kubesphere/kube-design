import * as React from 'react';
import { AreaChart } from './AreaChart';

export default {
  title: 'Charts/AreaChart',
  component: AreaChart,
};

export const basic = () => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const legendFormatter = (legend) => {
    if (legend.dataKey === 'uv') return '访客量';
    if (legend.dataKey === 'pv') return '页面点击率';
    return null;
  };

  return (
    <div style={{ width: '100%', height: '180px' }}>
      <AreaChart
        data={data}
        categories={['uv', 'pv']}
        dataKey="name"
        legendAlign="left"
        legendVerticalAlign="bottom"
        legendFormatter={legendFormatter}
      />
    </div>
  );
};
