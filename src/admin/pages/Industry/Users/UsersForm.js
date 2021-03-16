import React from 'react';
import { useSelector } from 'react-redux';

import Form from '../../../../common/Form';
import { companiesDropdownSelector } from '../../../../redux/industry/companySlice';

export const getUserFields = data => ({
  name: data.get('name'),
  email: data.get('email'),
  companyId: data.get('companyId'),
});

export default function UsersForm({ submit, initial }) {
  const companiesDropdown = useSelector(companiesDropdownSelector);
  return (
    <Form
      fields={[
        // { type: "text", name: "name", label: "Name", initial: initial?.name },
        { type: "email", name: "email", label: "Email Address", initial: initial?.email },
        { type: "dropdown", name: "companyId", label: "Company", options: companiesDropdown, initial: initial?.companyId },
      ]}
      submit={submit}
      submitLabel={initial ? "Update" : "Create"}
    />
  )
}
