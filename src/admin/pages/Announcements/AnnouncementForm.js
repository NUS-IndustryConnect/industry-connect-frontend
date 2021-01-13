import React from 'react';

import Form from '../../../common/Form';

export const getAnnouncementFields = data => {
  console.log("isimportant", data.get("isImportant"))
  return {
    title: data.get('title'),
    subtitle: data.get('subtitle'),
    description: data.get('description'),
    isImportant: data.get('isImportant') === "on",
    expiryDate: data.get('expiryDate'),
  }
};

export default function AnnouncementForm({ submit, initial }) {
  return (
    <Form
      fields={[
        { type: "text", name: "title", label: "Announcement Title", initial: initial?.title },
        { type: "text", name: "subtitle", label: "Announcement Subtitle", initial: initial?.subtitle },
        { type: "long-text", name: "description", label: "Announcement Body", initial: initial?.description },
        { type: "checkbox", name: "isImportant", label: "Important", initial: initial?.isImportant },
        { type: "date", name: "expiryDate", label: "Expiry date", optional: true, initial: initial?.expiryDate },
      ]}
      submit={submit}
      submitLabel={initial ? "Update" : "Post"}
    />
  );
}
