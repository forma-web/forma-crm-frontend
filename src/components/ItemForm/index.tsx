import CloseIcon from '@mui/icons-material/Close';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { IconButton, TableCell, TableRow, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useFieldProps } from '../../hooks/useFieldProps';
import { TFields, TFieldsData, TFieldsWithID } from '../../types/form';

type TItemForm<F extends TFields, T extends TFieldsWithID<F>> = {
  data?: T;
  fields: (keyof F)[];
  fieldsData: TFieldsData<F>;
  onSubmit: (data: F) => void;
  onCancel: () => void;
};

const ItemForm = <F extends TFields, T extends TFieldsWithID<F>>(props: TItemForm<F, T>) => {
  const { data, fields, fieldsData, onSubmit, onCancel } = props;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<F>({ mode: 'all' });

  const getFieldProps = useFieldProps<F>(fieldsData, register, errors);

  return (
    <TableRow>
      {fields.map((cell) => (
        <TableCell key={cell as string}>
          <TextField
            defaultValue={(data?.[cell as keyof T] as string) ?? ''}
            fullWidth
            {...getFieldProps(cell)}
          />
        </TableCell>
      ))}
      <TableCell align="right">
        <IconButton onClick={onCancel}>
          <CloseIcon />
        </IconButton>
        <IconButton onClick={handleSubmit(onSubmit)} color="primary" disabled={!isValid}>
          <EditOutlinedIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default ItemForm;
