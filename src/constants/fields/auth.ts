import { TFieldsData } from '../../types/form';
import { TLogin, TSingUp } from '../../types/forms/auth';
import { validEmailField, validPasswordField, validRequiredTextField } from '../check';

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
    defaultCheck: validRequiredTextField,
  },
  last_name: {
    label: 'Фамилия',
    defaultCheck: validRequiredTextField,
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
