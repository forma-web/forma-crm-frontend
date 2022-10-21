import { styled } from '@mui/material';

import { INDENTS, SIZES } from '../../styles/size';

export const LayoutStyled = styled('div')`
  width: 100%;
  min-height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
`;

export const ContextStyled = styled('div')`
  display: flex;
  flex-direction: column;

  width: ${SIZES.widthContent};
  min-height: 100%;
  margin: 0 auto;
  padding: ${INDENTS.paddingContent};
  box-sizing: border-box;
`;
