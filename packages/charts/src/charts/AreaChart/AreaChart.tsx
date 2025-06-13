import React, { useState } from 'react';
import {
  Area,
  CartesianGrid,
  Legend,
  AreaChart as ReChartsAreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  XAxisProps,
  YAxisProps,
} from 'recharts';
import { AxisDomain } from 'recharts/types/util/types';
import { remove } from 'lodash';

import { ChartBaseProps } from '../../types';
import {
  defaultValueFormatter,
  getYAxisDomain,
  getCategoryColors,
  getCategoryMap,
} from '../../utils';
import { Legend as LegendContent } from '../../components/Legend';
import { Tooltip as TooltipContent } from '../../components/Tooltip';

export interface AreaChartProps extends ChartBaseProps {
  stack?: boolean;
  xAxisProps?: XAxisProps;
  yAxisProps?: YAxisProps;
  strokeDasharrays?: any[];
  fillOpacitys?: any[];
}

export const AreaChart = ({
  data = [],
  dataKey,
  categories = [],
  // width,
  // height,
  yAxisWidth,
  valueFormatter = defaultValueFormatter,
  showGradient,
  showLegend = true,
  showTooltip = true,
  showXAxis = true,
  showYAxis = true,
  showAnimation,
  stack = false,
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
  xAxisProps = {},
  yAxisProps = {},
  strokeDasharrays,
  fillOpacitys,
  ...rest
}: AreaChartProps) => {
  const initialActiveCats = categories.slice(0, maxActiveCategories);
  const [activeCategories, setActiveCategories] = useState(initialActiveCats);
  const yAxisDomain = getYAxisDomain(autoMinValue, minValue, maxValue);
  const categoryColors = getCategoryColors(categories, colors);
  const categoryStrokeDasharrays = getCategoryMap(categories, strokeDasharrays);
  const categoryFillOpacitys = getCategoryMap(categories, fillOpacitys);

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
      <ReChartsAreaChart data={data} {...rest}>
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
          {...xAxisProps}
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
          {...yAxisProps}
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
          <Area
            key={category}
            name={category}
            type="linear"
            dataKey={category}
            stroke={categoryColors.get(category)}
            fill={`url(#${categoryColors.get(category)})`}
            strokeDasharray={categoryStrokeDasharrays.get(category)}
            fillOpacity={categoryFillOpacitys.get(category)}
            strokeWidth={1}
            dot={false}
            isAnimationActive={showAnimation}
            stackId={stack ? 'a' : undefined}
            hide={!activeCategories.includes(category)}
          />
        ))}
      </ReChartsAreaChart>
    </ResponsiveContainer>
  );
};
