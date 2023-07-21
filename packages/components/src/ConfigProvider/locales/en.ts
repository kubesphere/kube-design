import { ILocale } from '../LocaleProvider/types';
import PickerLocale from '../../DatePicker/locales/en';

const localeValues: ILocale = {
  Empty: { noData: 'No Data' },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK',
  },
  Pagination: {
    totalItems: 'Total:',
  },
  DatePicker: PickerLocale,
};

export default localeValues;
