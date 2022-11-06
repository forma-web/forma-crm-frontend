import { Button } from '@mui/material';
import React, { memo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { useEditCompanyMutation } from '../../../api';
import FormBlock from '../../../components/FormBlock';
import TextInput from '../../../components/TextInput';
import { COMPANY_FIELDS } from '../../../constants/fields/company';
import { selectFullCompany } from '../../../store/selectors';
import { ContainerFormStyled } from '../../../styles/containers';
import { FormButtons } from '../../../styles/form';
import { TCompanyFields } from '../../../types/forms/company';

const defaultValues = {
  name: '',
  inn: '',
  address: '',
};

const Company = () => {
  const [editCompany] = useEditCompanyMutation();
  const { id, data: companyData } = useSelector(selectFullCompany);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm<TCompanyFields>({
    mode: 'all',
    defaultValues,
  });

  const onSubmit = (data: TCompanyFields) => {
    if (id === null) return;
    editCompany({ id, ...data });
  };

  useEffect(() => {
    reset({ ...defaultValues, ...(companyData ?? {}) }, { keepValues: false });
  }, [reset, companyData]);

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
