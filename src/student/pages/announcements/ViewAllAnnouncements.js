import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory, useRouteMatch } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux'

import {
  activeAnnouncementsSelector,
  pinnedAnnouncementsSelector
} from '../../../redux/announcementSlice';
import Page from '../Page';
import './index.css';

const ViewAllAnnouncements = () => {
  const displayedAnnouncements = useSelector(activeAnnouncementsSelector);
  const pinnedAnnouncements = useSelector(pinnedAnnouncementsSelector);
  const history = useHistory();
  const match = useRouteMatch();
  const urlPrefix = match.path.includes("/admin") ? "/admin/student" : "/student";

  const dataToRow = (item) => {
    const {
      announceID,
      title,
      subtitle,
      lastUpdated
    } = item;

    const handleClick = () => history.push(`${urlPrefix}/announcements/${announceID}`)

    return (
      <li key={announceID}>
        <Card
          bg='primary'
          border='primary'
          className="announcement-list-card"
          onClick={handleClick}
        >
          <Card.Body>
            <Card.Title style={{fontWeight: 'bold'}}>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated on {new Date(lastUpdated).toLocaleDateString()}</small>
          </Card.Footer>
        </Card>
      </li>
    )
  }

  return (
    <Page title="Announcements">
      <section className="pinned-list">
        <h3>Pinned Announcements</h3>
        <ul className="list-unstyled">
          {pinnedAnnouncements.map(dataToRow)}
        </ul>
      </section>
    
      <section className="announcement-list">
        <h3>Announcements</h3>
        <ul className="list-unstyled">
          {displayedAnnouncements.map(dataToRow)}
        </ul>
      </section>
    </Page>
  )
}

export default ViewAllAnnouncements;
