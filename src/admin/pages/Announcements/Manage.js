import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import ButtonLink from '../../../common/ButtonLink';
import {
  activeAnnouncementsSelector,
  pinnedAnnouncementsSelector,
  archivedAnnouncementsSelector,
  announcementThunks,
  announcementsFetchedSelector
} from '../../../redux/announcementSlice';
import Page from '../Page';
import SelectTable from '../../../common/SelectTable';

const Manage = () => {
  const dispatch = useDispatch();
  const dataFetched = useSelector(announcementsFetchedSelector);
  useEffect(() => {
    if (!dataFetched) dispatch(announcementThunks.getAdminAnnouncements());
  }, [dispatch, dataFetched]);

  const activeAnnouncements = useSelector(activeAnnouncementsSelector);
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
        <td className="clickable" onClick={handleClick}>{new Date(lastUpdated).toLocaleDateString()}</td>
      </tr>
    )
  };

  const archiveAnnouncements = {
    label: "Archive",
    className: "secondary",
    onClick: selections => {
      dispatch(announcementThunks.archiveAnnouncements(selections));
    }
  };

  const unarchiveAnnouncements = {
    label: "Unarchive",
    className: "secondary",
    onClick: selections => {
      dispatch(announcementThunks.unarchiveAnnouncements(selections));
    }
  }

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
          actions={[ archiveAnnouncements ]}
        />
      </section>

      <section>
        <h3>Active</h3>
        <SelectTable
          headers={["Announcement Title", "Last Updated"]}
          data={activeAnnouncements}
          dataToRow={dataToRow}
          idKey="announceID"
          actions={[ archiveAnnouncements ]}
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
          actions={[ unarchiveAnnouncements ]}
        />
      </section>
    </Page>
  )
}

export default Manage;
