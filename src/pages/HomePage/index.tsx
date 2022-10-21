import React, { memo } from 'react';

import CompaniesList from '../../containers/home/CompaniesList';
import Promo from '../../containers/home/Promo';
import Layout from '../../layouts/Layout';

const HomePage = () => {
  return (
    <Layout>
      {/* <Promo /> */}
      <CompaniesList />
    </Layout>
  );
};

export default memo(HomePage);
