import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Page from '../Page';
import Table from '../Table';
import { getAnnouncements } from '../../api/announcements';

const dataToRow = ({ announcementID, announcementTitle, lastUpdated }) => (
  <tr key={announcementID}>
    <td>{announcementTitle}</td>
    <td>{lastUpdated.toLocaleDateString()}</td>
  </tr>
);

const Manage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAnnouncements().then(setData);
  }, []);
  return (
    <Page title="Manage Announcements">
      <Link to="/admin/announcements/new">
        <button className="primary">New Announcement</button>
      </Link>
      
      <section>
        <h3>Active Announcements</h3>
        <Table
          headers={["Announcement Title", "Last Updated"]}
          data={data}
          dataToRow={dataToRow}
        />
      </section>
  
      <section>
        <h3>Archived</h3>
        <Table
          headers={['Announcement Title', "Last Updated"]}
          data={data}
          dataToRow={dataToRow}
          className="archived"
        />
      </section>
    </Page>
  )
}

export default Manage;