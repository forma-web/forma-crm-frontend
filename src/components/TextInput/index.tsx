import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

type TTextInputProps<T extends FieldValues> = {
  name: keyof T;
  error?: string;
  control?: Control<T, unknown>;
  rules?: Record<string, unknown>;
} & TextFieldProps;

const TextInput = <T extends FieldValues>(props: TTextInputProps<T>) => {
  const { name, control, rules, error, ...rest } = props;
  return (
    <Controller
      name={name as Path<T>}
      control={control}
      rules={rules}
      render={({ field: { ref, ...field } }) => (
        <TextField error={!!error} helperText={error} inputRef={ref} {...rest} {...field} />
      )}
    />
  );
};

export default TextInput;
