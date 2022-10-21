import { Button } from '@mui/material';
import React, { FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { ERoutes } from '../../../../config';
import isAuthorized from '../../../../utils/isAuthorized';
import HeaderUser from '../HeaderUser';
import { HeaderBlock, HeaderLogo, HeaderStyled } from './styled';

type THeaderProps = {
  isAuth?: boolean;
};

const Header: FC<THeaderProps> = ({ isAuth = false }) => {
  const navigate = useNavigate();

  const redirectHome = useCallback(() => {
    navigate(ERoutes.home);
  }, []);

  const redirecTLogin = useCallback(() => {
    navigate(ERoutes.auth);
  }, []);

  return (
    <HeaderStyled>
      <HeaderLogo onClick={redirectHome} />
      {!isAuth && (
        <HeaderBlock>
          {isAuthorized() ? <HeaderUser /> : <Button onClick={redirecTLogin}>Войти</Button>}
        </HeaderBlock>
      )}
    </HeaderStyled>
  );
};

export default memo(Header);
