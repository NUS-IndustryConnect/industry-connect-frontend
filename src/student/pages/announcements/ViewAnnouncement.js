import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { announcementSelector } from '../../../redux/announcementSlice';

import Page from '../Page';
import Announcement from '../../../common/announcement/Announcement';

const ViewAnnouncement = () => {
  const history = useHistory();
  const { id } = useParams();
  const currentValues = useSelector(announcementSelector(id));

  return (
    <Page title="View Announcement">
      <Announcement data={currentValues} history={history} />
    </Page>
  )
}

export default ViewAnnouncement;
