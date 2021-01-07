import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Page from '../Page';
import AnnouncementForm, { getAnnouncementFields } from './AnnouncementForm';
import { announcementThunks } from '../../../redux/announcementSlice';

export default function New() {
  const history = useHistory();
  const dispatch = useDispatch();
  // TODO: link up to BE API (temporary placeholder)
  const submit = data => {
    const announcementObj = {
      ...getAnnouncementFields(data),
      isImportant: false,
      validTill: "",
      announceBy: "author",
    };
    dispatch(announcementThunks.postAnnouncement(announcementObj))
    history.push('/admin/announcements')
  }
  return (
    <Page title="New Announcement">
      <AnnouncementForm submit={submit} />
    </Page>
  )
}