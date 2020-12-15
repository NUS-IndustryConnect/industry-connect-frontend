import React from 'react';
import Page from '../Page';

export default function Edit() {
  return (
    <Page title="Edit Announcement">
      <button className="secondary">Archive</button>
      <button className="primary">Update</button>
    </Page>
  )
}