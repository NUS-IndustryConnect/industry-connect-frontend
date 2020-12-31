import React from 'react';

import Form from '../../../../common/Form';

export const getUserFields = data => ({
  email: data.get('email'),
  company: data.get('company'),
});

export default function UsersForm({ submit, initial }) {
  return (
    <Form
      fields={[
        { type: "email", name: "email", label: "Email Address", initial: initial?.email },
        { type: "text", name: "company", label: "Company", initial: initial?.company },
      ]}
      submit={submit}
      submitLabel={initial ? "Update" : "Create"}
    />
  )
}