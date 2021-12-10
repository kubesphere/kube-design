import CalendarLocale from 'rc-picker/lib/locale/zh_TW';
import dayjs from 'dayjs';
import TimePickerLocale from '../../TimePicker/locales/zh-tw';
import { PickerLocale } from '../generatePicker';

const dayjsLocale = {
  name: 'zh-tw',
  weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
  weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
  weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
  months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
  monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
  ordinal: (n) => `${n}日`,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'YYYY/MM/DD',
    LL: 'YYYY年M月D日',
    LLL: 'YYYY年M月D日 HH:mm',
    LLLL: 'YYYY年M月D日dddd HH:mm',
    l: 'YYYY/M/D',
    ll: 'YYYY年M月D日',
    lll: 'YYYY年M月D日 HH:mm',
    llll: 'YYYY年M月D日dddd HH:mm',
  },
  relativeTime: {
    future: '%s內',
    past: '%s前',
    s: '幾秒',
    m: '1 分鐘',
    mm: '%d 分鐘',
    h: '1 小時',
    hh: '%d 小時',
    d: '1 天',
    dd: '%d 天',
    M: '1 個月',
    MM: '%d 個月',
    y: '1 年',
    yy: '%d 年',
  },
};

dayjs.locale(dayjsLocale, null, true);

const locale: PickerLocale = {
  lang: {
    placeholder: '請選擇日期',
    yearPlaceholder: '請選擇年份',
    quarterPlaceholder: '請選擇季度',
    monthPlaceholder: '請選擇月份',
    weekPlaceholder: '請選擇周',
    rangePlaceholder: ['開始日期', '結束日期'],
    rangeYearPlaceholder: ['開始年份', '結束年份'],
    rangeMonthPlaceholder: ['開始月份', '結束月份'],
    rangeWeekPlaceholder: ['開始周', '結束周'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};

export default locale;
