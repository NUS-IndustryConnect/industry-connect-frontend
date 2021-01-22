import React from 'react';
import { useHistory } from 'react-router-dom';

import Page from '../../../common/Page';
import PostsForm, { getPostFields } from '../../../common/post/PostsForm';

export default function Edit() {
  const history = useHistory();
  // TODO: replace with redux dispatch
  const submit = data => {
    const postObj = getPostFields(data);
    history.push('/admin/industry/posts');
    console.log(postObj);
  }
  // TODO: link up to Redux store
  const initial = {
    title: "Title",
    description: "Description",
    videoLink: "https://www.youtube.com/watch?v=Jf_2EyDNywE",
    moreLink: "https://www.youtube.com/watch?v=Jf_2EyDNywE",
    expiryDate: new Date().toISOString().substr(0,10),
  }
  return (
    <Page title="Edit Post">
      <PostsForm submit={submit} submitLabel="Update" initial={initial} />
    </Page>
  )
}