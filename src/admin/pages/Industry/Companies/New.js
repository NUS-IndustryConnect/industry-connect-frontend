import React from 'react';
import { useHistory } from 'react-router-dom';

import Page from '../../Page';
import CompaniesForm, { getCompanyFields } from './CompaniesForm';

export default function New() {
  const history = useHistory();
  const submit = data => {
    const companyObj = getCompanyFields(data);
    console.log(companyObj);
    history.push('/admin/industry/companies');
  }
  return (
    <Page title="New Company">
      <CompaniesForm submit={submit} />
    </Page>
  )
}