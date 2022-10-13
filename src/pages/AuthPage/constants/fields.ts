import { TFieldsData } from '../../../types/form';
import { TAuth } from '../../../types/form/auth';
import { validEmailField, validPasswordField } from './check';

export const AUTH_FIELDS: TFieldsData<TAuth> = {
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
