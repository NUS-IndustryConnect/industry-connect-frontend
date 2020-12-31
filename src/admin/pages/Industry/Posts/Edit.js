import React from 'react';
import { useHistory } from 'react-router-dom';

import Page from '../../Page';
import PostsForm, { getPostFields } from '../../../../common/post/PostsForm';

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
    </Page>
  )
}