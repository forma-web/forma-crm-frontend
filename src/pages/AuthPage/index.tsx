import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetJwtTokenMutation } from '../../api/auth';
import { ERoutes } from '../../config';
import Auth from '../../containers/Auth';
import { TAuth } from '../../types/form/auth';

const AuthPage = () => {
  const [getJwtToken, result] = useGetJwtTokenMutation();

  const onSubmit = (data: TAuth) => {
    const { remember, ...body } = data;
    getJwtToken(body);
  };

  useEffect(() => {
    if (result.data) {
      console.log(result);
      // localStorage.setItem('jwt', result.data);
      // navigate(ERoutes.home);
    }
  }, [result.data]);

  return <Auth onSubmit={onSubmit} />;
};

export default AuthPage;
