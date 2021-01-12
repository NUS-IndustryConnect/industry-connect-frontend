import React from 'react';
<<<<<<< HEAD

import Form from '../../Form';

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
=======
import { useSelector } from 'react-redux';

import Form from '../../../../common/Form';
import { companiesDropdownSelector } from '../../../../redux/industry/companySlice';

export const getUserFields = data => ({
  name: data.get('name'),
  userEmail: data.get('userEmail'),
  companyID: data.get('companyID'),
});

export default function UsersForm({ submit, initial }) {
  const companiesDropdown = useSelector(companiesDropdownSelector);
  return (
    <Form
      fields={[
        { type: "text", name: "name", label: "Name", initial: initial?.name },
        { type: "email", name: "userEmail", label: "Email Address", initial: initial?.userEmail },
        { type: "dropdown", name: "companyID", label: "Company", options: companiesDropdown, initial: initial?.company },
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
      ]}
      submit={submit}
      submitLabel={initial ? "Update" : "Create"}
    />
  )
}