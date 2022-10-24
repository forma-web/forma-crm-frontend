import Logout from '@mui/icons-material/Logout';
import { ListItemIcon, MenuItem } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { logoutUser } from '../../../../store/userSlice';
import { MenuItemStyled, MenuStyled } from './styled';

const HeaderUser = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        {/* <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider /> */}
        <MenuItemStyled onClick={logout}>
          <Logout fontSize="small" />
          Выйти
        </MenuItemStyled>
      </MenuStyled>
    </>
  );
};

export default HeaderUser;
