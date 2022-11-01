import { LoadingButton } from '@mui/lab';
import { TextField } from '@mui/material';
import React, { FC, memo } from 'react';
import { useForm } from 'react-hook-form';

import { CREATE_COMPANY_FIELDS } from '../../../constants/fields/company';
import { useFieldProps } from '../../../hooks/useFieldProps';
import { FieldsSetStyled, FormStyled } from '../../../styles/form';
import { TCreateCompany } from '../../../types/forms/company';

interface ICreateCompanyProps {
  onSubmit: (data: TCreateCompany) => void;
}

const Login: FC<ICreateCompanyProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TCreateCompany>({ mode: 'all' });

  const getFieldProps = useFieldProps(CREATE_COMPANY_FIELDS, register, errors);

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <FieldsSetStyled>
        <TextField {...getFieldProps('name')} />
      </FieldsSetStyled>
      <LoadingButton type="submit" variant="outlined" disabled={!isValid}>
        Создать компанию
      </LoadingButton>
    </FormStyled>
  );
};

export default memo(Login);
