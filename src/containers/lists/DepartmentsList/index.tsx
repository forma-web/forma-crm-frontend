import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import DeletePopup from '../../../components/DeletePopup';
import Dictionary from '../../../components/Dictionary';
import { DEPARTMENT_FIELDS } from '../../../constants/fields/dictionaries';
import { selectDepartments } from '../../../store/selectors';
import { ContainerBlockStyled } from '../../../styles/containers';
import { TDepartment, TDepartmentFields } from '../../../types/company';

const DepartmentsList = () => {
  // const departments = useSelector(selectDepartments);
  const departments = [
    { id: 1, name: '1234567' },
    { id: 2, name: 'asdada' },
  ];

  if (!departments.length) return null;

  return (
    <ContainerBlockStyled>
      {/* <DeletePopup open={true}>Вы уверены, что хотите удалить отдел</DeletePopup> */}
      <Dictionary<TDepartmentFields, TDepartment> data={departments} fields={DEPARTMENT_FIELDS} />
    </ContainerBlockStyled>
  );
};

export default memo(DepartmentsList);
