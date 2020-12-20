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
        />
      </section>
  
      <section>
        <h3>Archived</h3>
        <SelectTable
          headers={['Announcement Title', "Last Updated"]}
          data={data}
          dataToRow={dataToRow}
          className="archived"
          idKey="announcementID"
          actions={[
            { label: "Delete", className: "warning", onClick: deleteItems }
          ]}
        />
      </section>
    </Page>
  )
}

export default Manage;