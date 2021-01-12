import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
<<<<<<< HEAD

import Page from '../Page';
=======
import { useSelector, useDispatch } from 'react-redux';

import Page from '../Page';

import { announcementSelector, announcementThunks } from '../../../redux/announcementSlice';
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
import AnnouncementForm, { getAnnouncementFields } from './AnnouncementForm';

export default function Edit() {
  const history = useHistory();
<<<<<<< HEAD
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
=======
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentValues = useSelector(announcementSelector(id));

  const submit = data => {
    const announcementObj = {
      ...currentValues,
      ...getAnnouncementFields(data),
    };
    dispatch(announcementThunks.updateAnnouncement(announcementObj));
    history.push('/admin/announcements');
  }
  return (
    <Page
      title="Edit Announcement"
      isError={!Boolean(currentValues)}
      errorMessage={<p>Announcement not found. Please select another announcement.</p>}
    >
      <AnnouncementForm submit={submit} initial={currentValues} />
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
    </Page>
  )
}