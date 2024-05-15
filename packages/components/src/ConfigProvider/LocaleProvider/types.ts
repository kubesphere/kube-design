import { ModalLocale } from '../../Modal/locale';
import { PickerLocale } from '../../DatePicker/generatePicker';

export interface ILocale {
  Empty?: { noData: string };
  Modal?: ModalLocale;
  Pagination?: { totalItems: string; limit: string };
  DatePicker?: PickerLocale;
  Table?: {
    emptyText: string;
    matchEmptyText: string;
    batchCancel: string;
    createText: string;
    matchCanText: string;
    matchOrText: string;
    refresh: string;
    clearSearch: string;
    settingMenuText: string;
    operate: string;
    ascendingOrder: string;
    descendingOrder: string;
    Filter: string;
  };
}

export type Locale = 'en' | 'zh' | 'zh-tw' | 'es';
