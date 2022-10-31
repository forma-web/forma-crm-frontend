import { Menu, MenuItem, styled } from '@mui/material';

import { INDENTS } from '../../../../styles/size';

export const MenuStyled = styled(Menu)`
  top: ${INDENTS.marginMenu};

  & .MuiAvatar-root {
    width: 22px;
    height: 22px;
  }
`;

export const MenuItemStyled = styled(MenuItem)`
  display: flex;
  gap: ${INDENTS.paddingControlHorizontal};
  align-items: center;
`;
