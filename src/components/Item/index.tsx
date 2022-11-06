import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { IconButton, TableCell, TableRow } from '@mui/material';
import React from 'react';

import { TFields, TFieldsWithID } from '../../types/form';

type TItemProps<F extends TFields, T extends TFieldsWithID<F>> = {
  data: T;
  fields: (keyof F)[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

const Item = <F extends TFields, T extends TFieldsWithID<F>>(props: TItemProps<F, T>) => {
  const { data, fields, onEdit, onDelete } = props;
  return (
    <TableRow>
      {fields.map((cell) => (
        <TableCell key={cell as string}>{data[cell as keyof T] as string}</TableCell>
      ))}
      <TableCell align="right">
        <IconButton onClick={() => onDelete(data.id)}>
          <DeleteOutlinedIcon />
        </IconButton>
        <IconButton onClick={() => onEdit(data.id)}>
          <EditOutlinedIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default Item;
