import React from 'react';
import { useHistory } from 'react-router-dom';

import Page from '../../Page';
import UsersForm, { getUserFields } from './UsersForm';

export default function Edit() {
  const history = useHistory();
  const submit = data => {
    const companyObj = getUserFields(data);
    console.log(companyObj);
    history.push('/admin/industry/users');
  }
  return (
    <Page title="Edit Company User">
      <UsersForm submit={submit} initial={{ email: "blah@example.com", company: "Shopee" }} />
    </Page>
  )
}