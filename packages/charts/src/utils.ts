import { ValueFormatter } from './types';
import { COLORS_MAP, DEFAULT_COLORS } from './constants';

export const defaultValueFormatter: ValueFormatter = (value: number) => value.toString();

export const getYAxisDomain = (
  autoMinValue: boolean,
  minValue: number | undefined,
  maxValue: number | undefined
) => {
  const minDomain = autoMinValue ? 'auto' : minValue ?? 0;
  const maxDomain = maxValue ?? 'auto';
  return [minDomain, maxDomain];
};

export const getColor = (color: string) => {
  return COLORS_MAP[color];
};

export const getDefaultHexColors = () => DEFAULT_COLORS.map((color) => COLORS_MAP[color]);

export const getCategoryColors = (categories: string[], colors: string[]): Map<string, string> => {
  const hexColors = colors || getDefaultHexColors();
  const categoryColors = new Map<string, string>();
  categories.forEach((category, idx) => {
    categoryColors.set(category, hexColors[idx]);
  });
  return categoryColors;
};

export const getCategoryKeys = () => {};

export const removeValueFromArray = (value: any, array: any[]): any[] => {
  const index = array.indexOf(value);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
};

export const getCategoryMap = (categories: string[], array: string[] = []): Map<string, string> => {
  const categoryMap = new Map<string, string>();
  categories.forEach((category, idx) => {
    categoryMap.set(category, array[idx]);
  });
  return categoryMap;
};
