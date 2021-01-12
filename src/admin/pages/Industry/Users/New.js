import React from 'react';
import { useHistory } from 'react-router-dom';
<<<<<<< HEAD

import Page from '../../Page';
import UsersForm, { getUserFields } from './UsersForm';

export default function New() {
  const history = useHistory();
  // TODO: link up to BE API (temporary placeholder)
  const submit = data => {
    const companyObj = getUserFields(data);
    console.log(companyObj);
=======
import { useDispatch } from 'react-redux';

import Page from '../../Page';
import UsersForm, { getUserFields } from './UsersForm';
import { userThunks } from '../../../../redux/industry/userSlice';

export default function New() {
  const history = useHistory();
  const dispatch = useDispatch();
  const submit = data => {
    const userObj = getUserFields(data);
    dispatch(userThunks.postUser(userObj))
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
    history.push('/admin/industry/users');
  }
  return (
    <Page title="New Company User">
      <UsersForm submit={submit}/>
    </Page>
  )
}