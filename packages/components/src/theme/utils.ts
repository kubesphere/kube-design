import { KubedTheme } from './types';
import { DeepPartial } from '../utils/types';
import lightTheme from './presets/default';
import darkTheme from './presets/dark';

export const getSizeValue = (
  size: string | number,
  sizes: Record<string, any>,
  defaultSize: string = 'md'
) => {
  if (typeof size === 'number') {
    return `${size}px`;
  }

  return sizes[size] || size || sizes[defaultSize];
};

export const getColor = (color: string, theme: KubedTheme, defaultColor?: string) => {
  const { palette } = theme;
  if (color === 'primary' || color === 'secondary') {
    return palette.colors[palette[color]][2];
  }

  if (palette[color]) {
    return palette[color];
  }
  if (palette.colors[color]) {
    return palette.colors[color][2];
  }
  return palette[defaultColor] || palette.accents_5;
};

export type UserTheme = DeepPartial<KubedTheme> & { type: string };

export const isObject = (target: unknown) => target && typeof target === 'object';

export const deepDuplicable = <T extends Record<string, unknown>>(source: T, target: T): T => {
  if (!isObject(target) || !isObject(source)) return source as T;

  const sourceKeys = Object.keys(source) as Array<keyof T>;
  const result = {} as any;
  // eslint-disable-next-line no-restricted-syntax
  for (const key of sourceKeys) {
    const sourceValue = source[key];
    const targetValue = target[key];

    if (Array.isArray(sourceValue) && Array.isArray(targetValue)) {
      result[key] = targetValue.concat(sourceValue);
    } else if (isObject(sourceValue) && isObject(targetValue)) {
      result[key] = deepDuplicable(sourceValue as Record<string, unknown>, {
        ...(targetValue as Record<string, unknown>),
      });
    } else if (targetValue) {
      result[key] = targetValue;
    } else {
      result[key] = sourceValue;
    }
  }
  return result;
};

const getPresets = (): Array<KubedTheme> => {
  return [lightTheme, darkTheme];
};

const getPresetStaticTheme = (): KubedTheme => {
  return lightTheme;
};

const getPrimaryColor = (theme: KubedTheme, main: boolean = true): string | Array<string> => {
  const { colors, primary } = theme.palette;
  if (main) return colors[primary][2];
  return colors[primary];
};

const getSecondaryColor = (theme: KubedTheme, main: boolean = true): string | Array<string> => {
  const { colors, secondary } = theme.palette;
  if (main) return colors[secondary][2];
  return colors[secondary];
};

const isAvailableThemeType = (type?: string): boolean => {
  if (!type) return false;
  const presetThemes = getPresets();
  const hasType = presetThemes.find((theme) => theme.type === type);
  return !hasType;
};

const isPresetTheme = (themeOrType?: UserTheme | KubedTheme | string): boolean => {
  if (!themeOrType) return false;
  const isType = typeof themeOrType === 'string';
  const type = isType
    ? (themeOrType as string)
    : (themeOrType as Exclude<typeof themeOrType, string>).type;
  return !isAvailableThemeType(type);
};

const hasUserCustomTheme = (themes: Array<KubedTheme> = []): boolean => {
  return !!themes.find((item) => isAvailableThemeType(item.type));
};

const create = (base: KubedTheme, custom: UserTheme): KubedTheme => {
  if (!isAvailableThemeType(custom.type)) {
    throw new Error('Duplicate or unavailable theme type');
  }

  return deepDuplicable(base, custom) as KubedTheme;
};

const createFromDark = (custom: UserTheme) => create(darkTheme, custom);
const createFromLight = (custom: UserTheme) => create(lightTheme, custom);

const Utils = {
  isPresetTheme,
  isAvailableThemeType,
  hasUserCustomTheme,
  getPresets,
  getPresetStaticTheme,
  create,
  createFromDark,
  createFromLight,
  getSizeValue,
  getColor,
  getPrimaryColor,
  getSecondaryColor,
};

export default Utils;
