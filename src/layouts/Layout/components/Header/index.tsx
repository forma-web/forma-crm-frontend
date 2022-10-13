import { Avatar } from '@mui/material';
import React, { memo } from 'react';

import { HeaderBlock, HeaderLogo, HeaderStyled } from './styled';

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderLogo />
      <HeaderBlock>
        <Avatar />
      </HeaderBlock>
    </HeaderStyled>
  );
};

export default memo(Header);
