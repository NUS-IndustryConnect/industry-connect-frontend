import React from 'react';
import { useHistory } from 'react-router-dom';

import Page from '../Page';
import AnnouncementForm, { getAnnouncementFields } from './AnnouncementForm';

export default function New() {
  const history = useHistory();
  const submit = data => {
    const announcementObj = getAnnouncementFields(data);
    history.push('/admin/announcements')
    console.log(announcementObj);
  }
  return (
    <Page title="New Announcement">
      <AnnouncementForm submit={submit} />
    </Page>
  )
}