import { Button } from '@mui/material';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { ERoutes } from '../../../config';
import { TitleH0 } from '../../../styles/typography';
import { PromoStyled } from './styled';

const Promo = () => {
  const navigate = useNavigate();

  return (
    <PromoStyled>
      <TitleH0>Быстрый старт в управлении бизнесом</TitleH0>
      <Button variant="outlined" onClick={() => navigate(ERoutes.createCompany)}>
        Создать компанию
      </Button>
    </PromoStyled>
  );
};

export default Promo;
