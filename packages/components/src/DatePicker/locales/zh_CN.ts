import CalendarLocale from 'rc-picker/lib/locale/zh_CN';
import TimePickerLocale from '../../TimePicker/locales/zh_CN';
import { PickerLocale } from '../generatePicker';

const locale: PickerLocale = {
  lang: {
    placeholder: '请选择日期',
    yearPlaceholder: '请选择年份',
    quarterPlaceholder: '请选择季度',
    monthPlaceholder: '请选择月份',
    weekPlaceholder: '请选择周',
    rangePlaceholder: ['开始日期', '结束日期'],
    rangeYearPlaceholder: ['开始年份', '结束年份'],
    rangeMonthPlaceholder: ['开始月份', '结束月份'],
    rangeWeekPlaceholder: ['开始周', '结束周'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};

export default locale;
