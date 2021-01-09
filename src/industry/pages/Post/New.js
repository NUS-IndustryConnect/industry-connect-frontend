import React from 'react';
import { useHistory } from 'react-router-dom';

import Page from '../../../common/Page';
import PostsForm, { getPostFields } from '../../../common/post/PostsForm';

export default function New() {
  const history = useHistory();
  // TODO: replace with redux dispatch
  const submit = data => {
    const postObj = getPostFields(data);
    history.push('/industry/post/submitted');
    console.log(postObj);
  }
  return (
    <Page title="New Post">
      <PostsForm submit={submit}/>
    </Page>
  )
}