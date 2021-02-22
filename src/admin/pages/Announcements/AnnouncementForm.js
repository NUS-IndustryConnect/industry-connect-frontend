import React from 'react';

import Form from '../../../common/Form';

export const getAnnouncementFields = data => {
  return {
    title: data.get('title'),
    subtitle: data.get('subtitle'),
    description: data.get('description'),
    isImportant: data.get('isImportant') === "on",
    validTill: data.get('validTill'),
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
        { type: "date", name: "validTill", label: "Expiry date", optional: true, initial: initial?.validTill },
      ]}
      submit={submit}
      submitLabel={initial ? "Update" : "Post"}
    />
  );
}
