import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useFieldProps } from '../../hooks/useFieldProps';
import { TFieldsData } from '../../types/form';
import { TDictionary, TFields, TFieldsWithID, TItem } from './types';

const Item = <F extends TFields, T extends TFieldsWithID<F>>(props: TItem<F, T>) => {
  const { data, fields, onEdit } = props;
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      {fields.map((cell) => (
        <TableCell key={cell as string}>{data[cell as keyof T] as string}</TableCell>
      ))}
      <TableCell align="right">
        <IconButton>
          <DeleteOutlinedIcon />
        </IconButton>
        <IconButton onClick={() => onEdit(data.id)}>
          <EditOutlinedIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

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
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
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

const Dictionary = <F extends TFields, T extends TFieldsWithID<F>>(props: TDictionary<F, T>) => {
  const { data, fields } = props;
  const rows = Object.keys(fields) as unknown as Array<keyof F>;

  const [changedItem, setChangedItem] = useState<number | null>(null);
  if (!data.length) return null;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {data.map((itemData) =>
            changedItem === itemData.id ? (
              <ItemForm<F, T>
                key={itemData.id}
                data={itemData}
                fields={rows}
                fieldsData={fields}
                onCancel={() => setChangedItem(null)}
                onSubmit={(formData: F) => console.log(formData)}
              />
            ) : (
              <Item<F, T> key={itemData.id} data={itemData} fields={rows} onEdit={setChangedItem} />
            ),
          )}
          {changedItem === null && (
            <ItemForm<F, T>
              fields={rows}
              fieldsData={fields}
              onSubmit={(formData: F) => console.log(formData)}
              onCancel={() => {}}
            />
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Dictionary;
