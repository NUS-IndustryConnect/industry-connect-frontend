import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PostPreview from '../../../../common/post/PostPreview';
import { postSelector } from '../../../../redux/industry/postSlice';
import Page from '../../Page';

export default function Preview() {
  const { id } = useParams();
  const data = useSelector(postSelector(id));

  return (
    <Page
      title="View Post"
      isError={!Boolean(data)}
      errorMessage={<p>Post not found. Please select a different post.</p>}
    >
      <PostPreview data={data} />
    </Page>
  )
}