import { ModalLocale } from '../../Modal/locale';
import { PickerLocale } from '../../DatePicker/generatePicker';

export interface ILocale {
  Empty?: { noData: string };
  Modal?: ModalLocale;
  Pagination?: { totalItems: string };
  DatePicker?: PickerLocale;
}

export type Locale = 'en' | 'zh' | 'zh-tw' | 'es';
