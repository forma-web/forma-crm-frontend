import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { TJwt } from '../types/form/auth';

export const useSetJwtToken = (result: TJwt | undefined) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (result) {
      const { access_token: jwtToken } = result;
      // TODO: Added error
      if (jwtToken === undefined) return;

      localStorage.setItem('jwt', jwtToken);
      navigate(-1);
    }
  }, [result]);
};
