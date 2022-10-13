import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useGetJwtTokenMutation } from '../../api/auth';
import { ERoutes } from '../../config';
import { useFieldProps } from '../../hooks/useFieldProps';
import { TAuth } from '../../types/form/auth';
import { AUTH_FIELDS } from './constants/fields';
import { AuthBlock, AuthFields, AuthForm } from './styled';

const AuthPage = () => {
  const [getJwtToken, result] = useGetJwtTokenMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TAuth>({ mode: 'all' });

  const onSubmit = (data: TAuth) => {
    const { remember, ...body } = data;
    getJwtToken(body);
  };

  useEffect(() => {
    if (result.data) {
      console.log(result);
      // localStorage.setItem('jwt', result.data);
      // navigate(ERoutes.home);
    }
  }, [result.data]);

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

export default AuthPage;
