import { Button } from '@mui/material';
import React, { memo } from 'react';

import Layout from '../../layouts/Layout';
import { PromoStyled } from './styled';

const HomePage = () => {
  return (
    <Layout>
      <PromoStyled>
        Быстрый старт в управлении бизнесом
        <Button variant="outlined">Создать компанию</Button>
      </PromoStyled>
    </Layout>
  );
};

export default memo(HomePage);
