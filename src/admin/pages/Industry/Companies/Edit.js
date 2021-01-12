import React from 'react';
<<<<<<< HEAD
import { useHistory } from 'react-router-dom';

import Page from '../../Page';
import CompaniesForm, { getCompanyFields } from './CompaniesForm';

export default function Edit() {
  const history = useHistory();
  // TODO: link up to BE API (temporary placeholder)
  const submit = data => {
    const companyObj = getCompanyFields(data);
    console.log(companyObj);
    history.push('/admin/industry/companies');
  }
  return (
    <Page title="Edit Company">
      <CompaniesForm
        submit={submit}
        initial={{ name: "hi", tier: 2 }}
      />
=======
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

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
    history.push('/admin/industry/companies');
  }
  return (
    <Page
      title="Edit Company"
      isError={!Boolean(currentValues)}
      errorMessage={<p>Company not found. Please select another company.</p>}
    >
      <CompaniesForm submit={submit} initial={currentValues} />
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
    </Page>
  )
}