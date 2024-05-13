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
    limit: '每页显示:',
  },
  DatePicker: PickerLocale,
  Table: {
    emptyText: '暂无数据',
    matchEmptyText: '未发现匹配的结果',
    batchCancel: '取消选择',
    createText: '创建',
    matchCanText: '你可以尝试',
    matchOrText: '或',
    refresh: '刷新',
    clearSearch: '清除搜索条件',
    settingMenuText: '定制内容',
    operate: '操作',
    ascendingOrder: '升序',
    descendingOrder: '降序',
    Filter: '筛选',
  },
};

export default localeValues;
