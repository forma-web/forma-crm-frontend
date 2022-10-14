import { styled } from '@mui/material';

import { ContainerStyled } from '../../styles/containers';
import { INDENTS, SIZES } from '../../styles/size';

export const AuthBlock = styled(ContainerStyled)`
  min-width: ${SIZES.widthForm};
  margin: auto;
`;

export const AuthTitleDescription = styled('div')`
  display: inline-flex;
  gap: ${INDENTS.paddingText};

  .MuiLink-root {
    font-size: inherit;
  }
`;
