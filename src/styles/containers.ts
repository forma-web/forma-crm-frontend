import { styled } from '@mui/material';

import { COLORS } from './colors';
import { INDENTS } from './size';

export const ContainerStyled = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${INDENTS.gapBlocksVertical};
`;

export const TitleContainer = styled(ContainerStyled)`
  user-select: none;
  gap: ${INDENTS.gapTitleVertical};
`;

export const BlockStyled = styled('div')`
  width: 100%;
  box-sizing: border-box;
  background-color: ${COLORS.backgroundBlock};
  border-radius: ${INDENTS.borderRadius};

  display: flex;
  flex-direction: column;
`;
