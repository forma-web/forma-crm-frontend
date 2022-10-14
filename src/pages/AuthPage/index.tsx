import React, { memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetJwtTokenMutation } from '../../api/auth';
import { ERoutes } from '../../config';
import Login from '../../containers/forms/Login';
import Layout from '../../layouts/Layout';
import { TAuth } from '../../types/form/auth';

const AuthPage = () => {
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
      <Login onSubmit={onSubmit} />
    </Layout>
  );
};

export default memo(AuthPage);
