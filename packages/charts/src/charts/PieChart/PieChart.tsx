import React from 'react';

import {
  Pie,
  PieChart as ReChartsDonutChart,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';

import { ChartBaseProps, ValueFormatter } from '../../types';
import { defaultValueFormatter, getDefaultHexColors } from '../../utils';
import { Tooltip as TooltipContent } from '../../components/Tooltip';
import { Legend as LegendContent } from '../../components/Legend';

type ChartVariant = 'donut' | 'pie';

export interface PieChartProps extends Omit<ChartBaseProps, 'dataKey' | 'categories'> {
  data: any[];
  category?: string;
  dataKey?: string;
  colors?: string[];
  variant?: ChartVariant;
  label?: string | React.ReactNode;
  showAnimation?: boolean;
  valueFormatter?: ValueFormatter;
  innerRadius?: number;
  outerRadius?: number;
  customTooltip?: (payload: any[]) => React.ReactNode;
}

const parseData = (data: any[], colors?: string[]) =>
  data.map((dataPoint, idx) => {
    return {
      ...dataPoint,
      fill: colors[idx],
    };
  });

export const PieChart = ({
  data = [],
  category = 'value',
  dataKey = 'name',
  colors = getDefaultHexColors(),
  variant = 'donut',
  valueFormatter = defaultValueFormatter,
  label,
  showAnimation = true,
  showTooltip = true,
  showLegend = false,
  innerRadius = 75,
  outerRadius = 100,
  customTooltip,
  legendVerticalAlign = 'top',
  legendAlign = 'right',
  legendFormatter,
  // maxActiveCategories = 50,
  ...rest
}: PieChartProps) => {
  const isDonut = variant === 'donut';

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ReChartsDonutChart {...rest}>
        <Pie
          data={parseData(data, colors)}
          cx="50%"
          cy="50%"
          startAngle={90}
          endAngle={-270}
          innerRadius={isDonut ? `${innerRadius}%` : '0%'}
          outerRadius={`${outerRadius}%`}
          paddingAngle={0}
          dataKey={category}
          nameKey={dataKey}
          isAnimationActive={showAnimation}
          animationDuration={1000}
        />
        {showLegend ? (
          <Legend
            verticalAlign={legendVerticalAlign}
            align={legendAlign}
            height={40}
            content={({ payload }) => (
              <LegendContent payload={payload} formatter={legendFormatter} />
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
            content={({ payload }) =>
              (customTooltip && customTooltip(payload)) || (
                <TooltipContent payload={payload} label={label} valueFormatter={valueFormatter} />
              )
            }
          />
        ) : null}
      </ReChartsDonutChart>
    </ResponsiveContainer>
  );
};
