import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import {
  useAddDepartmentMutation,
  useDeleteDepartmentMutation,
  useEditDepartmentMutation,
} from '../../../api';
import { DEPARTMENT_FIELDS } from '../../../constants/fields/dictionaries';
import { selectCompanyID, selectDepartments } from '../../../store/selectors';
import { ContainerBlockStyled } from '../../../styles/containers';
import { TDepartment } from '../../../types/company';
import { TId } from '../../../types/form';
import { TDepartmentFields } from '../../../types/forms/company';
import Dictionary from '../../Dictionary';

const DepartmentsList = () => {
  const companyID = useSelector(selectCompanyID);
  const departments = useSelector(selectDepartments);

  const [addDepartment] = useAddDepartmentMutation();
  const [editDepartment] = useEditDepartmentMutation();
  const [deleteDepartment] = useDeleteDepartmentMutation();

  const handleAddDepartment = (data: TDepartmentFields) => {
    if (companyID === null) return;
    addDepartment({ companyID, ...data });
  };

  const handleEditDepartment = (data: TDepartment) => {
    if (companyID === null) return;
    editDepartment({ companyID, ...data });
  };

  const handleDeleteDepartment = (id: number) => {
    if (companyID === null) return;
    deleteDepartment({ id, companyID });
  };

  return (
    <ContainerBlockStyled>
      <Dictionary<TDepartmentFields, TDepartment>
        data={departments}
        fields={DEPARTMENT_FIELDS}
        onAddItem={handleAddDepartment}
        onEditItem={handleEditDepartment}
        onDeleteItem={handleDeleteDepartment}
      />
    </ContainerBlockStyled>
  );
};

export default memo(DepartmentsList);
