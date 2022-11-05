import { TextFieldProps } from '@mui/material';
import {
  DeepRequired,
  FieldErrorsImpl,
  FieldPath,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';

import { TFieldsData } from '../types/form';

export const useFieldProps =
  <T extends FieldValues>(
    fieldsData: TFieldsData<T>,
    register: UseFormRegister<T>,
    errors: FieldErrorsImpl<DeepRequired<T>>,
  ) =>
  (name: keyof T, propsRegister: FieldValues = {}) => {
    const fieldData = fieldsData[name];
    const errorData = errors[name];

    const { ref, ...fieldProps } = register(name as FieldPath<T>, {
      ...fieldData.defaultCheck,
      ...propsRegister,
    });

    return {
      error: !!errorData,
      helperText: errorData?.message,
      label: fieldData.label,
      ...fieldProps,
      inputRef: ref,
    } as TextFieldProps;
  };
