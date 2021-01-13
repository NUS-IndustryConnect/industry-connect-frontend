import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import ButtonLink from '../../../common/ButtonLink';
import {
  displayedAnnouncementsSelector,
  pinnedAnnouncementsSelector,
  archivedAnnouncementsSelector,
  announcementThunks
} from '../../../redux/announcementSlice';
import Page from '../Page';
import SelectTable from '../../../common/SelectTable';

const Manage = () => {
  const dispatch = useDispatch();
  const displayedAnnouncements = useSelector(displayedAnnouncementsSelector);
  const pinnedAnnouncements = useSelector(pinnedAnnouncementsSelector);
  const archivedAnnouncements = useSelector(archivedAnnouncementsSelector);

  const history = useHistory();

  const dataToRow = (data, checkbox=null) => {
    const {
      announceID,
      title,
      lastUpdated
    } = data;
    const handleClick = () => history.push(`/admin/announcements/edit/${announceID}`);
    return (
      <tr key={announceID} >
        <td>{ checkbox }</td>
        <td className="clickable" onClick={handleClick}>{title}</td>
        <td className="clickable" onClick={handleClick}>{lastUpdated.toLocaleDateString()}</td>
      </tr>
    )
  };

  const archiveAnnouncement = {
    label: "Archive",
    className: "secondary",
    onClick: selections => {
      dispatch(announcementThunks.archiveAnnouncements(selections));
    }
  };

  return (
    <Page title="Manage Announcements">
      <ButtonLink to="/admin/announcements/new" label="New Announcement" className="primary" />
      
      <section>
        <h3>Important</h3>
        <SelectTable
          headers={["Announcement Title", "Last Updated"]}
          data={pinnedAnnouncements}
          dataToRow={dataToRow}
          idKey="announceID"
          actions={[ archiveAnnouncement ]}
        />
      </section>

      <section>
        <h3>Active</h3>
        <SelectTable
          headers={["Announcement Title", "Last Updated"]}
          data={displayedAnnouncements}
          dataToRow={dataToRow}
          idKey="announceID"
          actions={[ archiveAnnouncement ]}
        />
      </section>
  
      <section>
        <h3>Archived</h3>
        <SelectTable
          headers={['Announcement Title', "Last Updated"]}
          data={archivedAnnouncements}
          dataToRow={dataToRow}
          className="archived"
          idKey="announceID"
          actions={[]}
        />
      </section>
    </Page>
  )
}

export default Manage;
