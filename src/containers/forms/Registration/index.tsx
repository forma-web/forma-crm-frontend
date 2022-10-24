import { LoadingButton } from '@mui/lab';
import { TextField } from '@mui/material';
import React, { FC, memo } from 'react';
import { useForm } from 'react-hook-form';

import { SINGUP_FIELDS } from '../../../constants/fields/auth';
import { useFieldProps } from '../../../hooks/useFieldProps';
import { FieldsSetStyled, FormStyled } from '../../../styles/form';
import { TSingUp } from '../../../types/forms/auth';

interface IAuthProps {
  onSubmit: (data: TSingUp) => void;
}

const Registration: FC<IAuthProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TSingUp>({ mode: 'all' });

  const getFieldProps = useFieldProps(SINGUP_FIELDS, register, errors);

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <FieldsSetStyled>
        <TextField {...getFieldProps('first_name')} />
        <TextField {...getFieldProps('last_name')} />
        <TextField {...getFieldProps('email')} />
        <TextField type="password" {...getFieldProps('password')} />
      </FieldsSetStyled>
      <LoadingButton type="submit" variant="outlined" disabled={!isValid}>
        Зарегистрироваться
      </LoadingButton>
    </FormStyled>
  );
};

export default memo(Registration);
