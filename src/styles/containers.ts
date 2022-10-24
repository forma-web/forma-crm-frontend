import { styled } from '@mui/material';

import { COLORS } from './colors';
import { INDENTS } from './size';

type TBlockStyled = {
  twoColumns?: boolean;
};

export const BlockBaseStyled = styled('div')`
  width: 100%;
  box-sizing: border-box;
  background-color: ${COLORS.backgroundBlock};
  border-radius: ${INDENTS.borderRadius};

  display: flex;
  flex-direction: column;
  gap: ${INDENTS.marginBlock};
`;

export const ContainerStyled = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${INDENTS.gapBlocksVertical};
`;

export const ContainerFormStyled = styled('form')`
  display: flex;
  flex-direction: column;
  gap: ${INDENTS.marginBlockSet};
`;

export const TitleContainer = styled(ContainerStyled)`
  user-select: none;
  gap: ${INDENTS.gapTitleVertical};
`;

export const BlockStyled = styled(BlockBaseStyled)<TBlockStyled>`
  padding: ${INDENTS.paddingBlockBase};
`;

export const BlockBodyStyled = styled(BlockBaseStyled)<TBlockStyled>`
  display: grid;
  ${({ twoColumns }) =>
    twoColumns
      ? `
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: ${INDENTS.marginFormFieldHorizontal};
    grid-row-gap: ${INDENTS.marginFormFieldVertical};
  `
      : `
    grid-template-columns: 1fr;
    grid-row-gap: ${INDENTS.marginBlock};
  `};
`;
