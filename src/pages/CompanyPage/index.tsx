import { Tab, Tabs } from '@mui/material';
import React, { SyntheticEvent, useState } from 'react';

import Company from '../../containers/forms/Company';
import DepartmentsList from '../../containers/lists/DepartmentsList';
import OfficesList from '../../containers/lists/OfficesList';
import { useCompany } from '../../hooks/useCompany';
import { useUser } from '../../hooks/useUser';
import Layout from '../../layouts/Layout';
import { ContainerStyled, TitleContainer } from '../../styles/containers';
import { TitleH1 } from '../../styles/typography';

const CompanyPage = () => {
  const [currTab, setCurrTab] = useState(0);

  useUser();
  useCompany();

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setCurrTab(newValue);
  };

  return (
    <Layout>
      <ContainerStyled>
        <TitleContainer>
          <TitleH1>Моя комапния</TitleH1>
        </TitleContainer>
        <Tabs value={currTab} onChange={handleChange}>
          <Tab label="Общие" value={0} />
          <Tab label="Отделы" value={1} />
          <Tab label="Филиалы" value={2} />
          <Tab label="Должности" value={3} />
        </Tabs>
        {currTab === 0 && <Company />}
        {currTab === 1 && <DepartmentsList />}
        {currTab === 2 && <OfficesList />}
      </ContainerStyled>
    </Layout>
  );
};

export default CompanyPage;
