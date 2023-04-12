import { ILocale } from '../LocaleProvider/types';
import PickerLocale from '../../DatePicker/locales/zh';

const localeValues: ILocale = {
  Empty: {
    noData: '暂无数据',
  },
  Modal: {
    okText: '确定',
    cancelText: '取消',
    justOkText: '知道了',
  },
  Pagination: {
    totalItems: '总数:',
  },
  DatePicker: PickerLocale,
};

export default localeValues;
