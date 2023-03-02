import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';
import { Controller, FieldValues, Path } from 'react-hook-form';

import { TControlledField } from '../../types/form';

const TextInput = <T extends FieldValues>(props: TControlledField<T> & TextFieldProps) => {
  const { name, control, rules, error, ...rest } = props;
  return (
    <Controller
      name={name as Path<T>}
      control={control}
      rules={rules}
      render={({ field: { ref, value, ...field } }) => (
        <TextField
          error={!!error}
          helperText={error}
          inputRef={ref}
          value={value ?? ''}
          {...rest}
          {...field}
        />
      )}
    />
  );
};

export default TextInput;
