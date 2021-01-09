import React from 'react';

import Page from '../../Page';
import PostPreview from '../../../../common/post/PostPreview';
import ContactButton from './ContactButton';
import { useParams } from 'react-router-dom';
import { postSelector } from '../../../../redux/industry/postSlice';
import { useSelector } from 'react-redux';

export default function Preview() {
  const { id } = useParams();
  const data = useSelector(postSelector(id));

  return (
    <Page
      title="View Post"
      isError={!Boolean(data)}
      errorMessage={<p>Post not found. Please select a different post.</p>}
    >
    </Page>
  )
}