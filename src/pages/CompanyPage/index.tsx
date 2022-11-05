import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ERoutes } from '../../config';
import Company from '../../containers/forms/Company';
import Layout from '../../layouts/Layout';
import { ContainerStyled, TitleContainer } from '../../styles/containers';
import { TitleH1 } from '../../styles/typography';
import { TCompanyFields } from '../../types/company';
import isAuthorized from '../../utils/isAuthorized';

const CompanyPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorized()) navigate(ERoutes.auth);
  }, []);

  const handleOnSubmit = (data: TCompanyFields) => {
    console.log(data);
  };

  return (
    <Layout>
      <ContainerStyled>
        <TitleContainer>
          <TitleH1>Моя комапния</TitleH1>
        </TitleContainer>
        <Company onSubmit={handleOnSubmit} />
      </ContainerStyled>
    </Layout>
  );
};

export default CompanyPage;
