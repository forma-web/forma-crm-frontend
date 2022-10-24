import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { ERoutes } from '../config';
import AccountPage from '../pages/AccountPage';
import AuthPage from '../pages/AuthPage';
import CreateCompanyPage from '../pages/CreateCompanyPage';
import HomePage from '../pages/HomePage';

const App = () => {
  return (
    <Routes>
      <Route path={ERoutes.home} element={<HomePage />} />
      <Route path={ERoutes.auth} element={<AuthPage />} />
      <Route path={ERoutes.createCompany} element={<CreateCompanyPage />} />
      <Route path={ERoutes.account} element={<AccountPage />} />
      <Route path="*" element={<Navigate to={ERoutes.home} replace />} />
    </Routes>
  );
};

export default App;
