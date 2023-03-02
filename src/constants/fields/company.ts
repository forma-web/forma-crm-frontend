import { TFieldsData } from '../../types/form';
import { TCompanyFields, TCreateCompany } from '../../types/forms/company';
import { validRequiredTextField, validTextField } from '../check';

export const CREATE_COMPANY_FIELDS: TFieldsData<TCreateCompany> = {
  name: {
    label: 'Название компании',
    defaultCheck: validRequiredTextField,
  },
};

export const COMPANY_FIELDS: TFieldsData<TCompanyFields> = {
  name: CREATE_COMPANY_FIELDS.name,
  inn: {
    label: 'ИНН',
    defaultCheck: validTextField,
  },
  address: {
    label: 'Адрес',
    defaultCheck: validTextField,
  },
};
