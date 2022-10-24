import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLoginMutation, useSingUpMutation } from '../api';
import { TLogin } from '../types/forms/auth';

export const useAuth = () => {
  const [login, { data: dataLogin }] = useLoginMutation();
  const [handleSignUp, { data: dataSignUp }] = useSingUpMutation();

  const navigate = useNavigate();

  const handleLogin = (data: TLogin) => {
    const { remember, ...body } = data;
    login(body);
  };

  useEffect(() => {
    if (dataLogin || dataSignUp) navigate(-1);
  }, [dataLogin, dataSignUp]);

  return { handleLogin, handleSignUp };
};
