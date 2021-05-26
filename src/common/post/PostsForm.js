import React from 'react';

import Form from '../Form';

export const getPostFields = data => ({
  companyId: data.get('companyId'),
  companyUserId: data.get('companyUserId'),
  postTitle: data.get('postTitle'),
  postSubTitle: data.get('postSubTitle'),
  postDescription: data.get('postDescription'),
  videoUrl: data.get('videoUrl'),
  moreUrl: data.get('moreUrl'),
  expiryDate: data.get('expiryDate')
})

// shared by both admin and industry
export default function PostsForm({ submit, submitLabel, initial, isAdmin, companyUserDropdownDisabled = false, resettable }) {
  let fields = [
    { type: "text", name: "postTitle", label: "Title", initial: initial?.postTitle },
    { type: "text", name: "postSubTitle", label: "Subtitle", initial: initial?.postSubTitle },
    { type: "long-text", name: "postDescription", label: "Description", initial: initial?.postDescription },
    { type: "text", name: "videoUrl", label: "YouTube video link", optional: true, initial: initial?.videoUrl, placeholder: "https://www.youtube.com/watch?v=..." },
    { type: "text", name: "moreUrl", label: "View more link", optional: true, initial: initial?.moreUrl },
    { type: "date", name: "expiryDate", label: "Expiry date", optional: true, initial: initial?.expiryDate },
  ];
  if (isAdmin) {
    fields.unshift({ type: "company-user-dropdowns", disabled: companyUserDropdownDisabled });
  }

  return (
    <Form
      fields={fields}
      submit={submit}
      submitLabel={submitLabel}
      resettable={resettable}
    />
  )
}
