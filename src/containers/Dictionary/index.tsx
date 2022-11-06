import { Paper, TableBody, TableContainer } from '@mui/material';
import React, { useState } from 'react';

import DeletePopup from '../../components/DeletePopup';
import Item from '../../components/Item';
import ItemForm from '../../components/ItemForm';
import { TFields, TFieldsData, TFieldsWithID } from '../../types/form';
import { TableStyled } from './styled';

export type TDictionary<F extends TFields, T extends TFieldsWithID<F>> = {
  data: T[];
  fields: TFieldsData<F>;
};

const Dictionary = <F extends TFields, T extends TFieldsWithID<F>>(props: TDictionary<F, T>) => {
  const { data, fields } = props;
  const rows = Object.keys(fields) as unknown as Array<keyof F>;

  const [changedItem, setChangedItem] = useState<number | null>(null);
  const [deletedItem, setDeletedItem] = useState<number | null>(null);

  return (
    <>
      <TableContainer component={Paper}>
        <TableStyled>
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
                <Item<F, T>
                  key={itemData.id}
                  data={itemData}
                  fields={rows}
                  onEdit={setChangedItem}
                  onDelete={setDeletedItem}
                />
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
        </TableStyled>
      </TableContainer>
      <DeletePopup
        open={deletedItem !== null}
        onClose={() => setDeletedItem(null)}
        onDelete={() => {}}
      />
    </>
  );
};

export default Dictionary;
