import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useCompainesListQuery, useCurrentUserQuery } from '../api';
import { ERoutes } from '../config';
import { selectUser } from '../store/selectors';
import { setCompanies, setUser } from '../store/userSlice';
import isAuthorized from '../utils/isAuthorized';

export const useUser = (isRedirectToAuth = true) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectUser);

  const { data: userData } = useCurrentUserQuery();
  const { data: companiesData } = useCompainesListQuery();

  useEffect(() => {
    if (user.id !== null || isAuthorized()) return;
    if (isRedirectToAuth) navigate(ERoutes.auth);
  }, [user.id]);

  useEffect(() => {
    if (!userData || (user.id !== null && userData?.id !== user.id)) return;
    dispatch(setUser(userData));
  }, [userData]);

  useEffect(() => {
    if (!companiesData) return;
    dispatch(setCompanies(companiesData));
  }, [companiesData]);
};
