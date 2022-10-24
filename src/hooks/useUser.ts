import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useCurrentUserMutation } from '../api';
import { ERoutes } from '../config';
import { selectUser } from '../store/selectors';
import { setUser } from '../store/userSlice';
import isAuthorized from '../utils/isAuthorized';

export const useUser = (isRedirectToAuth = true) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentUser, { data }] = useCurrentUserMutation();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user.id !== null) return;
    if (isAuthorized()) currentUser();
    if (isRedirectToAuth) navigate(ERoutes.auth);
  }, []);

  useEffect(() => {
    if (!data) return;
    dispatch(setUser(data));
  }, [data]);
};
