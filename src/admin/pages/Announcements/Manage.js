<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Page from '../Page';
import SelectTable from '../SelectTable';
import { getAnnouncements } from '../../api/announcements';

const Manage = () => {
  const [data, setData] = useState([]);
  const history = useHistory();
  useEffect(() => {
    getAnnouncements().then(setData);
  }, []);

  const dataToRow = (data, checkbox=null) => {
    const {
      announcementID,
      announcementTitle,
      lastUpdated
    } = data;
    const handleClick = () => history.push(`/admin/announcements/edit/${announcementID}`);
    return (
      <tr key={announcementID} >
        <td>{ checkbox }</td>
        <td className="clickable" onClick={handleClick}>{announcementTitle}</td>
=======
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
import SelectTable from '../SelectTable';

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
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
        <td className="clickable" onClick={handleClick}>{lastUpdated.toLocaleDateString()}</td>
      </tr>
    )
  };

<<<<<<< HEAD
  const archiveItems = (selections) => {
    // TODO: link up to BE API (temporary placeholder)
    console.log("Archiving ", selections);
  }

  const deleteItems = (selections) => {
    // TODO: link up to BE API (temporary placeholder)
    console.log("Deleting ", selections);
  }

  return (
    <Page title="Manage Announcements">
      <Link to="/admin/announcements/new">
        <button className="primary">New Announcement</button>
      </Link>
      
      <section>
        <h3>Active Announcements</h3>
        <SelectTable
          headers={["Announcement Title", "Last Updated"]}
          data={data}
          dataToRow={dataToRow}
          idKey="announcementID"
          actions={[
            { label: "Archive", className: "secondary", onClick: archiveItems },
            { label: "Delete", className: "warning", onClick: deleteItems }
          ]}
=======
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
        <h3>Pinned</h3>
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
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
        />
      </section>
  
      <section>
        <h3>Archived</h3>
        <SelectTable
          headers={['Announcement Title', "Last Updated"]}
<<<<<<< HEAD
          data={data}
          dataToRow={dataToRow}
          className="archived"
          idKey="announcementID"
          actions={[
            { label: "Delete", className: "warning", onClick: deleteItems }
          ]}
=======
          data={archivedAnnouncements}
          dataToRow={dataToRow}
          className="archived"
          idKey="announceID"
          actions={[]}
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
        />
      </section>
    </Page>
  )
}

export default Manage;