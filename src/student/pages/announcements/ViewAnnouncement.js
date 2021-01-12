import React from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';

import Page from '../Page';

const ViewAnnouncement = () => {
  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();
  const { title, subtitle, body } = location.state;

  return (
    <Page title="View Announcement">
        <h3>{title}</h3>
        <h5>{subtitle}</h5>
        <p>{body}</p>
        <button type="button" onClick={() => history.push('/student/announcements')}>Back</button>
    </Page>
  )
}

export default ViewAnnouncement;
