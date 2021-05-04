import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import PostsForm, { getPostFields } from '../../../common/post/PostsForm';
import Page from '../Page';

export default function NewRequest() {
  const history = useHistory();
  // if user goes from new -> preview -> (click on edit) -> new
  // load the form state from location.state and pre-populate the form fields
  const location = useLocation();
  const data = location.state?.data;

  const submit = data => {
    const postObj = getPostFields(data);
    history.push({
      pathname: '/industry/requests/preview',
      state: { data: postObj },
    });
  }
  return (
    <Page title="New Post Request">
      <PostsForm initial={data} submit={submit} submitLabel="Preview" />
    </Page>
  )
}
