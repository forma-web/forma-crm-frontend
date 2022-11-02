import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
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
  SelectProps<string>;

const SelectField = <T extends FieldValues>(props: TSelectProps<T>) => {
  const [currValue, setCurrValue] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setCurrValue(event.target.value as string);
  };

  const { name, options, control, rules, error, label, ...rest } = props;
  return (
    <Controller
      name={name as Path<T>}
      control={control}
      rules={rules}
      render={({ field: { value, onChange, ...field } }) => (
        <FormControl fullWidth error={!!error}>
          <InputLabel>{label}</InputLabel>
          <Select label={label} value={currValue} onChange={handleChange} {...field} {...rest}>
            <MenuItem value="">Не выбрано</MenuItem>
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{error}</FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default SelectField;
