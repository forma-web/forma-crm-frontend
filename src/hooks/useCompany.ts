import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useCompanyInfoQuery } from '../api';
import { ERoutes } from '../config';
import { setCompany } from '../store/companySlice';
import { selectFullCompany } from '../store/selectors';

export const useCompany = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: companyData } = useCompanyInfoQuery(
    localStorage.getItem('activeCompanyID') ?? skipToken,
  );

  useEffect(() => {
    if (localStorage.getItem('activeCompanyID') !== null) return;
    navigate(ERoutes.home);
  }, []);

  useEffect(() => {
    if (!companyData) return;
    dispatch(setCompany(companyData));
  }, [companyData]);
};
