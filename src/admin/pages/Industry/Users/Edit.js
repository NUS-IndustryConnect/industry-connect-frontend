import React from 'react';
import { useHistory } from 'react-router-dom';

import Page from '../../Page';
import UsersForm, { getUserFields } from './UsersForm';

export default function Edit() {
  const history = useHistory();
  // TODO: link up to BE API (temporary placeholder)
  const submit = data => {
    const companyObj = getUserFields(data);
    console.log(companyObj);
    history.push('/admin/industry/users');
  }
  // TODO: link up to Redux (temporary placeholder)
  const initial = { email: "blah@example.com", company: "Shopee" };
  return (
    <Page title="Edit Company User">
      <UsersForm submit={submit} initial={initial} />
    </Page>
  )
}