import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { ERoutes } from '../config';
import HomePage from '../pages/HomePage';
import SingInPage from '../pages/SingInPage';
import SingUpPage from '../pages/SingUpPage';

const App = () => {
  return (
    <Routes>
      <Route path={ERoutes.home} element={<HomePage />} />
      <Route path={ERoutes.singIn} element={<SingInPage />} />
      <Route path={ERoutes.singUp} element={<SingUpPage />} />
      <Route path="*" element={<Navigate to={ERoutes.home} replace />} />
    </Routes>
  );
};

export default App;
