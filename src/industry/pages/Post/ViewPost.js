import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

import PostPreview from '../../../common/post/PostPreview';
import { postSelector } from '../../../redux/industry/postSlice';
import Page from '../Page';

export default function ViewPost() {
  const history = useHistory();
  const { id } = useParams();
  const data = useSelector(postSelector(id));
  return (
    <Page
      title="View Post"
      isError={!Boolean(data)}
      errorMessage={<p>Post not found. Please select another post.</p>}
    >
      <button className="secondary" onClick={history.goBack}><IoIosArrowBack />Back</button>
      <PostPreview data={data} urlPath="/industry/posts" />
    </Page>
  )
}