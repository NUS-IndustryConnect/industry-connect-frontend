import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoIosArrowBack } from 'react-icons/io';

import PostPreview from '../../../../common/post/PostPreview';
import { postSelector } from '../../../../redux/industry/postSlice';
import Page from '../../Page';

export default function View() {
  const history = useHistory();
  const { id } = useParams();
  const data = useSelector(postSelector(id));

  return (
    <Page
      title="View Post"
      isError={!Boolean(data)}
      errorMessage={<p>Post not found. Please select a different post.</p>}
    >
      <button className="secondary" onClick={history.goBack}><IoIosArrowBack />Back</button>
      <PostPreview data={data} urlPath="/admin/industry/posts" />
    </Page>
  )
}