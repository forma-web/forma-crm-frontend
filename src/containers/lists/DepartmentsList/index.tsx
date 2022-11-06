import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { DEPARTMENT_FIELDS } from '../../../constants/fields/dictionaries';
import { selectDepartments } from '../../../store/selectors';
import { ContainerBlockStyled } from '../../../styles/containers';
import { TDepartment, TDepartmentFields } from '../../../types/company';
import Dictionary from '../../Dictionary';

const DepartmentsList = () => {
  // const departments = useSelector(selectDepartments);
  const departments = [
    { id: 1, name: '1234567' },
    { id: 2, name: 'asdada' },
  ];

  return (
    <ContainerBlockStyled>
      <Dictionary<TDepartmentFields, TDepartment> data={departments} fields={DEPARTMENT_FIELDS} />
    </ContainerBlockStyled>
  );
};

export default memo(DepartmentsList);
