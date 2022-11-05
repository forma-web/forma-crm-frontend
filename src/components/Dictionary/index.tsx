import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
} from '@mui/material';
import React, { FC, memo, useState } from 'react';

import { TFieldsData } from '../../types/form';

type TFields = {
  [x: string]: unknown;
};

type TFieldsWithID<T> = T & { id: number };

type TDictionary<F extends TFields, T extends TFieldsWithID<F>> = {
  data: T[];
  fields: TFieldsData<F>;
};

type TItem<F extends TFields, T extends TFieldsWithID<F>> = {
  data: T;
  fields: (keyof F)[];
};

const Item = <F extends TFields, T extends TFieldsWithID<F>>(props: TItem<F, T>) => {
  const { data, fields } = props;
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      {fields.map((cell) => (
        <TableCell>{data[cell as keyof T] as string}</TableCell>
      ))}
      <TableCell />
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
          {data.map((itemData) => (
            <Item<F, T> data={itemData} fields={rows} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Dictionary;
