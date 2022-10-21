import { styled } from '@mui/material';

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
