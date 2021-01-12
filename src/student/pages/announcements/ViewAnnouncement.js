import React from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { announcementSelector } from '../../../redux/announcementSlice';

import Page from '../Page';

const ViewAnnouncement = () => {
  const history = useHistory();
  const { id } = useParams();
  const currentValues = useSelector(announcementSelector(id));

  return (
    <Page title="View Announcement">
        <h3>{currentValues?.title}</h3>
        <h5>{currentValues?.subtitle}</h5>
        <p>{currentValues?.description}</p>
        <button type="button" onClick={() => history.push('/student/announcements')}>Back</button>
    </Page>
  )
}

export default ViewAnnouncement;
