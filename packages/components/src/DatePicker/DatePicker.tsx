// https://github.com/ant-design/ant-design/blob/master/components/date-picker/index.tsx
import { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generatePicker, {
  PickerProps,
  PickerDateProps,
  RangePickerProps as BaseRangePickerProps,
} from './generatePicker';

// import 'dayjs/locale/zh';
// import 'dayjs/locale/zh-tw';
// import 'dayjs/locale/es';

export type DatePickerProps = PickerProps<Dayjs>;
export type MonthPickerProps = Omit<PickerDateProps<Dayjs>, 'picker'>;
export type WeekPickerProps = Omit<PickerDateProps<Dayjs>, 'picker'>;
export type RangePickerProps = BaseRangePickerProps<Dayjs>;

export const DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);

DatePicker.displayName = '@kubed/components/DatePicker';
