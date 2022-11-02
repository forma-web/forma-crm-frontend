import { Button } from '@mui/material';
import React, { FC, memo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import DateInput from '../../../components/DateInput';
import FormBlock from '../../../components/FormBlock';
import PhoneInput from '../../../components/PhoneInput';
import SelectField from '../../../components/SelectField';
import TextInput from '../../../components/TextInput';
import { ACCOUNT_FIELDS } from '../../../constants/fields/account';
import { GENDER_OPTIONS } from '../../../constants/gender';
import { selectUser } from '../../../store/selectors';
import { ContainerFormStyled } from '../../../styles/containers';
import { TUserFields } from '../../../types/forms/user';

interface IAccountProps {
  onSubmit: (data: TUserFields) => void;
}

const defaultValues: TUserFields = {
  first_name: '',
  last_name: '',
  middle_name: '',
  email: '',
  phone: '',
  sex: '',
};

const Account: FC<IAccountProps> = ({ onSubmit }) => {
  const { data: userData } = useSelector(selectUser);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<TUserFields>({
    mode: 'all',
    defaultValues,
  });

  useEffect(() => {
    reset({ ...defaultValues, ...userData }, { keepValues: false });
  }, [reset, userData]);

  return (
    <ContainerFormStyled onSubmit={handleSubmit(onSubmit)}>
      <FormBlock<TUserFields> fieldsData={ACCOUNT_FIELDS} control={control} errors={errors}>
        <TextInput name="first_name" />
        <TextInput name="last_name" />
        <TextInput name="middle_name" />
        <SelectField name="sex" options={GENDER_OPTIONS} />
        <DateInput name="birth_date" />
      </FormBlock>
      <FormBlock<TUserFields> fieldsData={ACCOUNT_FIELDS} control={control} errors={errors}>
        <TextInput name="email" />
        <PhoneInput name="phone" />
      </FormBlock>
      <Button disabled={!isValid} type="submit">
        Сохранить изменения
      </Button>
      <Button onClick={() => reset()}>Отмена</Button>
    </ContainerFormStyled>
  );
};

export default memo(Account);
