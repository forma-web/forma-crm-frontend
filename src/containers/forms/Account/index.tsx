import { TextField } from '@mui/material';
import React, { FC, memo } from 'react';
import { useForm } from 'react-hook-form';

import Block from '../../../components/Block';
import { ACCOUNT_FIELDS } from '../../../constants/fields/account';
import { LOGIN_FIELDS } from '../../../constants/fields/auth';
import { useFieldProps } from '../../../hooks/useFieldProps';
import { BlockBodyStyled, ContainerFormStyled } from '../../../styles/containers';
import { TUser, TUserFields } from '../../../types/forms/user';

interface IAccountProps {
  onSubmit: (data: TUserFields) => void;
}

const Login: FC<IAccountProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TUserFields>({ mode: 'all' });

  const getFieldProps = useFieldProps(ACCOUNT_FIELDS, register, errors);

  return (
    <ContainerFormStyled onSubmit={handleSubmit(onSubmit)}>
      <Block>
        <BlockBodyStyled twoColumns>
          <TextField {...getFieldProps('first_name')} />
          <TextField {...getFieldProps('last_name')} />
          <TextField {...getFieldProps('middle_name')} />
        </BlockBodyStyled>
      </Block>
      <Block>
        <BlockBodyStyled twoColumns>
          <TextField {...getFieldProps('email')} />
          <TextField {...getFieldProps('phone')} />
        </BlockBodyStyled>
      </Block>
    </ContainerFormStyled>
  );
};

export default memo(Login);
