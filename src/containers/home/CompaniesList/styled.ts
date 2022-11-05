import { css } from '@emotion/react';
import { styled } from '@mui/material';

import { COLORS } from '../../../styles/colors';
import { INDENTS } from '../../../styles/size';

type TItemStyled = {
  fullWidth?: boolean;
};

const ItemBaseStyled = css`
  display: flex;
  align-items: center;
  user-select: none;
  justify-content: space-between;
  padding: ${INDENTS.paddingPopupBase};
  border-bottom: 1px solid ${COLORS.borderColor};
  transition: 0.1s;
  column-gap: ${INDENTS.paddingControlHorizontal};

  &:first-of-type {
    border-radius: ${INDENTS.borderRadius} ${INDENTS.borderRadius} 0 0;
  }

  &:last-child {
    border-bottom: none;
    border-radius: 0 0 ${INDENTS.borderRadius} ${INDENTS.borderRadius};
  }
`;

export const ItemLinkStyled = styled('a')`
  cursor: pointer;

  ${ItemBaseStyled}

  &:hover {
    background-color: ${COLORS.borderColor};
  }
`;

export const ItemStyled = styled('div')`
  ${ItemBaseStyled}
`;

export const ItemBodyStyled = styled('div', {
  shouldForwardProp: (props) => props !== 'fullWidth',
})<TItemStyled>`
  display: flex;
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      flex: 1;
    `};
  align-items: center;
  column-gap: ${INDENTS.paddingControlMore};
`;
