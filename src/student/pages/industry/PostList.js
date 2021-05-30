import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const PostList = ({ postList = [] }) => {
  const history = useHistory();
  const match = useRouteMatch();
  const urlPrefix = match.path.includes("/admin") ? "/admin/student" : "/student";

  const dataToRow = (data) => {
    const {
      companyPostId,
      postTitle,
      lastUpdated,
      companyName
    } = data;
    
    const handleClick = () => history.push(`${urlPrefix}/industry/${companyPostId}`);
    return (
      <li key={companyPostId}>
        <Card
          className="industry-list-card"
          onClick={handleClick}
        >
          <Card.Body>
            <Card.Title style={{fontWeight: 'bold'}}>{postTitle}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{companyName}</Card.Subtitle>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated on {new Date(lastUpdated).toLocaleDateString()}</small>
          </Card.Footer>
        </Card>
      </li>
    )
  };


  return (
    <>
      { postList.map(dataToRow) }
    </>
  );
}

export default PostList
