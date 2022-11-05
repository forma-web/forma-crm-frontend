import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useCreateCompanyMutation } from '../../api';
import { ERoutes } from '../../config';
import CreateCompany from '../../containers/forms/CreateCompany';
import { useActiveCompany } from '../../hooks/useActiveCompany';
import { useUser } from '../../hooks/useUser';
import Layout from '../../layouts/Layout';
import { TitleVerticalContainer } from '../../styles/containers';
import { FormContainer } from '../../styles/form';
import { TitleH1 } from '../../styles/typography';

const CreateCompanyPage = () => {
  const [createCompany, { data }] = useCreateCompanyMutation();

  const handleAfterCreateCompany = useActiveCompany();

  useUser();

  useEffect(() => {
    if (!data) return;
    handleAfterCreateCompany(data.id);
  }, [data]);

  return (
    <Layout>
      <FormContainer>
        <TitleVerticalContainer>
          <TitleH1>Создание компании</TitleH1>
        </TitleVerticalContainer>
        <CreateCompany onSubmit={createCompany} />
      </FormContainer>
    </Layout>
  );
};

export default CreateCompanyPage;
