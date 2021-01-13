import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Page from '../../../common/Page';
import PostPreview from '../../../common/post/PostPreview';
import { postOrRequestSelector } from '../../../redux/industry/postSlice';

export default function Preview() {
  const { id } = useParams();
  const data = useSelector(postOrRequestSelector(id));
  return (
    <Page
      title="View Post"
      isError={!Boolean(data)}
      errorMessage={<p>Post not found. Please select another post.</p>}
    >
      <PostPreview data={data} />
    </Page>
  )
}