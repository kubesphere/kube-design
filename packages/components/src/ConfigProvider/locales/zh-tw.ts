import { ILocale } from '../LocaleProvider/types';
import PickerLocale from '../../DatePicker/locales/zh-tw';

const localeValues: ILocale = {
  Empty: { noData: '無此資料' },
  Modal: {
    okText: '確定',
    cancelText: '取消',
    justOkText: '知道了',
  },
  Pagination: {
    totalItems: '總數:',
  },
  DatePicker: PickerLocale,
};

export default localeValues;
