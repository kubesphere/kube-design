import { ILocale } from '../LocaleProvider/types';
import PickerLocale from '../../DatePicker/locales/es';

const localeValues: ILocale = {
  Modal: {
    okText: 'Aceptar',
    cancelText: 'Cancelar',
    justOkText: 'Aceptar',
  },
  DatePicker: PickerLocale,
};

export default localeValues;
