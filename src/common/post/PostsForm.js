import React from 'react';

import Form from '../Form';

export const getPostFields = data => ({
  companyPostTitle: data.get('title'),
  description: data.get('description'),
  videoURL: data.get('video-link'),
  moreURL: data.get('more-link'),
  expiryDate: data.get('expiry-date')
})

export default function PostsForm({ submit, initial }) {
  return (
    <Form
      fields={[
        { type: "text", name: "title", label: "Title", initial: initial?.title },
        { type: "long-text", name: "description", label: "Description", initial: initial?.description },
        { type: "text", name: "video-link", label: "Video embed link", optional: true, initial: initial?.videoLink },
        { type: "text", name: "more-link", label: "View more link", optional: true, initial: initial?.moreLink },
        { type: "date", name: "expiry-date", label: "Expiry date", optional: true, initial: initial?.expiryDate },
      ]}
      submit={submit}
      submitLabel={initial ? "Update" : "Create"}
    />
  )
}