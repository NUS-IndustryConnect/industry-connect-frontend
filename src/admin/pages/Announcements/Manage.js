import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'

import Page from '../Page';
import SelectTable from '../SelectTable';

const archiveAnnouncement = {
  label: "Archive",
  className: "secondary",
  onClick: selections => {
    // TODO: link up to BE API (temporary placeholder)
    console.log("Archiving ", selections);

  }
};

const deleteAnnouncement = {
  label: "Delete",
  className: "warning",
  onClick: selections => {
    // TODO: link up to BE API (temporary placeholder)
    console.log("Deleting ", selections);
  } 
};

const Manage = () => {
  const {
    archivedAnnouncements,
    displayedAnnouncements,
    pinnedAnnouncements
  } = useSelector(state => state.announcement);

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

  return (
    <Page title="Manage Announcements">
      <Link to="/admin/announcements/new">
        <button className="primary">New Announcement</button>
      </Link>
      
      <section>
        <h3>Pinned</h3>
        <SelectTable
          headers={["Announcement Title", "Last Updated"]}
          data={pinnedAnnouncements}
          dataToRow={dataToRow}
          idKey="announceID"
          actions={[ archiveAnnouncement, deleteAnnouncement ]}
        />
      </section>

      <section>
        <h3>Active</h3>
        <SelectTable
          headers={["Announcement Title", "Last Updated"]}
          data={displayedAnnouncements}
          dataToRow={dataToRow}
          idKey="announceID"
          actions={[ archiveAnnouncement, deleteAnnouncement ]}
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
          actions={[ deleteAnnouncement ]}
        />
      </section>
    </Page>
  )
}

export default Manage;