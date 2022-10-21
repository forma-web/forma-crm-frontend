import { useLoginMutation, useSingUpMutation } from '../api';
import { TLogin } from '../types/form/auth';
import { useSetJwtToken } from './useSetJwtToken';

export const useAuth = () => {
  const [login, { data: dataLogin }] = useLoginMutation();
  const [handleSignUp, { data: dataSignUp }] = useSingUpMutation();

  const handleLogin = (data: TLogin) => {
    const { remember, ...body } = data;
    login(body);
  };

  useSetJwtToken(dataLogin);
  useSetJwtToken(dataSignUp);

  return { handleLogin, handleSignUp };
};
