import React from 'react';
import { mountWithTheme } from '@kubed/tests';
import { AreaChart } from './AreaChart/AreaChart';
import { BarChart } from './BarChart/BarChart';
import { LineChart } from './LineChart/LineChart';

jest.mock('recharts', () => {
  const React = require('react');
  return {
    ...jest.requireActual('recharts'),
    ResponsiveContainer: ({ children }) =>
      React.cloneElement(children, { width: 500, height: 300 }),
  };
});

const data = [
  { name: 'Mon', value: 20 },
  { name: 'Tue', value: 30 },
];

describe('@kubed/charts Cartesian layout', () => {
  it.each([
    [AreaChart, '.recharts-area-area'],
    [BarChart, '.recharts-bar-rectangle path'],
    [LineChart, '.recharts-line-curve'],
  ])('renders finite geometry with the default axis width', (Chart, selector) => {
    const wrapper = mountWithTheme(
      <Chart data={data} dataKey="name" categories={['value']} showAnimation={false} />
    );
    const element = wrapper.getDOMNode();
    expect(element.querySelectorAll(selector).length).toBeGreaterThan(0);
    expect(element.outerHTML).not.toContain('NaN');
    expect(element.outerHTML).not.toContain('undefined');
  });

  it('uses an explicit zero-width axis', () => {
    const wrapper = mountWithTheme(
      <BarChart
        data={data}
        dataKey="name"
        categories={['value']}
        yAxisWidth={0}
        showAnimation={false}
      />
    );
    const axis = wrapper.getDOMNode().querySelector('.recharts-yAxis');
    expect(axis).toBeNull();
    expect(wrapper.getDOMNode().querySelectorAll('.recharts-bar-rectangle path')).toHaveLength(2);
    expect(wrapper.getDOMNode().outerHTML).not.toContain('NaN');
  });
});
