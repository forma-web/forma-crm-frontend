import { TFieldsData } from '../../types/form';
import { TUserFields } from '../../types/forms/user';

export const ACCOUNT_FIELDS: TFieldsData<TUserFields> = {
  first_name: {
    label: 'Имя',
  },
  last_name: {
    label: 'Фамилия',
  },
  middle_name: {
    label: 'Отчество',
  },
  birth_date: {
    label: 'День рождения',
  },
  sex: {
    label: 'Пол',
  },
  email: {
    label: 'Email',
  },
  phone: {
    label: 'Телефон',
  },
};
