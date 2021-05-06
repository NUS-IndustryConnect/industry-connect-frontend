import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import PostsForm, { getPostFields } from '../../../../common/post/PostsForm';
import { postThunks } from '../../../../redux/industry/postSlice';
import Page from '../../Page';

export default function New() {
  const history = useHistory();
  const dispatch = useDispatch();

  const submit = data => {
    const postObj = getPostFields(data);
    dispatch(postThunks.createPost(postObj));
    history.push('/admin/industry/posts');
    toast.success("Created post");
  }
  return (
    <Page title="New Post">
      <PostsForm submit={submit} submitLabel="Create" isAdmin/>
    </Page>
  )
}
