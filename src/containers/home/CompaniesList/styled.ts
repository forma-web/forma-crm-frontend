import { styled } from '@mui/material';

import { COLORS } from '../../../styles/colors';
import { INDENTS } from '../../../styles/size';

export const ItemStyled = styled('a')`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  justify-content: space-between;
  padding: ${INDENTS.paddingPopupBase};
  border-bottom: 1px solid ${COLORS.borderColor};
  transition: 0.1s;

  &:first-of-type {
    border-radius: ${INDENTS.borderRadius} ${INDENTS.borderRadius} 0 0;
  }

  &:last-child {
    border-bottom: none;
    border-radius: 0 0 ${INDENTS.borderRadius} ${INDENTS.borderRadius};
  }

  &:hover {
    background-color: ${COLORS.borderColor};
  }
`;

export const ItemHeaderStyled = styled('div')`
  display: flex;
  align-items: center;
  column-gap: ${INDENTS.paddingControlHorizontal};
`;
