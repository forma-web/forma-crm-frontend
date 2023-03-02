import { Avatar, Button } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ERoutes } from '../../../config';
import { useActiveCompany } from '../../../hooks/useActiveCompany';
import { selectCompanies } from '../../../store/selectors';
import { BlockBaseStyled, ContainerStyled, TitleContainer } from '../../../styles/containers';
import { TitleH1 } from '../../../styles/typography';
import { ItemBodyStyled, ItemLinkStyled } from './styled';

const CompaniesList = () => {
  const navigate = useNavigate();
  const companies = useSelector(selectCompanies);

  const handleClickCompany = useActiveCompany();

  return (
    <ContainerStyled>
      <TitleContainer>
        <TitleH1>Мои комапнии</TitleH1>
        <Button variant="outlined" onClick={() => navigate(ERoutes.createCompany)}>
          Создать компанию
        </Button>
      </TitleContainer>
      <BlockBaseStyled>
        {companies.map((company) => (
          <ItemLinkStyled key={company.id} onClick={() => handleClickCompany(company.id)}>
            <ItemBodyStyled>
              <Avatar />
              {company.name}
            </ItemBodyStyled>
          </ItemLinkStyled>
        ))}
      </BlockBaseStyled>
    </ContainerStyled>
  );
};

export default CompaniesList;
