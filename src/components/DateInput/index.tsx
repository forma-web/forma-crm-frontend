import { TextField, TextFieldProps } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import moment from 'moment';
import React from 'react';
import { Controller, FieldValues, Path } from 'react-hook-form';

import { TControlledField } from '../../types/form';

const DATE_MASK = 'DD.MM.YYYY';

const DateInput = <T extends FieldValues>(props: TControlledField<T> & TextFieldProps) => {
  const { name, control, rules, error, label } = props;
  return (
    <Controller
      name={name as Path<T>}
      control={control}
      rules={rules}
      render={({ field: { ref, value, onChange, ...field } }) => (
        <DatePicker
          label={label}
          inputFormat={DATE_MASK}
          inputRef={ref}
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={onChange}
          maxDate={moment().add(-16, 'year')}
          renderInput={(params) => (
            <TextField
              error={!!error}
              helperText={error}
              inputRef={ref}
              value={value ?? ''}
              {...params}
              {...field}
            />
          )}
        />
      )}
    />
  );
};

export default DateInput;
