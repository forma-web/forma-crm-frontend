import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { ERoutes } from '../config';
import setActiveCompany from '../utils/setActiveCompany';

export const useActiveCompany = () => {
  const navigate = useNavigate();

  return useCallback((id: number) => {
    setActiveCompany(id);
    navigate(ERoutes.company);
  }, []);
};
