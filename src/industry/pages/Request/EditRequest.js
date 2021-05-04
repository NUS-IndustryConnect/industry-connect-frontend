import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import PostsForm, { getPostFields } from '../../../common/post/PostsForm';
import { requestThunks, requestSelector } from '../../../redux/industry/requestSlice';
import { userInfoSelector } from '../../../redux/user/userSelectors';
import Page from '../Page';

export default function EditRequest() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const initial = useSelector(requestSelector(id));
  const userInfo = useSelector(userInfoSelector);

  const submit = data => {
    const postObj = getPostFields(data);
    const filledData = {
      ...postObj,
      companyId: userInfo.companyId,
      companyUserId: userInfo.companyUserId,
    }
    // TODO: delete the original request? BE has no API for this though
    dispatch(requestThunks.createRequest(filledData)); // make the request again
    history.push('/industry/requests');
  }
  return (
    <Page title="Edit Request">
      <PostsForm submit={submit} submitLabel="Resubmit" initial={initial} resettable/>
    </Page>
  )
}
