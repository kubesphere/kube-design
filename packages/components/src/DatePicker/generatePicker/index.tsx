import {
  CSSProperties,
  ReactNode,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';
import { GenerateConfig } from 'rc-picker/lib/generate';
import { PickerProps as RCPickerProps, RangePickerProps as RCRangePickerProps } from 'rc-picker';
import { BaseInfo, Locale as RcPickerLocale, SharedPickerProps } from 'rc-picker/lib/interface';
import { TimePickerLocale } from '../../TimePicker/TimePicker';
import PickerButton from '../PickerButton';
import { KubedSizes } from '../../theme';
import generateSinglePicker from './generateSinglePicker';
import generateRangePicker from './generateRangePicker';
import { CommonPickerMethods } from './interface';

export const Components = { button: PickerButton };

type InjectDefaultProps<Props> = Omit<
  Props,
  'locale' | 'generateConfig' | 'hideHeader' | 'components'
> & {
  locale?: PickerLocale;
  size?: KubedSizes;
  bordered?: boolean;
  dropdownClassName?: string;
  popupClassName?: string;
  popupStyle?: CSSProperties;
  dropdownAlign?: SharedPickerProps<object>['popupAlign'];
};

export type PickerLocale = {
  lang: RcPickerLocale & AdditionalPickerLocaleLangProps;
  timePickerLocale: TimePickerLocale;
} & AdditionalPickerLocaleProps;

export type AdditionalPickerLocaleProps = {
  dateFormat?: string;
  dateTimeFormat?: string;
  weekFormat?: string;
  monthFormat?: string;
};

export type AdditionalPickerLocaleLangProps = {
  placeholder: string;
  yearPlaceholder?: string;
  quarterPlaceholder?: string;
  monthPlaceholder?: string;
  weekPlaceholder?: string;
  rangeYearPlaceholder?: [string, string];
  rangeMonthPlaceholder?: [string, string];
  rangeWeekPlaceholder?: [string, string];
  rangePlaceholder?: [string, string];
};

// Picker Props
export type PickerProps<DateType extends object> = InjectDefaultProps<
  Omit<
    RCPickerProps<DateType>,
    'multiple' | 'value' | 'defaultValue' | 'onChange' | 'onCalendarChange' | 'onOk'
  >
> & {
  value?: DateType | null;
  defaultValue?: DateType;
  onChange?: (date: DateType | null, dateString: string) => void;
  onCalendarChange?: (date: DateType | null, dateString: string, info: BaseInfo) => void;
  onOk?: (date: DateType) => void;
};

export type PickerBaseProps<DateType extends object> = PickerProps<DateType>;
export type PickerDateProps<DateType extends object> = PickerProps<DateType>;
export type PickerTimeProps<DateType extends object> = PickerProps<DateType>;

// Range Picker Props
export type RangePickerProps<DateType extends object> = InjectDefaultProps<
  Omit<RCRangePickerProps<DateType>, 'dateRender'>
> & {
  /** Use cellRender for new integrations. */
  dateRender?: (
    currentDate: DateType,
    today: DateType,
    info: { range: 'start' | 'end' }
  ) => ReactNode;
};
export type RangePickerBaseProps<DateType extends object> = RangePickerProps<DateType>;
export type RangePickerDateProps<DateType extends object> = RangePickerProps<DateType>;
export type RangePickerTimeProps<DateType extends object> = RangePickerProps<DateType>;

type PickerComponent<Props> = ForwardRefExoticComponent<
  PropsWithoutRef<Props> & RefAttributes<CommonPickerMethods>
>;

export type GeneratedPicker<DateType extends object> = PickerComponent<PickerProps<DateType>> & {
  WeekPicker: PickerComponent<Omit<PickerDateProps<DateType>, 'picker'>>;
  MonthPicker: PickerComponent<Omit<PickerDateProps<DateType>, 'picker'>>;
  YearPicker: PickerComponent<Omit<PickerDateProps<DateType>, 'picker'>>;
  RangePicker: PickerComponent<RangePickerProps<DateType>>;
  TimePicker: PickerComponent<Omit<PickerTimeProps<DateType>, 'picker'>>;
  QuarterPicker: PickerComponent<Omit<PickerDateProps<DateType>, 'picker'>>;
};

function generatePicker<DateType extends object>(
  generateConfig: GenerateConfig<DateType>
): GeneratedPicker<DateType> {
  // =========================== Picker ===========================
  const { DatePicker, WeekPicker, MonthPicker, YearPicker, TimePicker, QuarterPicker } =
    generateSinglePicker(generateConfig);

  // ======================== Range Picker ========================
  const RangePicker = generateRangePicker(generateConfig);

  // =========================== Export ===========================
  const MergedDatePicker = DatePicker as GeneratedPicker<DateType>;
  MergedDatePicker.WeekPicker = WeekPicker;
  MergedDatePicker.MonthPicker = MonthPicker;
  MergedDatePicker.YearPicker = YearPicker;
  MergedDatePicker.RangePicker = RangePicker;
  MergedDatePicker.TimePicker = TimePicker;
  MergedDatePicker.QuarterPicker = QuarterPicker;

  return MergedDatePicker;
}

export default generatePicker;
