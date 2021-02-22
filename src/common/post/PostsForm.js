import React from 'react';
import { useSelector } from 'react-redux';

import Form from '../Form';
import { companiesDropdownSelector } from '../../redux/industry/companySlice';

export const getPostFields = data => ({
  companyId: data.get('companyId'),
  postTitle: data.get('postTitle'),
  postSubtitle: data.get('postSubtitle'),
  description: data.get('description'),
  videoUrl: data.get('videoUrl'),
  moreUrl: data.get('moreUrl'),
  expiryDate: data.get('expiryDate')
})

// shared by both admin and industry
export default function PostsForm({ submit, submitLabel, initial, isAdmin }) {
  const companiesDropdown = useSelector(companiesDropdownSelector);
  let fields = [
    { type: "text", name: "postTitle", label: "Title", initial: initial?.postTitle },
    { type: "text", name: "postSubtitle", label: "Subtitle", initial: initial?.postSubtitle },
    { type: "long-text", name: "description", label: "Description", initial: initial?.description },
    { type: "text", name: "videoUrl", label: "Video embed link", optional: true, initial: initial?.videoUrl },
    { type: "text", name: "moreUrl", label: "View more link", optional: true, initial: initial?.moreLink },
    { type: "date", name: "expiryDate", label: "Expiry date", optional: true, initial: initial?.expiryDate },
  ];
  if (isAdmin) {
    fields.unshift({ type: "dropdown", name: "companyId", label: "Company", options: companiesDropdown, initial: initial?.companyId });
  }

  return (
    <Form
      fields={fields}
      submit={submit}
      submitLabel={submitLabel}
    />
  )
}