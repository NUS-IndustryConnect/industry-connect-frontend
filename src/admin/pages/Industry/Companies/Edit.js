import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import Page from '../../Page';
import CompaniesForm, { getCompanyFields } from './CompaniesForm';
import { companySelector, companyThunks } from '../../../../redux/industry/companySlice';

export default function Edit() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentValues = useSelector(companySelector(id));

  const submit = data => {
    const companyObj = {
      ...currentValues,
      ...getCompanyFields(data)
    };
    dispatch(companyThunks.updateCompany(companyObj));
    history.push(`/admin/industry/companies/view/${id}`);
    toast.success("Updated company");
  }
  return (
    <Page
      title="Edit Company"
      isError={!Boolean(currentValues)}
      errorMessage={<p>Company not found. Please select another company.</p>}
    >
      <CompaniesForm submit={submit} initial={currentValues} />
    </Page>
  )
}
