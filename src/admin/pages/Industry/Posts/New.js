import React from 'react';
import { useHistory } from 'react-router-dom';

import Page from '../../Page';
import PostsForm, { getPostFields } from '../../../../common/post/PostsForm';
import { useDispatch } from 'react-redux';
import { postThunks } from '../../../../redux/industry/postSlice';

export default function New() {
  const history = useHistory();
  const dispatch = useDispatch();

  const submit = data => {
    const postObj = getPostFields(data);
    dispatch(postThunks.createPost(postObj));
    history.push('/admin/industry/posts');
  }
  return (
    <Page title="New Post">
      <PostsForm submit={submit}/>
    </Page>
  )
}