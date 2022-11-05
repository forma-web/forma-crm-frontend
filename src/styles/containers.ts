import { css } from '@emotion/react';
import { styled } from '@mui/material';

import { COLORS } from './colors';
import { INDENTS } from './size';

type TBlockStyled = {
  twoColumns?: boolean;
};

const ContainerBase = css`
  display: flex;
  flex-direction: column;
  gap: ${INDENTS.marginBlockSet};
`;

export const BlockBaseStyled = styled('div')`
  width: 100%;
  box-sizing: border-box;
  background-color: ${COLORS.backgroundBlock};
  border-radius: ${INDENTS.borderRadius};

  display: flex;
  flex-direction: column;
`;

export const ContainerStyled = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${INDENTS.gapBlocksVertical};
`;

export const ContainerFormStyled = styled('form')`
  ${ContainerBase}
`;

export const ContainerBlockStyled = styled('div')`
  ${ContainerBase}
`;

export const TitleContainer = styled('header')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleVerticalContainer = styled(ContainerStyled)`
  user-select: none;
  gap: ${INDENTS.gapTitleVertical};
`;

export const BlockStyled = styled(BlockBaseStyled)<TBlockStyled>`
  padding: ${INDENTS.paddingBlockBase};
  gap: ${INDENTS.marginBlock};
`;

export const BlockBodyStyled = styled(BlockBaseStyled, {
  shouldForwardProp: (props) => props !== 'twoColumns',
})<TBlockStyled>`
  display: grid;
  ${({ twoColumns }) =>
    twoColumns
      ? css`
          grid-template-columns: repeat(2, 1fr);
          grid-column-gap: ${INDENTS.marginFormFieldHorizontal};
          grid-row-gap: ${INDENTS.marginFormFieldVertical};
        `
      : css`
          grid-template-columns: 1fr;
          grid-row-gap: ${INDENTS.marginBlock};
        `};
`;
