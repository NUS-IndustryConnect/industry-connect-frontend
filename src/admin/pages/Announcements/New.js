import React from 'react';
import { useHistory } from 'react-router-dom';

import Page from '../Page';
import Form from '../Form';

export default function New() {
  const history = useHistory();
  const submit = data => {
    const announcementObj = {
      announcementTitle: data.get('title'),
      announcementSubtitle: data.get('subtitle'),
      announcementBody: data.get('body')
    };
    history.push('/admin/announcements')
    console.log(announcementObj);
  }
  return (
    <Page title="New Announcement">
      <Form
        fields={[
          { type: "text", name: "title", label: "Announcement Title" },
          { type: "text", name: "subtitle", label: "Announcement Subtitle" },
          { type: "long-text", name: "body", label: "Announcement Body" },
        ]}
        submit={submit}
        submitLabel="Post"
      />
    </Page>
  )
}