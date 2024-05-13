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
    limit: 'Limit:',
  },
  DatePicker: PickerLocale,
  Table: {
    emptyText: 'No Data',
    matchEmptyText: 'No Matching Data',
    batchCancel: 'Cancel',
    createText: 'Create',
    matchCanText: 'You can try to',
    matchOrText: 'or',
    refresh: 'Refresh',
    clearSearch: 'clear search conditions',
    settingMenuText: 'Customize Content',
    operate: 'Operate',
    ascendingOrder: 'Ascending Order',
    descendingOrder: 'Descending Order',
    Filter: 'Filter',
  },
};

export default localeValues;
