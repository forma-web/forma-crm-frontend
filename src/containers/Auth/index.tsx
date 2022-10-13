import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import { AUTH_FIELDS } from '../../constants/fields/auth';
import { useFieldProps } from '../../hooks/useFieldProps';
import { TAuth } from '../../types/form/auth';
import { AuthBlock, AuthFields, AuthForm } from './styled';

interface TAuthProps {
  onSubmit: (data: TAuth) => void;
}

const Auth: FC<TAuthProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TAuth>({ mode: 'all' });

  const getFieldProps = useFieldProps(AUTH_FIELDS, register, errors);

  return (
    <AuthBlock>
      {/* <AuthLogo /> */}
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <AuthFields>
          <TextField {...getFieldProps('email')} />
          <TextField type="password" {...getFieldProps('password')} />
          {/* <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} />}
            label={AUTH_FIELDS.remember.label}
          /> */}
        </AuthFields>
        <Button type="submit" variant="outlined" disabled={!isValid}>
          Войти
        </Button>
      </AuthForm>
    </AuthBlock>
  );
};

export default Auth;
