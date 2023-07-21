import React, { useState } from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart as ReChartsLineChart,
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

export interface LineChartProps extends ChartBaseProps {
  stack?: boolean;
}

export const LineChart = ({
  data = [],
  dataKey,
  categories = [],
  yAxisWidth,
  valueFormatter = defaultValueFormatter,
  showLegend = true,
  showTooltip = true,
  showXAxis = true,
  showYAxis = true,
  showAnimation,
  startEndOnly = false,
  showGridLines = true,
  autoMinValue = false,
  minValue,
  maxValue,
  colors,
  legendVerticalAlign = 'top',
  legendAlign = 'right',
  legendFormatter,
  maxActiveCategories = 50,
  ...rest
}: LineChartProps) => {
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
      <ReChartsLineChart data={data} {...rest}>
        {showGridLines ? (
          <CartesianGrid stroke="#d8dee5" strokeDasharray="2 2" horizontal vertical={false} />
        ) : null}
        <XAxis
          hide={!showXAxis}
          dataKey={dataKey}
          tick={{ transform: 'translate(0, 6)' }}
          ticks={startEndOnly ? [data[0][dataKey], data[data.length - 1][dataKey]] : undefined}
          style={{
            fontSize: '12px',
            fontFamily: 'Inter; Helvetica',
          }}
          interval="preserveStartEnd"
          tickLine={false}
          axisLine={false}
          minTickGap={5}
        />
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
          tickFormatter={valueFormatter}
        />
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
            content={({ active, payload, label }) => (
              <TooltipContent
                active={active}
                payload={payload}
                label={label}
                valueFormatter={valueFormatter}
                legendFormatter={legendFormatter}
              />
            )}
          />
        ) : null}
        {categories.map((category) => (
          <Line
            key={category}
            name={category}
            type="linear"
            dataKey={category}
            stroke={categoryColors.get(category)}
            fill={`url(#${categoryColors.get(category)})`}
            strokeWidth={1}
            dot={false}
            isAnimationActive={showAnimation}
            hide={!activeCategories.includes(category)}
          />
        ))}
      </ReChartsLineChart>
    </ResponsiveContainer>
  );
};
