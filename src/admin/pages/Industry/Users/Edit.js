import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { companyUserSelector, companyUserThunks } from '../../../../redux/industry/userSlice';
import Page from '../../Page';
import UsersForm, { getUserFields } from './UsersForm';

export default function Edit() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentValues = useSelector(companyUserSelector(id));

  const submit = data => {
    const userObj = {
      companyUserId: currentValues.companyUserId,
      companyId: currentValues.companyId,
      ...getUserFields(data)
    };
    dispatch(companyUserThunks.updateUser(userObj));
    history.push(`/admin/industry/users/view/${id}`);
    toast.success("Updated user");
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
