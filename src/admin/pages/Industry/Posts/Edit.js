import React from 'react';
<<<<<<< HEAD
import { useHistory } from 'react-router-dom';

import Page from '../../Page';
import PostsForm, { getPostFields } from './PostsForm';

export default function Edit() {
  const history = useHistory();
  // TODO: link up to BE API (temporary placeholder)
  const submit = data => {
    const companyObj = getPostFields(data);
    history.push('/admin/industry/posts');
    console.log(companyObj);
  }
  // TODO: link up to Redux (temporary placeholder)
  const initial = {
    title: "Title",
    description: "Description",
    videoLink: "https://www.youtube.com/watch?v=Jf_2EyDNywE",
    moreLink: "https://www.youtube.com/watch?v=Jf_2EyDNywE",
    expiryDate: new Date().toISOString().substr(0,10),
  }
  return (
    <Page title="Edit Post">
      <PostsForm submit={submit} initial={initial} />
=======
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import PostsForm, { getPostFields } from '../../../../common/post/PostsForm';
import { postOrRequestSelector, postThunks } from '../../../../redux/industry/postSlice';
import Page from '../../Page';

export default function Edit() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentValues = useSelector(postOrRequestSelector(id));

  const submit = data => {
    const postObj = {
      ...currentValues,
      ...getPostFields(data)
    };
    dispatch(postThunks.updatePost(postObj))
    history.push('/admin/industry/posts');
  }
  return (
    <Page
      title="Edit Post"
      isError={!Boolean(currentValues)}
      errorMessage={<p>Post not found. Please select another post.</p>}
    >
      <PostsForm submit={submit} initial={currentValues} />
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
    </Page>
  )
}