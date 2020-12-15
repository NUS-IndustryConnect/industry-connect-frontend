import React from 'react';
import { useHistory } from 'react-router-dom';

import Page from '../../Page';
import Form from '../../Form';

export default function New() {
  const history = useHistory();
  const submit = data => {
    const companyObj = {
      companyName: data.get('name'),
      tier: data.get('tier'),
    };
    console.log(companyObj);
    history.push('/admin/industry/companies');
  }
  return (
    <Page title="New Company">
      <Form
        fields={[
          { type: "text", name: "name", label: "Company Name" },
          { type: "dropdown", name: "tier", label: "Tier", options: [{ value: 1, label: "Gold" }, { value: 2, label: "Silver" }]},
        ]}
        submit={submit}
        submitLabel="Create"
      />
    </Page>
  )
}