import { Menu, MenuItem, styled } from '@mui/material';

import { INDENTS } from '../../../../styles/size';

export const MenuStyled = styled(Menu)`
  top: ${INDENTS.marginMenu};
`;

export const MenuItemStyled = styled(MenuItem)`
  display: flex;
  gap: ${INDENTS.paddingControlHorizontal};
  align-items: center;
`;
