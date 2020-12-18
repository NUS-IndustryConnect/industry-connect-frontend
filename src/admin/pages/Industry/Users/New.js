import React from 'react';
import { useHistory } from 'react-router-dom';

import Page from '../../Page';
import UsersForm, { getUserFields } from './UsersForm';

export default function New() {
  const history = useHistory();
  // TODO: link up to BE API (temporary placeholder)
  const submit = data => {
    const companyObj = getUserFields(data);
    console.log(companyObj);
    history.push('/admin/industry/users');
  }
  return (
    <Page title="New Company User">
      <UsersForm submit={submit}/>
    </Page>
  )
}