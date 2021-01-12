import React from 'react';

import Form from '../../../common/Form';

export const getAnnouncementFields = data => ({
  title: data.get('title'),
  subtitle: data.get('subtitle'),
  description: data.get('description')
});

export default function AnnouncementForm({ submit, initial }) {
  return (
    <Form
      fields={[
        { type: "text", name: "title", label: "Announcement Title", initial: initial?.title },
        { type: "text", name: "subtitle", label: "Announcement Subtitle", initial: initial?.subtitle },
        { type: "long-text", name: "description", label: "Announcement Body", initial: initial?.description },
      ]}
      submit={submit}
      submitLabel={initial ? "Update" : "Post"}
    />
  );
}
