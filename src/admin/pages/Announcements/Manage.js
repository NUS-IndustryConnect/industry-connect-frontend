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
        <td className="clickable" onClick={handleClick}>{lastUpdated.toLocaleDateString()}</td>
      </tr>
    )
  };

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
        />
      </section>
  
      <section>
        <h3>Archived</h3>
        <SelectTable
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