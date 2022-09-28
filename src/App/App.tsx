import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { ERoutes } from '../config';
import AuthPage from '../pages/AuthPage';

const App = () => {
  return (
    <Routes>
      <Route path={ERoutes.auth} element={<AuthPage />} />
      <Route path="*" element={<Navigate to={ERoutes.auth} replace />} />
    </Routes>
  );
};

export default App;
