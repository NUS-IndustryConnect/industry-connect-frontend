import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Page from '../../../common/Page';
import PostsForm, { getPostFields } from '../../../common/post/PostsForm';
import { useSelector } from 'react-redux';
import { postOrRequestSelector } from '../../../redux/industry/postSlice';

export default function Edit() {
  const history = useHistory();
  const { id } = useParams();
  const initial = useSelector(postOrRequestSelector(id));
  // TODO: replace with redux dispatch
  const submit = data => {
    const postObj = getPostFields(data);
    history.push('/industry/posts');
    console.log(postObj);
  }
  return (
    <Page title="Edit Post">
      <PostsForm submit={submit} submitLabel="Update" initial={initial} />
    </Page>
  )
}