import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import PostPreview from '../../../common/post/PostPreview';
import BackButton from '../../../common/BackButton';
import { postSelector } from '../../../redux/industry/postSlice';
import Page from '../Page';

export default function ViewPost() {
  const { id } = useParams();
  const data = useSelector(postSelector(id));
  return (
    <Page
      title="View Post"
      isError={!Boolean(data)}
      errorMessage={<p>Post not found. Please select another post.</p>}
    >
      <BackButton />
      <PostPreview data={data} urlPath="/industry/posts" />
    </Page>
  )
}