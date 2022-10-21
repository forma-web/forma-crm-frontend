import { styled } from '@mui/material';

import { INDENTS, SIZES } from '../../../../styles/size';

export const HeaderStyled = styled('header')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  width: 100%;
  min-height: ${SIZES.minHeightHeader};
  padding: ${INDENTS.paddingHeader};

  position: fixed;
  top: 0;
  left: 0;
`;

export const HeaderBlock = styled('div')`
  display: flex;
  align-items: center;

  gap: ${INDENTS.paddingControlHorizontal};
`;

export const HeaderLogo = styled('div')`
  width: 60px;
  height: 30px;
  border-radius: 15px;
  background-color: #ccc;
`;
