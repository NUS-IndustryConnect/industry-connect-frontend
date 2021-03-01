import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

import Page from '../../../common/Page';
import PostPreview from '../../../common/post/PostPreview';
import { requestThunks } from '../../../redux/industry/requestSlice';

export default function Preview() {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const data = location?.state.data;

  const submit = () => {
    // TODO: WAITING FOR COMPANY AUTHENTICATION
    // get appropriate companyId and companyUserId
    const filledData = {
      ...data,
      companyId: "nD7GMgRxi8wAe4LD",
      companyUserId: "N0hJEtSr8vFiQvmn",
    }
    dispatch(requestThunks.createRequest(filledData));
    history.push("/industry/posts/submitted");
  }
  return (
    <Page
      title="Preview Post"
      isError={!Boolean(data)}
      errorMessage={<p>Post not found. Please select another post.</p>}
    >
      <PostPreview data={data} urlPath="/industry/posts" />
      <input type="button" onClick={submit} value="Submit for vetting" className="primary"/>
    </Page>
  )
}
