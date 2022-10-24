import { TextField } from '@mui/material';
import React from 'react';

import Block from '../../components/Block';
import Account from '../../containers/forms/Account';
import Layout from '../../layouts/Layout';
import { ContainerStyled } from '../../styles/containers';
import { TitleH1 } from '../../styles/typography';
import { TUserFields } from '../../types/forms/user';

const AccountPage = () => {
  const handleOnSubmit = (data: TUserFields) => console.log(data);

  return (
    <Layout>
      <ContainerStyled>
        <TitleH1>Личный кабинет</TitleH1>
        <Account onSubmit={handleOnSubmit} />
      </ContainerStyled>
    </Layout>
  );
};

export default AccountPage;
