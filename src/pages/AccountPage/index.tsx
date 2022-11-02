import React from 'react';
import { useSelector } from 'react-redux';

import { useEditUserMutation } from '../../api';
import Account from '../../containers/forms/Account';
import { useUser } from '../../hooks/useUser';
import Layout from '../../layouts/Layout';
import { selectUser } from '../../store/selectors';
import { ContainerStyled } from '../../styles/containers';
import { TitleH1 } from '../../styles/typography';
import { TUserFields } from '../../types/forms/user';

const AccountPage = () => {
  const { id } = useSelector(selectUser);
  const [editUser] = useEditUserMutation();

  useUser();

  const handleOnSubmit = ({ email, ...body }: TUserFields) => {
    if (id === null) return;
    editUser({ id, ...body });
  };

  return (
    <Layout>
      <ContainerStyled>
        <TitleH1>Личный кабинет</TitleH1>
        <Account onSubmit={handleOnSubmit} />
        {/* {userData && <Account onSubmit={handleOnSubmit} />} */}
      </ContainerStyled>
    </Layout>
  );
};

export default AccountPage;
