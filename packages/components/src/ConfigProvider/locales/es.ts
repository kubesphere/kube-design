import { ILocale } from '../LocaleProvider/types';
import PickerLocale from '../../DatePicker/locales/es';

const localeValues: ILocale = {
  Empty: { noData: 'No hay datos' },
  Modal: {
    okText: 'Aceptar',
    cancelText: 'Cancelar',
    justOkText: 'Aceptar',
  },
  Pagination: {
    totalItems: 'Total:',
  },
  DatePicker: PickerLocale,
};

export default localeValues;
