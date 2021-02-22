import React from 'react';
import { useSelector } from 'react-redux';

import Form from '../../../../common/Form';
import { companiesDropdownSelector } from '../../../../redux/industry/companySlice';

export const getUserFields = data => ({
  name: data.get('name'),
  userEmail: data.get('userEmail'),
  companyId: data.get('companyId'),
});

export default function UsersForm({ submit, initial }) {
  const companiesDropdown = useSelector(companiesDropdownSelector);
  return (
    <Form
      fields={[
        { type: "text", name: "name", label: "Name", initial: initial?.name },
        { type: "email", name: "userEmail", label: "Email Address", initial: initial?.userEmail },
        { type: "dropdown", name: "companyId", label: "Company", options: companiesDropdown, initial: initial?.company },
      ]}
      submit={submit}
      submitLabel={initial ? "Update" : "Create"}
    />
  )
}
