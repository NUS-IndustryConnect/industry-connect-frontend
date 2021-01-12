import React from 'react';
import { useHistory } from 'react-router-dom';
<<<<<<< HEAD

import Page from '../../Page';
import PostsForm, { getPostFields } from './PostsForm';

export default function New() {
  const history = useHistory();
  // TODO: link up to BE API (temporary placeholder)
  const submit = data => {
    const companyObj = getPostFields(data);
    history.push('/admin/industry/posts');
    console.log(companyObj);
=======
import { useDispatch } from 'react-redux';

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
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
  }
  return (
    <Page title="New Post">
      <PostsForm submit={submit}/>
    </Page>
  )
}