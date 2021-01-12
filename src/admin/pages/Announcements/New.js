import React from 'react';
import { useHistory } from 'react-router-dom';
<<<<<<< HEAD

=======
import { useDispatch } from 'react-redux';

import { announcementThunks } from '../../../redux/announcementSlice';
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
import Page from '../Page';
import AnnouncementForm, { getAnnouncementFields } from './AnnouncementForm';

export default function New() {
  const history = useHistory();
<<<<<<< HEAD
  // TODO: link up to BE API (temporary placeholder)
  const submit = data => {
    const announcementObj = getAnnouncementFields(data);
    history.push('/admin/announcements')
    console.log(announcementObj);
=======
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
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
  }
  return (
    <Page title="New Announcement">
      <AnnouncementForm submit={submit} />
    </Page>
  )
}