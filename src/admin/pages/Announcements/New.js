import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { announcementThunks } from '../../../redux/announcementSlice';
import Page from '../Page';
import AnnouncementForm, { getAnnouncementFields } from './AnnouncementForm';

export default function New() {
  const history = useHistory();
  const dispatch = useDispatch();
  const submit = data => {
    const announcementObj = {
      ...getAnnouncementFields(data),
      announceBy: "author",
    };
    dispatch(announcementThunks.postAnnouncement(announcementObj));
    history.push('/admin/announcements');
    toast.success("Created announcement");
  }
  return (
    <Page title="New Announcement">
      <AnnouncementForm submit={submit} />
    </Page>
  )
}
