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
    limit: 'Limite:',
  },
  DatePicker: PickerLocale,
  Table: {
    emptyText: 'No hay datos',
    matchEmptyText: 'No hay datos coincidentes',
    batchCancel: 'Cancelar',
    createText: 'Crear',
    matchCanText: 'Puedes intentar',
    matchOrText: 'o',
    refresh: 'Actualizar',
    clearSearch: 'limpiar condiciones de búsqueda',
    settingMenuText: 'Contenido personalizado',
    operate: 'Operar',
    ascendingOrder: 'Orden ascendente',
    descendingOrder: 'Orden descendente',
    Filter: 'Filtrar',
  },
};

export default localeValues;
