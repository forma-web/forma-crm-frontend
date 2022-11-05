import AddIcon from '@mui/icons-material/Add';
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import Block from '../../../components/Block';
import List from '../../../components/List';
import { selectDepartments } from '../../../store/selectors';
import { BlockBaseStyled, ContainerBlockStyled } from '../../../styles/containers';
import { ItemBodyStyled, ItemStyled } from '../../home/CompaniesList/styled';

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const DepartmentsList = () => {
  // const departments = useSelector(selectDepartments);
  const departments = [
    { id: 1, name: '1234567' },
    { id: 2, name: 'asdada' },
  ];

  if (!departments.length) return null;

  return (
    <ContainerBlockStyled>
      <BlockBaseStyled>
        <ItemStyled>
          <ItemBodyStyled fullWidth>
            <TextField fullWidth />
          </ItemBodyStyled>
          <ItemBodyStyled>
            <Button variant="contained">
              <AddIcon />
            </Button>
          </ItemBodyStyled>
        </ItemStyled>
      </BlockBaseStyled>
      <List values={departments} />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell>Calories</TableCell>
              <TableCell>Fat&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>
                  <TextField fullWidth />
                </TableCell>
                <TableCell>
                  <TextField fullWidth />
                </TableCell>
                <TableCell />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ContainerBlockStyled>
  );
};

export default memo(DepartmentsList);
