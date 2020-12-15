import React from 'react';
import { useHistory } from 'react-router-dom';

import Page from '../../Page';
import Form from '../../Form';

export default function New() {
  const history = useHistory();
  const submit = data => {
    const companyObj = {
      companyPostTitle: data.get('title'),
      description: data.get('description'),
      videoURL: data.get('video-link'),
      moreURL: data.get('more-link'),
      expiryDate: data.get('expiry-date')
    };
    history.push('/admin/industry/posts');
    console.log(companyObj);
  }
  return (
    <Page title="New Post">
      <Form
        fields={[
          { type: "text", name: "title", label: "Title" },
          { type: "long-text", name: "description", label: "Description" },
          { type: "text", name: "video-link", label: "Video embed link", optional: true },
          { type: "text", name: "more-link", label: "View more link", optional: true },
          { type: "date", name: "expiry-date", label: "Expiry date", optional: true },
        ]}
        submit={submit}
        submitLabel="Create"
      />
    </Page>
  )
}