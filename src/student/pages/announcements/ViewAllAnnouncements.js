import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux'

import './index.css';
import Page from '../Page';

const ViewAllAnnouncements = () => {
  const { displayedAnnouncements, pinnedAnnouncements } = useSelector(state => state.announcement)
  const history = useHistory();

  const dataToRow = (item) => {
    const {
      announcementID,
      announcementTitle,
      announcementSubtitle,
      announcementBody,
      lastUpdated
    } = item;
    const state = {
      title: announcementTitle, 
      subtitle: announcementSubtitle, 
      body: announcementBody,
    }
    const handleClick = () => history.push({pathname: `/student/announcements/${announcementID}`, state});
    return (
      <li key={announcementID}>
        <Card
          bg='primary'
          border='primary'
          className="announcement-list-card"
          onClick={handleClick}
        >
          <Card.Body>
            <Card.Title style={{fontWeight: 'bold'}}>{announcementTitle}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{announcementSubtitle}</Card.Subtitle>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated on {lastUpdated.toLocaleDateString()}</small>
          </Card.Footer>
        </Card>
      </li>
    )
  }

  const pinnedListItems = pinnedAnnouncements.map((item) => dataToRow(item))
  const listItems = displayedAnnouncements.map((item) => dataToRow(item))

  return (
  <Page title="Announcements">
    <section className="pinned-list">
      <h3>Pinned Announcements</h3>
      <ul class="list-unstyled">
        {pinnedListItems}
      </ul>
    </section>
  
    <section className="announcement-list">
      <h3 >Announcements</h3>
      <ul class="list-unstyled">
        {listItems}
      </ul>
    </section>
  </Page>
  )
}

export default ViewAllAnnouncements;
