import React from 'react';

import Form from '../Form';

export const getPostFields = data => ({
  postTitle: data.get('postTitle'),
  postSubtitle: data.get('postSubtitle'),
  description: data.get('description'),
  videoUrl: data.get('videoUrl'),
  moreUrl: data.get('moreUrl'),
  expiryDate: data.get('expiryDate')
})

// for admin to post on behalf of company
export default function PostsForm({ submit, initial }) {
  // TODO: include company dropdown to select company
  return (
    <Form
      fields={[
        { type: "text", name: "postTitle", label: "Title", initial: initial?.postTitle },
        { type: "text", name: "postSubtitle", label: "Subtitle", initial: initial?.postSubtitle },
        { type: "long-text", name: "description", label: "Description", initial: initial?.description },
        { type: "text", name: "videoUrl", label: "Video embed link", optional: true, initial: initial?.videoUrl },
        { type: "text", name: "moreUrl", label: "View more link", optional: true, initial: initial?.moreLink },
        { type: "date", name: "expiryDate", label: "Expiry date", optional: true, initial: initial?.expiryDate },
      ]}
      submit={submit}
      submitLabel={initial ? "Update" : "Create"}
    />
  )
}