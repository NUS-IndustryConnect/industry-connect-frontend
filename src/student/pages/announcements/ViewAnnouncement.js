import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { announcementSelector } from '../../../redux/announcementSlice';

import Announcement from '../../../common/announcement/Announcement';
import BackButton from '../../../common/BackButton';
import Page from '../Page';

const ViewAnnouncement = () => {
  const history = useHistory();
  const { id } = useParams();
  const data = useSelector(announcementSelector(id));

  return (
    <Page title="View Announcement">
      <BackButton />
      <Announcement data={data} history={history} />
    </Page>
  )
}

export default ViewAnnouncement;
