import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { useAddOfficeMutation, useDeleteOfficeMutation, useEditOfficeMutation } from '../../../api';
import { OFFICE_FIELDS } from '../../../constants/fields/dictionaries';
import { selectCompanyID, selectOffices } from '../../../store/selectors';
import { ContainerBlockStyled } from '../../../styles/containers';
import { TOffices } from '../../../types/company';
import { TOfficesFields } from '../../../types/forms/company';
import Dictionary from '../../Dictionary';

const DepartmentsList = () => {
  const companyID = useSelector(selectCompanyID);
  const offices = useSelector(selectOffices);

  const [addOffice] = useAddOfficeMutation();
  const [editOffice] = useEditOfficeMutation();
  const [deleteOffice] = useDeleteOfficeMutation();

  const handleAddOffice = (data: TOfficesFields) => {
    if (companyID === null) return;
    addOffice({ companyID, ...data });
  };

  const handleEditOffice = (data: TOffices) => {
    if (companyID === null) return;
    editOffice({ companyID, ...data });
  };

  const handleDeleteOffice = (id: number) => {
    if (companyID === null) return;
    deleteOffice({ id, companyID });
  };

  return (
    <ContainerBlockStyled>
      <Dictionary<TOfficesFields, TOffices>
        data={offices}
        fields={OFFICE_FIELDS}
        onAddItem={handleAddOffice}
        onEditItem={handleEditOffice}
        onDeleteItem={handleDeleteOffice}
      />
    </ContainerBlockStyled>
  );
};

export default memo(DepartmentsList);
