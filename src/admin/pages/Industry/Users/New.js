import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import Page from '../../Page';
import UsersForm, { getUserFields } from './UsersForm';
import { companyUserThunks } from '../../../../redux/industry/userSlice';

export default function New() {
  const history = useHistory();
  const dispatch = useDispatch();
  const submit = data => {
    const userObj = getUserFields(data);
    dispatch(companyUserThunks.postUser(userObj))
    history.push('/admin/industry/users');
    toast.success("Created company");
  }
  return (
    <Page title="New Company User">
      <UsersForm submit={submit}/>
    </Page>
  )
}
