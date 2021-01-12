import React from 'react';

<<<<<<< HEAD
import Form from '../Form';

export const getAnnouncementFields = data => ({
  announcementTitle: data.get('title'),
  announcementSubtitle: data.get('subtitle'),
  announcementBody: data.get('body')
=======
import Form from '../../../common/Form';

export const getAnnouncementFields = data => ({
  title: data.get('title'),
  subtitle: data.get('subtitle'),
  description: data.get('description')
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
});

export default function AnnouncementForm({ submit, initial }) {
  return (
    <Form
      fields={[
        { type: "text", name: "title", label: "Announcement Title", initial: initial?.title },
        { type: "text", name: "subtitle", label: "Announcement Subtitle", initial: initial?.subtitle },
<<<<<<< HEAD
        { type: "long-text", name: "body", label: "Announcement Body", initial: initial?.body },
=======
        { type: "long-text", name: "description", label: "Announcement Body", initial: initial?.description },
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
      ]}
      submit={submit}
      submitLabel={initial ? "Update" : "Post"}
    />
  );
}