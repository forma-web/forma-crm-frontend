import { styled } from '@mui/material';

import { INDENTS, SIZES } from './size';

export const FormStyled = styled('form')`
  display: flex;
  flex-direction: column;
  gap: ${INDENTS.marginFormFieldSet};

  width: ${SIZES.widthForm};
`;

export const FieldsSetStyled = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${INDENTS.marginFormFieldVertical};
`;
