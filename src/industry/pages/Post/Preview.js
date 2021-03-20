import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

import { requestThunks } from '../../../redux/industry/requestSlice';
import { userSelector } from '../../../redux/user/userSelectors';
import Page from '../../../common/Page';
import PostPreview from '../../../common/post/PostPreview';

export default function Preview() {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const data = location?.state.data;
  const { userInfo } = useSelector(userSelector);

  const submit = () => {
    const filledData = {
      ...data,
      companyId: userInfo.companyId,
      companyUserId: userInfo.companyUserId,
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
