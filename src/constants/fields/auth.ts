import { TFieldsData } from '../../types/form';
import { TLogin, TSingUp } from '../../types/form/auth';
import { validEmailField, validPasswordField, validRequired } from '../check';

export const LOGIN_FIELDS: TFieldsData<TLogin> = {
  email: {
    label: 'Email',
    defaultCheck: validEmailField,
  },
  password: {
    label: 'Пароль',
    defaultCheck: validPasswordField,
  },
  remember: {
    label: 'Запомнить меня',
  },
};

export const SINGUP_FIELDS: TFieldsData<TSingUp> = {
  first_name: {
    label: 'Имя',
    defaultCheck: validRequired,
  },
  last_name: {
    label: 'Фамилия',
    defaultCheck: validRequired,
  },
  email: {
    label: 'Email',
    defaultCheck: validEmailField,
  },
  password: {
    label: 'Пароль',
    defaultCheck: validPasswordField,
  },
};
