import React from 'react';
import { useHistory } from 'react-router-dom';

import Page from '../../../common/Page';
import PostsForm, { getPostFields } from '../../../common/post/PostsForm';

export default function New() {
  const history = useHistory();
  // TODO: link up to BE API (temporary placeholder)
  const submit = data => {
    const companyObj = getPostFields(data);
    history.push('/industry/post/submitted');
    console.log(companyObj);
  }
  return (
    <Page title="New Post">
      <PostsForm submit={submit}/>
    </Page>
  )
}