import { Button } from '@mui/material';
import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { ERoutes } from '../../config';
import Layout from '../../layouts/Layout';
import { PromoStyled } from './styled';

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(ERoutes.createCompany);
  }, [navigate]);

  return (
    <Layout>
      <PromoStyled>
        Быстрый старт в управлении бизнесом
        <Button variant="outlined" onClick={handleClick}>
          Создать компанию
        </Button>
      </PromoStyled>
    </Layout>
  );
};

export default memo(HomePage);
