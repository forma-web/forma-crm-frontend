import React from 'react';
import { useSelector } from 'react-redux';

import Account from '../../containers/forms/Account';
import { useUser } from '../../hooks/useUser';
import Layout from '../../layouts/Layout';
import { selectUser } from '../../store/selectors';
import { ContainerStyled } from '../../styles/containers';
import { TitleH1 } from '../../styles/typography';
import { TUserFields } from '../../types/forms/user';

const AccountPage = () => {
  const handleOnSubmit = (data: TUserFields) => console.log(data);
  const { data: userData } = useSelector(selectUser);
  useUser();

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
