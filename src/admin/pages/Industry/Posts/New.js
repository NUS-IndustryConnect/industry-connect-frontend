import React from 'react';
import { useHistory } from 'react-router-dom';

import Page from '../../Page';
import PostsForm, { getPostFields } from './PostsForm';

export default function New() {
  const history = useHistory();
  const submit = data => {
    const companyObj = getPostFields(data);
    history.push('/admin/industry/posts');
    console.log(companyObj);
  }
  return (
    <Page title="New Post">
      <PostsForm submit={submit}/>
    </Page>
  )
}