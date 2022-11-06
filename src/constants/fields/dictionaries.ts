import { TFieldsData } from '../../types/form';
import { TDepartmentFields, TOfficesFields } from '../../types/forms/company';
import { validRequiredTextField } from '../check';

export const DEPARTMENT_FIELDS: TFieldsData<TDepartmentFields> = {
  name: {
    label: 'Отдел',
    defaultCheck: validRequiredTextField,
  },
};

export const OFFICE_FIELDS: TFieldsData<TOfficesFields> = {
  name: {
    label: 'Филиал',
    defaultCheck: validRequiredTextField,
  },
  address: {
    label: 'Адрес',
    defaultCheck: validRequiredTextField,
  },
};
