import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
  TextField,
  TextFieldProps,
} from '@mui/material';
import React, { useState } from 'react';
import { Controller, FieldValues, Path } from 'react-hook-form';

import { TControlledField } from '../../types/form';

type TSelectProps<T extends FieldValues> = {
  options: Array<{
    value: string;
    label: string;
  }>;
} & TControlledField<T> &
  TextFieldProps;

const SelectField = <T extends FieldValues>(props: TSelectProps<T>) => {
  const { name, options, control, rules, error, ...rest } = props;
  return (
    <Controller
      name={name as Path<T>}
      control={control}
      rules={rules}
      render={({ field: { ref, value, ...field } }) => (
        <TextField
          select
          error={!!error}
          helperText={error}
          inputRef={ref}
          value={value ?? ''}
          {...rest}
          {...field}
        >
          <MenuItem value="">Не выбрано</MenuItem>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default SelectField;
