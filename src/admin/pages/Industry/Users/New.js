import React from 'react';
import { useHistory } from 'react-router-dom';

import Page from '../../Page';
import Form from '../../Form';

export default function New() {
  const history = useHistory();
  const submit = data => {
    const companyObj = {
      email: data.get('email'),
      company: data.get('company'),
    };
    console.log(companyObj);
    history.push('/admin/industry/users');
  }
  return (
    <Page title="New Company User">
      <Form
        fields={[
          { type: "email", name: "email", label: "Email Address" },
          { type: "text", name: "company", label: "Company" },
        ]}
        submit={submit}
        submitLabel="Create"
      />
    </Page>
  )
}