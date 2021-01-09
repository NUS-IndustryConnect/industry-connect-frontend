import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Page from '../../Page';
import UsersForm, { getUserFields } from './UsersForm';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector, userThunks } from '../../../../redux/industry/userSlice';

export default function Edit() {
  const history = useHistory();
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
    </Page>
  )
}