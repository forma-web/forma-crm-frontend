import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ERoutes } from '../../config';
import Layout from '../../layouts/Layout';
import isAuthorized from '../../utils/isAuthorized';

const CreateCompanyPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorized()) navigate(ERoutes.auth);
  }, []);

  return <Layout>CreateCompanyPage</Layout>;
};

export default CreateCompanyPage;
