import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import CompaniesList from '../../containers/home/CompaniesList';
import Promo from '../../containers/home/Promo';
import { useUser } from '../../hooks/useUser';
import Layout from '../../layouts/Layout';
import { selectCompanies } from '../../store/selectors';

const HomePage = () => {
  const companies = useSelector(selectCompanies);

  useUser(false);

  return <Layout>{companies.length ? <CompaniesList /> : <Promo />}</Layout>;
};

export default memo(HomePage);
