import { Paper, TableBody, TableCell, TableContainer, TableHead } from '@mui/material';
import React, { useCallback, useState } from 'react';

import DeletePopup from '../../components/DeletePopup';
import Item from '../../components/Item';
import ItemForm from '../../components/ItemForm';
import { ContainerBlockStyled } from '../../styles/containers';
import { TFields, TFieldsData, TFieldsWithID, TId } from '../../types/form';
import { TableStyled } from './styled';

export type TDictionary<F extends TFields, T extends TFieldsWithID<F>> = {
  data: T[];
  fields: TFieldsData<F>;
  onAddItem: (data: F) => void;
  onEditItem: (data: T) => void;
  onDeleteItem: (id: number) => void;
};

const Dictionary = <F extends TFields, T extends TFieldsWithID<F>>(props: TDictionary<F, T>) => {
  const { data, fields, onAddItem, onEditItem, onDeleteItem } = props;
  const rows = Object.keys(fields) as unknown as Array<keyof F>;

  const [changedItem, setChangedItem] = useState<number | null>(null);
  const [deletedItem, setDeletedItem] = useState<number | null>(null);

  const handleEditItem = useCallback(
    (id: number) => (formData: F) => onEditItem({ id, ...formData } as T),
    [],
  );

  const handleDeleteItem = useCallback(() => {
    if (deletedItem === null) return;
    onDeleteItem(deletedItem);
    setDeletedItem(null);
  }, [deletedItem]);

  return (
    <ContainerBlockStyled>
      {!!data.length && (
        <TableContainer component={Paper}>
          <TableStyled>
            <TableHead>
              {rows.map((row) => (
                <TableCell key={row as string}>{fields[row].label}</TableCell>
              ))}
              <TableCell />
            </TableHead>
            <TableBody>
              {[...data]
                .sort((a, b) => a.id - b.id)
                .map((itemData) =>
                  changedItem === itemData.id ? (
                    <ItemForm<F, T>
                      key={itemData.id}
                      data={itemData}
                      fields={rows}
                      fieldsData={fields}
                      onCancel={() => setChangedItem(null)}
                      onSubmit={handleEditItem(itemData.id)}
                    />
                  ) : (
                    <Item<F, T>
                      key={itemData.id}
                      data={itemData}
                      fields={rows}
                      onEdit={setChangedItem}
                      onDelete={setDeletedItem}
                    />
                  ),
                )}
            </TableBody>
          </TableStyled>
        </TableContainer>
      )}
      <TableContainer component={Paper}>
        <TableStyled>
          <TableBody>
            <ItemForm<F, T>
              fields={rows}
              fieldsData={fields}
              onSubmit={onAddItem}
              onCancel={() => {}}
            />
          </TableBody>
        </TableStyled>
      </TableContainer>
      <DeletePopup
        open={deletedItem !== null}
        onClose={() => setDeletedItem(null)}
        onDelete={handleDeleteItem}
      />
    </ContainerBlockStyled>
  );
};

export default Dictionary;
