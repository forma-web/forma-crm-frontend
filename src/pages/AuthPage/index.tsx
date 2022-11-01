import { Link } from '@mui/material';
import React, { memo, useState } from 'react';

import Login from '../../containers/forms/Login';
import Registration from '../../containers/forms/Registration';
import { useAuth } from '../../hooks/useAuth';
import Layout from '../../layouts/Layout';
import { TitleContainer } from '../../styles/containers';
import { FormContainer } from '../../styles/form';
import { TitleH1 } from '../../styles/typography';
import { AuthTitleDescription } from './styled';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const { handleLogin, handleSignUp } = useAuth();

  return (
    <Layout isAuth>
      <FormContainer>
        <TitleContainer>
          <TitleH1>{isLogin ? 'Вход' : 'Регистрация'}</TitleH1>
          <AuthTitleDescription>
            {isLogin ? 'Новый пользователь?' : 'У вас уже есть учетная запись?'}
            <Link
              component="button"
              underline="hover"
              href="!#"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Создайте учётную запись' : 'Войти'}
            </Link>
          </AuthTitleDescription>
        </TitleContainer>
        {isLogin ? <Login onSubmit={handleLogin} /> : <Registration onSubmit={handleSignUp} />}
      </FormContainer>
    </Layout>
  );
};

export default memo(AuthPage);
