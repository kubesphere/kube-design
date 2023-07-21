import * as React from 'react';
import { RadarChart } from './RadarChart';

export default {
  title: 'Charts/RadarChart',
  component: RadarChart,
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

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <RadarChart
        colors={[
          {
            stroke: '#345681',
            fill: '#1c2d4267',
          },
        ]}
        data={data}
        categories={['value']}
        dataKey="name"
        showLegend
      />
    </div>
  );
};

export const multiple = () => {
  const data = [
    { name: 'Group A', value: 2400, count: 2311 },
    { name: 'Group B', value: 4567, count: 3213 },
    { name: 'Group C', value: 1398, count: 4231 },
    { name: 'Group D', value: 9800, count: 1323 },
    { name: 'Group E', value: 3908, count: 4421 },
    { name: 'Group F', value: 4800, count: 7755 },
  ];

  const legendFormatter = (legend) => {
    if (legend.dataKey === 'value') return '访客量';
    if (legend.dataKey === 'count') return '页面点击率';
    return null;
  };

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <RadarChart
        data={data}
        categories={['value', 'count']}
        dataKey="name"
        showLegend
        legendFormatter={legendFormatter}
      />
    </div>
  );
};
