import Logout from '@mui/icons-material/Logout';
import { Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ERoutes } from '../../../../config';
import { useActiveCompany } from '../../../../hooks/useActiveCompany';
import { useUser } from '../../../../hooks/useUser';
import { selectUser } from '../../../../store/selectors';
import { logoutUser } from '../../../../store/userSlice';
import { MenuItemStyled, MenuStyled } from './styled';

const HeaderUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, companies } = useSelector(selectUser);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickAccount = useCallback(() => {
    navigate(ERoutes.account);
  }, []);

  const handleClickCompany = useActiveCompany();

  const logout = useCallback(() => {
    dispatch(logoutUser());
  }, []);

  return (
    <>
      <Avatar onClick={handleClick} />
      <MenuStyled
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {data && (
          <MenuItemStyled onClick={handleClickAccount}>
            <Avatar />
            {`${data.first_name} ${data.last_name}`}
          </MenuItemStyled>
        )}
        <Divider />
        {companies.map((company) => (
          <MenuItemStyled onClick={() => handleClickCompany(company.id)} key={company.id}>
            {company.name}
          </MenuItemStyled>
        ))}
        {companies.length !== 0 && <Divider />}
        <MenuItemStyled onClick={logout}>
          <Logout fontSize="small" />
          Выйти
        </MenuItemStyled>
      </MenuStyled>
    </>
  );
};

export default HeaderUser;
