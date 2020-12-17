import React from 'react';
import { useHistory } from 'react-router-dom';

import Page from '../../Page';
import CompaniesForm, { getCompanyFields } from './CompaniesForm';

export default function Edit() {
  const history = useHistory();
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
    </Page>
  )
}