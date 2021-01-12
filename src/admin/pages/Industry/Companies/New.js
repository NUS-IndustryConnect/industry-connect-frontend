import React from 'react';
import { useHistory } from 'react-router-dom';
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
    history.push('/admin/industry/companies');
  }
  return (
    <Page title="New Company">
      <CompaniesForm submit={submit} />
    </Page>
  )
}
