import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import Dictionary from '../../../components/Dictionary';
import { DEPARTMENT_FIELDS } from '../../../constants/fields/dictionaries';
import { selectDepartments } from '../../../store/selectors';
import { ContainerBlockStyled } from '../../../styles/containers';
import { TDepartment, TDepartmentFields } from '../../../types/company';

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const DepartmentsList = () => {
  // const departments = useSelector(selectDepartments);
  const departments = [
    { id: 1, name: '1234567' },
    { id: 2, name: 'asdada' },
  ];

  if (!departments.length) return null;

  return (
    <ContainerBlockStyled>
      {/* <BlockBaseStyled>
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
      </BlockBaseStyled> */}
      <Dictionary<TDepartmentFields, TDepartment> data={departments} fields={DEPARTMENT_FIELDS} />
    </ContainerBlockStyled>
  );
};

export default memo(DepartmentsList);
