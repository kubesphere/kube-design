import React, { act, Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { Line, LineChart, Legend, Tooltip } from 'recharts';
import { KubedConfigProvider } from '@kubed/components';
import { LineChart as KubedLineChart } from './charts/LineChart/LineChart';
import { AreaChart } from './charts/AreaChart/AreaChart';
import { BarChart } from './charts/BarChart/BarChart';

jest.mock('recharts', () => ({
  ...jest.requireActual('recharts'),
  ResponsiveContainer: ({ children }) =>
    jest.requireActual('react').cloneElement(children, { width: 400, height: 200 }),
}));

it('renders chart series and custom content nested in React 19 fragments', async () => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  try {
    await act(async () =>
      root.render(
        <LineChart width={400} height={200} data={[{ value: 10 }, { value: 20 }]}>
          <Fragment>
            <Line dataKey="value" isAnimationActive={false} />
            <Legend
              content={({ payload }) => <div>{payload.map((entry) => entry.value).join(',')}</div>}
            />
            <Tooltip active content={() => <div>Custom tooltip</div>} />
          </Fragment>
        </LineChart>
      )
    );
    expect(container.querySelector('.recharts-line-curve')).not.toBeNull();
    expect(container.querySelector('.recharts-legend-wrapper').textContent).toBe('value');
    expect(container.textContent).toContain('Custom tooltip');
  } finally {
    act(() => root.unmount());
    container.remove();
  }
});

it.each([KubedLineChart, AreaChart, BarChart])(
  'keeps default and custom axis widths with the automatic JSX runtime',
  async (Chart) => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    const render = (yAxisWidth?: number) =>
      root.render(
        <KubedConfigProvider>
          <Chart
            data={[
              { name: 'one', value: 10 },
              { name: 'two', value: 20 },
            ]}
            dataKey="name"
            categories={['value']}
            yAxisWidth={yAxisWidth}
            showAnimation={false}
          />
        </KubedConfigProvider>
      );
    try {
      await act(async () => render());
      expect(container.innerHTML).not.toContain('NaN');
      const clip = () => container.querySelector('clipPath rect');
      expect(Number(clip().getAttribute('x'))).toBe(65);
      await act(async () => render(90));
      expect(Number(clip().getAttribute('x'))).toBe(95);
    } finally {
      act(() => root.unmount());
      container.remove();
    }
  }
);
