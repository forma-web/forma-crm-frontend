import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useCompainesListMutation, useCurrentUserMutation } from '../api';
import { ERoutes } from '../config';
import { selectUser } from '../store/selectors';
import { setCompanies, setUser } from '../store/userSlice';
import isAuthorized from '../utils/isAuthorized';

export const useUser = (isRedirectToAuth = true) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentUser, { data: userData }] = useCurrentUserMutation();
  const [companiesList, { data: companiesData }] = useCompainesListMutation();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user.id !== null) return;
    if (isAuthorized()) {
      currentUser();
      companiesList();
    }
    if (isRedirectToAuth) navigate(ERoutes.auth);
  }, []);

  useEffect(() => {
    if (!userData) return;
    dispatch(setUser(userData));
  }, [userData]);

  useEffect(() => {
    if (user.id === null) return;
    companiesList();
  }, [user.id]);

  useEffect(() => {
    if (!companiesData) return;
    dispatch(setCompanies(companiesData));
  }, [companiesData]);
};
