import { Button } from '@mui/material';
import React, { FC, memo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import FormBlock from '../../../components/FormBlock';
import TextInput from '../../../components/TextInput';
import { COMPANY_FIELDS } from '../../../constants/fields/company';
import { selectUser } from '../../../store/selectors';
import { ContainerFormStyled } from '../../../styles/containers';
import { FormButtons } from '../../../styles/form';
import { TCompanyFields } from '../../../types/company';

interface ICompanyProps {
  onSubmit: (data: TCompanyFields) => void;
}

const defaultValues = {
  name: '',
  inn: '',
  address: '',
};

const Company: FC<ICompanyProps> = ({ onSubmit }) => {
  const { data: userData } = useSelector(selectUser);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm<TCompanyFields>({
    mode: 'all',
    defaultValues,
  });

  useEffect(() => {
    reset({ ...defaultValues, ...userData }, { keepValues: false });
  }, [reset, userData]);

  return (
    <ContainerFormStyled onSubmit={handleSubmit(onSubmit)}>
      <FormBlock<TCompanyFields> fieldsData={COMPANY_FIELDS} control={control} errors={errors}>
        <TextInput name="name" />
        <TextInput name="inn" />
        <TextInput name="address" />
      </FormBlock>
      {isDirty && (
        <FormButtons>
          <Button disabled={!isValid} type="submit" variant="outlined">
            Сохранить изменения
          </Button>
          <Button onClick={() => reset()}>Отмена</Button>
        </FormButtons>
      )}
    </ContainerFormStyled>
  );
};

export default memo(Company);
