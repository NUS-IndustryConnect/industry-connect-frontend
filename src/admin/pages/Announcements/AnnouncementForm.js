import React from 'react';

import Form from '../../../common/Form';

export const getAnnouncementFields = data => ({
  announcementTitle: data.get('title'),
  announcementSubtitle: data.get('subtitle'),
  announcementBody: data.get('body')
});

export default function AnnouncementForm({ submit, initial }) {
  return (
    <Form
      fields={[
        { type: "text", name: "title", label: "Announcement Title", initial: initial?.title },
        { type: "text", name: "subtitle", label: "Announcement Subtitle", initial: initial?.subtitle },
        { type: "long-text", name: "body", label: "Announcement Body", initial: initial?.body },
      ]}
      submit={submit}
      submitLabel={initial ? "Update" : "Post"}
    />
  );
}