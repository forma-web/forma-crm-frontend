import { styled } from '@mui/material';

import { INDENTS } from '../../../styles/size';

export const PromoStyled = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${INDENTS.gapBlocksVertical};

  margin: auto;
`;
