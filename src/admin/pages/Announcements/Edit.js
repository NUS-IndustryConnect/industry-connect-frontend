import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Page from '../Page';

import { announcementSelector, announcementThunks } from '../../../redux/announcementSlice';
import AnnouncementForm, { getAnnouncementFields } from './AnnouncementForm';

export default function Edit() {
  const history = useHistory();
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
    </Page>
  )
}