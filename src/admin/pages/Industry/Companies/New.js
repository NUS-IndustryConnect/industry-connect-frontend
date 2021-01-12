import React from 'react';
import { useHistory } from 'react-router-dom';
<<<<<<< HEAD

import Page from '../../Page';
import CompaniesForm, { getCompanyFields } from './CompaniesForm';

export default function New() {
  const history = useHistory();
  // TODO: link up to BE API (temporary placeholder)
  const submit = data => {
    const companyObj = getCompanyFields(data);
    console.log(companyObj);
=======
import { useDispatch } from 'react-redux';

import Page from '../../Page';
import CompaniesForm, { getCompanyFields } from './CompaniesForm';
import { companyThunks } from '../../../../redux/industry/companySlice';

export default function New() {
  const history = useHistory();
  const dispatch = useDispatch();
  const submit = data => {
    const companyObj = getCompanyFields(data);
    dispatch(companyThunks.postCompany(companyObj));
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
    history.push('/admin/industry/companies');
  }
  return (
    <Page title="New Company">
      <CompaniesForm submit={submit} />
    </Page>
  )
}