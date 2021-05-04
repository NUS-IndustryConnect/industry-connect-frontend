import React from 'react';
import { useSelector } from 'react-redux';

import Form from '../../../../common/Form';
import { companiesDropdownSelector } from '../../../../redux/industry/companySlice';

export const getUserFields = data => ({
  // name: data.get('name'),
  email: data.get('email'),
});

export default function UsersForm({ submit, initial, resettable }) {
  const companiesDropdown = useSelector(companiesDropdownSelector);
  return (
    <Form
      fields={[
        { type: "dropdown", name: "companyId", label: "Company", options: companiesDropdown, initial: initial?.companyId, disabled: Boolean(initial) },
        // { type: "text", name: "name", label: "Name", initial: initial?.name },
        { type: "email", name: "email", label: "Email Address", initial: initial?.email },
      ]}
      submit={submit}
      submitLabel={initial ? "Update" : "Create"}
      resettable={resettable}
    />
  )
}
