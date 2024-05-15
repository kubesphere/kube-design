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
    limit: '每頁顯示:',
  },
  DatePicker: PickerLocale,
  Table: {
    emptyText: '暫無資料',
    matchEmptyText: '無匹配資料',
    batchCancel: '取消選擇',
    createText: '創建',
    matchCanText: '你可以嘗試',
    matchOrText: '或',
    refresh: '刷新',
    clearSearch: '清除搜索條件',
    settingMenuText: '定制內容',
    operate: '操作',
    ascendingOrder: '升序',
    descendingOrder: '降序',
    Filter: '篩選',
  },
};

export default localeValues;
