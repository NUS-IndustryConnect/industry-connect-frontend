import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Page from '../Page';
import AnnouncementForm, { getAnnouncementFields } from './AnnouncementForm';
import { announcementsSelector } from '../../../redux/announcement/announcementFunctions';

export default function Edit() {
  const history = useHistory();
  const { id } = useParams();
  const formData = useSelector(announcementsSelector(id));
  const {
    title = "",
    subtitle = "",
    description = ""
  } = formData || {};

  // TODO: link up to BE API (temporary placeholder)
  const submit = data => {
    const announcementObj = getAnnouncementFields(data);
    history.push('/admin/announcements')
    console.log(announcementObj);
  }
  return (
    <Page title="Edit Announcement">
      { formData
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