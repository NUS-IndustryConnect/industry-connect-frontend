import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Page from '../Page';
import AnnouncementForm, { getAnnouncementFields } from './AnnouncementForm';
import { announcementThunks } from '../../../redux/announcementSlice';

export default function New() {
  const history = useHistory();
  const dispatch = useDispatch();
  const submit = data => {
    const announcementObj = {
      ...getAnnouncementFields(data),
      isImportant: false, // FIXME: add this as field in form
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