import { LoadingButton } from '@mui/lab';
import { TextField } from '@mui/material';
import React, { FC, memo } from 'react';
import { useForm } from 'react-hook-form';

import { LOGIN_FIELDS } from '../../../constants/fields/auth';
import { useFieldProps } from '../../../hooks/useFieldProps';
import { FieldsSetStyled, FormStyled } from '../../../styles/form';
import { TLogin } from '../../../types/form/auth';

interface IAuthProps {
  onSubmit: (data: TLogin) => void;
}

const Login: FC<IAuthProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TLogin>({ mode: 'all' });

  const getFieldProps = useFieldProps(LOGIN_FIELDS, register, errors);

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <FieldsSetStyled>
        <TextField {...getFieldProps('email')} />
        <TextField type="password" {...getFieldProps('password')} />
        {/* <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} />}
            label={LOGIN_FIELDS.remember.label}
          /> */}
      </FieldsSetStyled>
      <LoadingButton type="submit" variant="outlined" disabled={!isValid}>
        Войти
      </LoadingButton>
    </FormStyled>
  );
};

export default memo(Login);
