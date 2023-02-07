export interface ChartBaseProps {
  data: any[];
  categories: string[];
  colors?: string[];
  height?: number | string;
  width?: number | string;
  dataKey: string;
  showXAxis?: boolean;
  showYAxis?: boolean;
  yAxisWidth?: number;
  showAnimation?: boolean;
  showTooltip?: boolean;
  showGradient?: boolean;
  showLegend?: boolean;
  showGridLines?: boolean;
  autoMinValue?: boolean;
  minValue?: number;
  maxValue?: number;
  startEndOnly?: boolean;
  valueFormatter?: ValueFormatter;
  legendVerticalAlign?: 'top' | 'middle' | 'bottom';
  legendAlign?: 'left' | 'center' | 'right';
  legendFormatter?: LegendFormatter;
  maxActiveCategories?: number;
}

export type ValueFormatter = {
  (value: number): string;
};

export type LegendFormatter = {
  (legend: LegendPayload): any;
};

export interface LegendPayload {
  color: string;
  dataKey: string;
  value: string;
  inactive: boolean;
  type: string;
}
