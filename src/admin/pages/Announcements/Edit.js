import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Page from '../Page';
import AnnouncementForm, { getAnnouncementFields } from './AnnouncementForm';

export default function Edit() {
  const history = useHistory();
  const { id } = useParams();

  // TODO: link up to BE API (temporary placeholder)
  const submit = data => {
    const announcementObj = getAnnouncementFields(data);
    history.push('/admin/announcements')
    console.log(announcementObj);
  }
  return (
    <Page title="Edit Announcement">
      <AnnouncementForm
        submit={submit}
        initial={{title: id, subtitle: id, body: id}}
      />
    </Page>
  )
}