// eslint-disable-next-line import/no-cycle
import { ILocale } from '../LocaleProvider/types';
// eslint-disable-next-line import/no-cycle
import PickerLocale from '../../DatePicker/locales/en_US';

const localeValues: ILocale = {
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK',
  },
  DatePicker: PickerLocale,
};

export default localeValues;
