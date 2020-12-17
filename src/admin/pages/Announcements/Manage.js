import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Page from '../Page';
import Table from '../Table';
import { getAnnouncements } from '../../api/announcements';

const Manage = () => {
  const [data, setData] = useState([]);
  const history = useHistory();
  useEffect(() => {
    getAnnouncements().then(setData);
  }, []);

  const dataToRow = ({ announcementID, announcementTitle, lastUpdated }) => (
    <tr
      key={announcementID}
      onClick={() => history.push(`/admin/announcements/edit/${announcementID}`)}
      className="clickable"
    >
      <td>{announcementTitle}</td>
      <td>{lastUpdated.toLocaleDateString()}</td>
    </tr>
  );

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