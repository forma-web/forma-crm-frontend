import { styled } from '@mui/material';

import { ContainerStyled } from './containers';
import { INDENTS, SIZES } from './size';

export const FormContainer = styled(ContainerStyled)`
  min-width: ${SIZES.widthForm};
  margin: auto;
`;

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

export const FormButtons = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${INDENTS.marginFormFieldHorizontal};
  gap: ${INDENTS.paddingControlHorizontal};
`;
