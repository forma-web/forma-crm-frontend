import { TFieldsData } from '../../types/form';
import { TUserFields } from '../../types/forms/user';
import { validEmailField, validRequiredTextField, validTextField } from '../check';

export const ACCOUNT_FIELDS: TFieldsData<TUserFields> = {
  first_name: {
    label: 'Имя',
    defaultCheck: validRequiredTextField,
  },
  last_name: {
    label: 'Фамилия',
    defaultCheck: validRequiredTextField,
  },
  middle_name: {
    label: 'Отчество',
    defaultCheck: validTextField,
  },
  birth_date: {
    label: 'День рождения',
  },
  sex: {
    label: 'Пол',
  },
  email: {
    label: 'Email',
    defaultCheck: validEmailField,
  },
  phone: {
    label: 'Телефон',
  },
};
