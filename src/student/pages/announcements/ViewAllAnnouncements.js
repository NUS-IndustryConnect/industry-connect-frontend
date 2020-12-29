import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getAnnouncementsApi } from '../../api/announcementsApi'

import Page from '../Page';
import Table from '../Table';

const ViewAllAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [pinned, setPinned] = useState([]);
  const history = useHistory();
  useEffect(() => {
    getAnnouncementsApi().then(all => {
      setPinned(all.filter(item => item.isImportant));
      setAnnouncements(all.filter(item => !item.isImportant))
    });
  }, []);

  const dataToRow = (data) => {
    const {
      announcementID,
      announcementTitle,
      announcementSubtitle,
      announcementBody,
      lastUpdated
    } = data;
    const state = {
      title: announcementTitle, 
      subtitle: announcementSubtitle, 
      body: announcementBody,
    }
    const handleClick = () => history.push({pathname: `/student/announcements/${announcementID}`, state});
    return (
      <tr key={announcementID} >
        <td className="clickable" onClick={handleClick}>{announcementTitle}</td>
        <td className="clickable" onClick={handleClick}>{lastUpdated.toLocaleDateString()}</td>
      </tr>
    )
  };

  return (
  <Page title="Announcements">
    <section>
      <h3>Pinned Announcements</h3>
      <Table
          headers={["Announcement Title", "Last Updated"]}
          data={pinned}
          dataToRow={dataToRow}
          idKey="announcementID"
      />
    </section>
  
    <section>
      <h3>Announcements</h3>
      <Table
        headers={["Announcement Title", "Last Updated"]}
        data={announcements}
        dataToRow={dataToRow}
        idKey="announcementID"
      />
    </section>
  </Page>
  )
}

export default ViewAllAnnouncements;
