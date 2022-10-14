import { Button, Link, TextField } from '@mui/material';
import React, { FC, memo } from 'react';
import { useForm } from 'react-hook-form';

import { AUTH_FIELDS } from '../../../constants/fields/auth';
import { useFieldProps } from '../../../hooks/useFieldProps';
import { FieldsSetStyled, FormStyled } from '../../../styles/form';
import { TAuth } from '../../../types/form/auth';

interface TAuthProps {
  onSubmit: (data: TAuth) => void;
}

const Login: FC<TAuthProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TAuth>({ mode: 'all' });

  const getFieldProps = useFieldProps(AUTH_FIELDS, register, errors);

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <FieldsSetStyled>
        <TextField {...getFieldProps('email')} />
        <TextField type="password" {...getFieldProps('password')} />
        {/* <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} />}
            label={AUTH_FIELDS.remember.label}
          /> */}
      </FieldsSetStyled>
      <Button type="submit" variant="outlined" disabled={!isValid}>
        Войти
      </Button>
    </FormStyled>
  );
};

export default memo(Login);
