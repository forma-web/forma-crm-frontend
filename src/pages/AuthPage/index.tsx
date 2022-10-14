import { Link } from '@mui/material';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetJwtTokenMutation } from '../../api/auth';
import { ERoutes } from '../../config';
import Login from '../../containers/forms/Login';
import Layout from '../../layouts/Layout';
import { TitleContainer } from '../../styles/containers';
import { TitleH1 } from '../../styles/typography';
import { TAuth } from '../../types/form/auth';
import { AuthBlock, AuthTitleDescription } from './styled';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const [getJwtToken, result] = useGetJwtTokenMutation();
  const navigate = useNavigate();

  const onSubmit = (data: TAuth) => {
    const { remember, ...body } = data;
    getJwtToken(body);
  };

  useEffect(() => {
    if (result.data) {
      const jwtToken = result.data.meta?.access_token;
      // TODO: Added error
      if (jwtToken === undefined) return;

      localStorage.setItem('jwt', jwtToken);
      navigate(-1);
    }
  }, [result.data]);

  return (
    <Layout isAuth>
      <AuthBlock>
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
        {isLogin && <Login onSubmit={onSubmit} />}
      </AuthBlock>
    </Layout>
  );
};

export default memo(AuthPage);
