import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const PostList = ({ postList = [] }) => {
  const history = useHistory();

  const dataToRow = (data) => {
    const {
      companyPostID,
      postTitle,
      lastUpdated,
      companyName
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
    { postList.map((data, index) => {
        if (data) {
          return dataToRow(data)
    	 }
    	 return null
    }) }
    </>
  );
}

export default PostList
