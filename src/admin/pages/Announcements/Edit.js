import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Page from '../Page';
import AnnouncementForm, { getAnnouncementFields } from './AnnouncementForm';
import { announcementSelector, announcementThunks } from '../../../redux/announcementSlice';

export default function Edit() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentValues = useSelector(announcementSelector(id));

  const {
    title = "",
    subtitle = "",
    description = ""
  } = currentValues || {};

  const submit = data => {
    const announcementObj = {
      ...currentValues,
      ...getAnnouncementFields(data),
    };
    dispatch(announcementThunks.updateAnnouncement(announcementObj));
    history.push('/admin/announcements');
  }
  return (
    <Page title="Edit Announcement">
      { currentValues
        ? <AnnouncementForm
            submit={submit}
            initial={{
              title: title,
              subtitle: subtitle,
              body: description
            }}
          />
        : <p>Announcement not found. Please select another announcement.</p>
      }
    </Page>
  )
}