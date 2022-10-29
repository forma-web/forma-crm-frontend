import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import CompaniesList from '../../containers/home/CompaniesList';
import Promo from '../../containers/home/Promo';
import Layout from '../../layouts/Layout';
import { selectCompanies } from '../../store/selectors';

const HomePage = () => {
  const companies = useSelector(selectCompanies);
  return <Layout>{companies.length ? <CompaniesList /> : <Promo />}</Layout>;
};

export default memo(HomePage);
