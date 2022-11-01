import { Button } from '@mui/material';
import React, { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ERoutes } from '../../../../config';
import { selectUser } from '../../../../store/selectors';
import HeaderUser from '../HeaderUser';
import { HeaderBlock, HeaderLogo, HeaderStyled } from './styled';

type THeaderProps = {
  isAuth?: boolean;
};

const Header: FC<THeaderProps> = ({ isAuth = false }) => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const redirectHome = useCallback(() => {
    navigate(ERoutes.home);
  }, []);

  const redirectLogin = useCallback(() => {
    navigate(ERoutes.auth);
  }, []);

  return (
    <HeaderStyled>
      <HeaderLogo onClick={redirectHome} />
      {!isAuth && (
        <HeaderBlock>
          {user.id === null ? <Button onClick={redirectLogin}>Войти</Button> : <HeaderUser />}
        </HeaderBlock>
      )}
    </HeaderStyled>
  );
};

export default memo(Header);
