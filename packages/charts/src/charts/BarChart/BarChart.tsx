import React, { useState } from 'react';
import {
  Bar,
  CartesianGrid,
  Legend,
  BarChart as ReChartsBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { AxisDomain } from 'recharts/types/util/types';
import { remove } from 'lodash';

import { ChartBaseProps } from '../../types';
import { defaultValueFormatter, getYAxisDomain, getCategoryColors } from '../../utils';
import { Legend as LegendContent } from '../../components/Legend';
import { Tooltip as TooltipContent } from '../../components/Tooltip';

export interface BarChartProps extends ChartBaseProps {
  stack?: boolean;
  layout?: 'vertical' | 'horizontal';
  relative?: boolean;
}

export const BarChart = ({
  data = [],
  dataKey,
  categories = [],
  // width,
  // height,
  layout = 'horizontal',
  yAxisWidth,
  valueFormatter = defaultValueFormatter,
  showGradient,
  showLegend = true,
  showTooltip = true,
  showXAxis = true,
  showYAxis = true,
  showAnimation,
  stack = false,
  relative = false,
  startEndOnly = false,
  showGridLines = true,
  autoMinValue = false,
  minValue,
  maxValue,
  colors,
  customTooltip,
  legendVerticalAlign = 'top',
  legendAlign = 'right',
  legendFormatter,
  maxActiveCategories = 50,
  ...rest
}: BarChartProps) => {
  const initialActiveCats = categories.slice(0, maxActiveCategories);
  const [activeCategories, setActiveCategories] = useState(initialActiveCats);
  const yAxisDomain = getYAxisDomain(autoMinValue, minValue, maxValue);
  const categoryColors = getCategoryColors(categories, colors);

  const handleLegendClick = (category) => {
    const newActiveCategories = [...activeCategories];

    if (newActiveCategories.includes(category)) {
      remove(newActiveCategories, (item) => item === category);
    } else {
      newActiveCategories.push(category);
    }

    setActiveCategories(newActiveCategories);
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ReChartsBarChart
        data={data}
        stackOffset={relative ? 'expand' : 'none'}
        layout={layout === 'vertical' ? 'vertical' : 'horizontal'}
        {...rest}
      >
        {showGridLines ? (
          <CartesianGrid
            stroke="#d8dee5"
            strokeDasharray="2 2"
            horizontal={layout !== 'vertical'}
            vertical={layout === 'vertical'}
          />
        ) : null}
        {layout !== 'vertical' ? (
          <XAxis
            hide={!showXAxis}
            dataKey={dataKey}
            interval="preserveStartEnd"
            tick={{ transform: 'translate(0, 6)' }} //padding between labels and axis
            ticks={startEndOnly ? [data[0][dataKey], data[data.length - 1][dataKey]] : undefined}
            style={{
              fontSize: '12px',
              fontFamily: 'Inter; Helvetica',
              marginTop: '20px',
            }}
            tickLine={false}
            axisLine={false}
          />
        ) : (
          <XAxis
            hide={!showXAxis}
            type="number"
            tick={{ transform: 'translate(-3, 0)' }}
            domain={yAxisDomain as AxisDomain}
            style={{
              fontSize: '12px',
              fontFamily: 'Inter; Helvetica',
            }}
            tickLine={false}
            axisLine={false}
            tickFormatter={valueFormatter}
            padding={{ left: 10, right: 10 }}
            minTickGap={5}
          />
        )}
        {layout !== 'vertical' ? (
          <YAxis
            width={yAxisWidth}
            hide={!showYAxis}
            axisLine={false}
            tickLine={false}
            type="number"
            domain={yAxisDomain as AxisDomain}
            tick={{ transform: 'translate(-3, 0)' }}
            style={{
              fontSize: '12px',
              fontFamily: 'Inter; Helvetica',
            }}
            tickFormatter={
              relative ? (value: number) => `${(value * 100).toString()} %` : valueFormatter
            }
          />
        ) : (
          <YAxis
            width={yAxisWidth}
            hide={!showYAxis}
            dataKey={dataKey}
            axisLine={false}
            tickLine={false}
            ticks={startEndOnly ? [data[0][dataKey], data[data.length - 1][dataKey]] : undefined}
            type="category"
            interval="preserveStartEnd"
            tick={{ transform: 'translate(0, 6)' }}
            style={{
              fontSize: '12px',
              fontFamily: 'Inter; Helvetica',
            }}
          />
        )}
        {showLegend ? (
          <Legend
            verticalAlign={legendVerticalAlign}
            align={legendAlign}
            height={40}
            content={({ payload }) => (
              <LegendContent
                onClick={handleLegendClick}
                payload={payload}
                formatter={legendFormatter}
              />
            )}
            wrapperStyle={{
              marginLeft: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: legendAlign,
            }}
          />
        ) : null}
        {showTooltip ? (
          <Tooltip
            wrapperStyle={{ outline: 'none' }}
            content={({ active, payload, label }) =>
              (customTooltip && customTooltip(payload)) || (
                <TooltipContent
                  active={active}
                  payload={payload}
                  label={label}
                  valueFormatter={valueFormatter}
                  legendFormatter={legendFormatter}
                />
              )
            }
          />
        ) : null}
        {categories.map((category) => (
          <defs key={category}>
            {showGradient ? (
              <linearGradient id={categoryColors.get(category)} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={categoryColors.get(category)} stopOpacity={0.4} />
                <stop offset="95%" stopColor={categoryColors.get(category)} stopOpacity={0} />
              </linearGradient>
            ) : (
              <linearGradient id={categoryColors.get(category)} x1="0" y1="0" x2="0" y2="1">
                <stop stopColor={categoryColors.get(category)} stopOpacity={0.1} />
              </linearGradient>
            )}
          </defs>
        ))}
        {categories.map((category) => (
          <Bar
            key={category}
            name={category}
            type="linear"
            dataKey={category}
            stroke={categoryColors.get(category)}
            fill={categoryColors.get(category)}
            isAnimationActive={showAnimation}
            stackId={stack || relative ? 'a' : undefined}
            hide={!activeCategories.includes(category)}
          />
        ))}
      </ReChartsBarChart>
    </ResponsiveContainer>
  );
};
