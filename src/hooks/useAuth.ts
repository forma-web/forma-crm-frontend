import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useLoginMutation, useSingUpMutation } from '../api';
import { setUser } from '../store/userSlice';
import { TLogin } from '../types/forms/auth';

export const useAuth = () => {
  const dispatch = useDispatch();
  const [login, { data: dataLogin }] = useLoginMutation();
  const [handleSignUp, { data: dataSignUp }] = useSingUpMutation();

  const navigate = useNavigate();

  const handleLogin = (data: TLogin) => {
    const { remember, ...body } = data;
    login(body);
  };

  useEffect(() => {
    const user = dataLogin ?? dataSignUp;
    if (!user) return;
    navigate(-1);
    dispatch(setUser(user));
  }, [dataLogin, dataSignUp]);

  return { handleLogin, handleSignUp };
};
