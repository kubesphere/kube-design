import CalendarLocale from 'rc-picker/lib/locale/en_US';
import dayjs from 'dayjs';
import { PickerLocale } from '../generatePicker';
import TimePickerLocale from '../../TimePicker/locales/en';

const dayjsLocale = {
  name: 'en',
  weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
  weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
  weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
  months:
    'January_February_March_April_May_June_July_August_September_October_November_December'.split(
      '_'
    ),
  monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
  ordinal: (number, period) => {
    switch (period) {
      case 'W':
        return `${number} week`;
      default:
        return `${number} day`;
    }
  },
  weekStart: 1,
  yearStart: 4,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'YYYY/MM/DD',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A',
    l: 'YYYY/M/D',
    ll: 'MMMM D, YYYY',
    lll: 'MMMM D, YYYY HH:mm',
    llll: 'dddd, MMMM D, YYYY HH:mm',
  },
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    m: '1 minute',
    mm: '%d minutes',
    h: '1 hour',
    hh: '%d hours',
    d: '1 day',
    dd: '%d days',
    M: '1 month',
    MM: '%d months',
    y: '1 year',
    yy: '%d years',
  },
  meridiem: (hour, minute) => {
    const hm = hour * 100 + minute;
    if (hm < 600) {
      return 'midnight';
    }
    if (hm < 900) {
      return 'morning';
    }
    if (hm < 1100) {
      return 'forenoon';
    }
    if (hm < 1300) {
      return 'noon';
    }
    if (hm < 1800) {
      return 'afternoon';
    }
    return 'evening';
  },
};

// @ts-ignore
dayjs.locale(dayjsLocale, null, true);

const locale: PickerLocale = {
  lang: {
    placeholder: 'Select date',
    yearPlaceholder: 'Select year',
    quarterPlaceholder: 'Select quarter',
    monthPlaceholder: 'Select month',
    weekPlaceholder: 'Select week',
    rangePlaceholder: ['Start date', 'End date'],
    rangeYearPlaceholder: ['Start year', 'End year'],
    rangeMonthPlaceholder: ['Start month', 'End month'],
    rangeWeekPlaceholder: ['Start week', 'End week'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};

export default locale;
