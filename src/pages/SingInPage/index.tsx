import React, { memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetJwtTokenMutation } from '../../api/auth';
import { ERoutes } from '../../config';
import Login from '../../containers/forms/Login';
import { TAuth } from '../../types/form/auth';

const SingInPage = () => {
  const [getJwtToken, result] = useGetJwtTokenMutation();

  const onSubmit = (data: TAuth) => {
    const { remember, ...body } = data;
    getJwtToken(body);
  };

  useEffect(() => {
    if (result.data) {
      // localStorage.setItem('jwt', result.data);
      // navigate(ERoutes.home);
    }
  }, [result.data]);

  return <Login onSubmit={onSubmit} />;
};

export default memo(SingInPage);
