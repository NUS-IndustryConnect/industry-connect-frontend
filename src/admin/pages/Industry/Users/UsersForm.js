import React from 'react';
import { useSelector } from 'react-redux';

import Form from '../../../../common/Form';
import { companiesDropdownSelector } from '../../../../redux/industry/companySlice';

export const getUserFields = data => ({
  name: data.get('name'),
  userEmail: data.get('email'),
  companyID: data.get('company'),
});

export default function UsersForm({ submit, initial }) {
  const companiesDropdown = useSelector(companiesDropdownSelector);
  return (
    <Form
      fields={[
        { type: "name", name: "text", label: "Name", initial: initial?.name },
        { type: "email", name: "email", label: "Email Address", initial: initial?.email },
        { type: "dropdown", name: "company", label: "Company", options: companiesDropdown, initial: initial?.company },
      ]}
      submit={submit}
      submitLabel={initial ? "Update" : "Create"}
    />
  )
}