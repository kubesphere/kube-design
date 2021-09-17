import { ModalLocale } from '../../Modal/locale';
// eslint-disable-next-line import/no-cycle
import { PickerLocale } from '../../DatePicker/generatePicker';

export interface ILocale {
  Modal?: ModalLocale;
  DatePicker?: PickerLocale;
}
