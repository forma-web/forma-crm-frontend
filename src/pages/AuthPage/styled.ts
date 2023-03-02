import { styled } from '@mui/material';

import { INDENTS } from '../../styles/size';

export const AuthTitleDescription = styled('div')`
  display: inline-flex;
  gap: ${INDENTS.paddingText};

  .MuiLink-root {
    font-size: inherit;
  }
`;
