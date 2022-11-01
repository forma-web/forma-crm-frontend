import { TFieldsData } from '../../types/form';
import { TCreateCompany } from '../../types/forms/company';
import { validRequiredTextField } from '../check';

export const CREATE_COMPANY_FIELDS: TFieldsData<TCreateCompany> = {
  name: {
    label: 'Название компании',
    defaultCheck: validRequiredTextField,
  },
};
