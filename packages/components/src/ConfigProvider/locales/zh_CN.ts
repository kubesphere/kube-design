import { ILocale } from '../LocaleProvider/types';
import PickerLocale from '../../DatePicker/locales/zh_CN';

const localeValues: ILocale = {
  Modal: {
    okText: '确定',
    cancelText: '取消',
    justOkText: '知道了',
  },
  DatePicker: PickerLocale,
};

export default localeValues;
