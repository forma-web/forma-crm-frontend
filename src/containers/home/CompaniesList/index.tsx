import { Avatar, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ERoutes } from '../../../config';
import { BlockStyled, ContainerStyled } from '../../../styles/containers';
import { TitleH1 } from '../../../styles/typography';
import { ItemHeaderStyled, ItemStyled, ListHeaderStyled } from './styled';

const CompaniesList = () => {
  const navigate = useNavigate();

  return (
    <ContainerStyled>
      <ListHeaderStyled>
        <TitleH1>Мои комапнии</TitleH1>
        <Button variant="outlined" onClick={() => navigate(ERoutes.createCompany)}>
          Создать компанию
        </Button>
      </ListHeaderStyled>
      <BlockStyled>
        <ItemStyled>
          <ItemHeaderStyled>
            <Avatar />
            123
          </ItemHeaderStyled>
        </ItemStyled>
        <ItemStyled>
          <ItemHeaderStyled>
            <Avatar />
            123
          </ItemHeaderStyled>
        </ItemStyled>
      </BlockStyled>
    </ContainerStyled>
  );
};

export default CompaniesList;
