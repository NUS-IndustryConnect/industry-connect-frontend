import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import ButtonLink from '../../../common/ButtonLink';
import {
  activeAnnouncementsSelector,
  pinnedAnnouncementsSelector,
  archivedAnnouncementsSelector,
  announcementThunks,
} from '../../../redux/announcementSlice';
import Page from '../Page';
import SelectTable from '../../../common/SelectTable';

const Manage = () => {
  const dispatch = useDispatch();
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
      toast.success("Archived announcement(s)");
    }
  };

  const unarchiveAnnouncements = {
    label: "Unarchive",
    className: "secondary",
    onClick: selections => {
      dispatch(announcementThunks.unarchiveAnnouncements(selections));
      toast.success("Unarchived announcement(s)");
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
