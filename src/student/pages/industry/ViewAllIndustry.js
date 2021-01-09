import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux'

import { postsSelector } from '../../../redux/industry/postSlice';
import Page from '../Page';
import './index.css';

const ViewAllIndustry = () => {
  const displayedPosts = useSelector(postsSelector);
  const history = useHistory();

  const dataToRow = (data) => {
    const {
      companyPostID,
      postTitle,
      lastUpdated,
      company
    } = data;
    const state = {
        ...data
    }
    // TODO: same issue as announcements
    const handleClick = () => history.push({pathname: `/student/industry/${companyPostID}`, state});
    return (
      <li key={companyPostID}>
        <Card
          className="industry-list-card"
          onClick={handleClick}
        >
          <Card.Body>
            <Card.Title style={{fontWeight: 'bold'}}>{postTitle}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{company.companyName}</Card.Subtitle>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated on {lastUpdated.toLocaleDateString()}</small>
          </Card.Footer>
        </Card>
      </li>
    )
  };

  const listItems = displayedPosts.map(item => dataToRow(item))

  return (
  <Page title="Industry">
    <section>
      <h3>Industry</h3>
      <ul class="list-unstyled">
        {listItems}
      </ul>
    </section>
  </Page>
  )
}

export default ViewAllIndustry;
