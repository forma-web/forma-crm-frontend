import AddIcon from '@mui/icons-material/Add';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { IconButton, TextField } from '@mui/material';
import React, { FC, memo, useState } from 'react';

import { ItemBodyStyled, ItemStyled } from '../../containers/home/CompaniesList/styled';
import { BlockBaseStyled } from '../../styles/containers';

type TItemData = {
  id: number;
  name: string;
};

type TList = {
  values: TItemData[];
};

const Item: FC<TItemData> = ({ id, name }) => {
  return (
    <ItemStyled>
      <ItemBodyStyled>{name}</ItemBodyStyled>
      <ItemBodyStyled>
        <IconButton>
          <DeleteOutlinedIcon />
        </IconButton>
        <IconButton>
          <EditOutlinedIcon />
        </IconButton>
      </ItemBodyStyled>
    </ItemStyled>
  );
};

const List: FC<TList> = ({ values }) => {
  const [changedItem, setChangedItem] = useState<number | null>(null);
  if (!values.length) return null;

  return (
    <BlockBaseStyled>
      {values.map((item) => (changedItem === item.id ? null : <Item key={item.id} {...item} />))}
    </BlockBaseStyled>
  );
};

export default memo(List);
