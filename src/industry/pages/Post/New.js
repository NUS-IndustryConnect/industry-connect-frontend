import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Page from '../../../common/Page';
import PostsForm, { getPostFields } from '../../../common/post/PostsForm';

export default function New() {
  const history = useHistory();
  // if user goes from new -> preview -> (click on edit) -> new
  // load the form state from location.state and pre-populate the form fields
  const location = useLocation();
  const data = location.state?.data;

  const submit = data => {
    const postObj = getPostFields(data);
    history.push({
      pathname: '/industry/posts/preview',
      state: { data: postObj },
    });
  }
  return (
    <Page title="New Post">
      <div className="post">
        <div className="post-header">
          <h3>New Post</h3>
          <button type="button" onClick={() => history.push('/industry/posts')}>Cancel</button>
        </div>
        <PostsForm initial={data} submit={submit} submitLabel="Preview" />
      </div>
    </Page>
  )
}
