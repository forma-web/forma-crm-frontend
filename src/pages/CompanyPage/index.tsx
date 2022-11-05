import { Tab, Tabs } from '@mui/material';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ERoutes } from '../../config';
import Company from '../../containers/forms/Company';
import DepartmentsList from '../../containers/lists/DepartmentsList';
import { useUser } from '../../hooks/useUser';
import Layout from '../../layouts/Layout';
import { ContainerStyled, TitleContainer } from '../../styles/containers';
import { TitleH1 } from '../../styles/typography';
import { TCompanyFields } from '../../types/company';
import isAuthorized from '../../utils/isAuthorized';

const CompanyPage = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState(0);
  useUser();

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (!isAuthorized()) navigate(ERoutes.auth);
  }, []);

  return (
    <Layout>
      <ContainerStyled>
        <TitleContainer>
          <TitleH1>Моя комапния</TitleH1>
        </TitleContainer>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Общие" value={0} />
          <Tab label="Отделы" value={1} />
          <Tab label="Филиалы" value={2} />
          <Tab label="Должности" value={3} />
        </Tabs>
        {value === 0 && <Company />}
        {value === 1 && <DepartmentsList />}
      </ContainerStyled>
    </Layout>
  );
};

export default CompanyPage;
