import React from 'react';
<<<<<<< HEAD
import { useHistory } from 'react-router-dom';

=======
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userSelector, userThunks } from '../../../../redux/industry/userSlice';
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
import Page from '../../Page';
import UsersForm, { getUserFields } from './UsersForm';

export default function Edit() {
  const history = useHistory();
<<<<<<< HEAD
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
=======
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentValues = useSelector(userSelector(id));

  const submit = data => {
    const userObj = {
      ...currentValues,
      ...getUserFields(data)
    };
    dispatch(userThunks.updateUser(userObj));
    history.push('/admin/industry/users');
  }

  return (
    <Page
      title="Edit Company User" 
      isError={!Boolean(currentValues)}
      errorMessage={<p>User not found. Please select another user.</p>}
    >
      <UsersForm submit={submit} initial={currentValues} />
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
    </Page>
  )
}