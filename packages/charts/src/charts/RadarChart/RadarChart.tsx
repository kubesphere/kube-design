import React from 'react';
import {
  Radar,
  RadarChart as ReChartsDonutChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import { AxisDomain } from 'recharts/types/util/types';

import { ChartBaseProps } from '../../types';
import { defaultValueFormatter, getDefaultHexColors, getYAxisDomain } from '../../utils';
import { Tooltip as TooltipContent } from '../../components/Tooltip';
import { Legend as LegendContent } from '../../components/Legend';

type Color = {
  fill: string;
  stroke: string;
};

export interface RadarChartProps extends Omit<ChartBaseProps, 'dataKey' | 'colors'> {
  data: any[];
  dataKey?: string;
  gridType?: 'polygon' | 'circle';
  showAngleAxis?: boolean;
  showRadiusAxis?: boolean;
  label?: string | React.ReactNode;
  colors?: Color[] | string[];
  customTooltip?: (payload: any[]) => React.ReactNode;
}

export const RadarChart = ({
  data = [],
  categories = ['value'],
  dataKey = 'name',
  colors = getDefaultHexColors(),
  label,
  gridType,
  showGridLines = true,
  showAnimation = true,
  showTooltip = false,
  showLegend = false,
  showAngleAxis = true,
  showRadiusAxis = true,
  autoMinValue = false,
  minValue,
  maxValue,
  legendVerticalAlign = 'top',
  legendAlign = 'right',
  customTooltip,
  valueFormatter = defaultValueFormatter,
  legendFormatter,
  ...rest
}: RadarChartProps) => {
  const radiusAxisDomain = getYAxisDomain(autoMinValue, minValue, maxValue);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ReChartsDonutChart {...rest} data={data}>
        {showGridLines && <PolarGrid gridType={gridType} />}
        {showAngleAxis && <PolarAngleAxis dataKey={dataKey} />}
        {showRadiusAxis && <PolarRadiusAxis domain={radiusAxisDomain as AxisDomain} />}
        {categories.map((category, index) => {
          const currentColor = colors[index];
          const color =
            typeof currentColor === 'string'
              ? {
                  fill: currentColor,
                }
              : currentColor;

          return (
            <Radar
              {...color}
              dataKey={category}
              isAnimationActive={showAnimation}
              animationDuration={1000}
            />
          );
        })}
        {showLegend && (
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
        )}
        {showTooltip && (
          <Tooltip
            wrapperStyle={{ outline: 'none' }}
            content={({ payload }) =>
              (customTooltip && customTooltip(payload)) || (
                <TooltipContent payload={payload} label={label} valueFormatter={valueFormatter} />
              )
            }
          />
        )}
      </ReChartsDonutChart>
    </ResponsiveContainer>
  );
};
