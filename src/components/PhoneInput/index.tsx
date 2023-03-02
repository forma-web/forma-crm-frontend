import { TextField } from '@mui/material';
import React from 'react';
import { Controller, FieldValues, Path } from 'react-hook-form';
import { NumberFormatBase, usePatternFormat } from 'react-number-format';

import { TControlledField } from '../../types/form';

const PhoneInput = <T extends FieldValues>(props: TControlledField<T> & { label?: string }) => {
  const { name, control, label, rules, error } = props;
  const rest = usePatternFormat({ format: '# (###) ### ## ##', mask: '_' });

  return (
    <Controller
      name={name as Path<T>}
      control={control}
      rules={rules}
      render={({ field: { ref, ...field } }) => (
        <NumberFormatBase
          // @ts-ignore
          customInput={TextField}
          label={label}
          error={!!error}
          helperText={error}
          getInputRef={ref}
          {...rest}
          {...field}
        />
      )}
    />
  );
};

export default PhoneInput;
