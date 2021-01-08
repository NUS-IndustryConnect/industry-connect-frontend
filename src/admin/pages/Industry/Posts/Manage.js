import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import Page from '../../Page';
import Table from '../../Table';

import { displayedPostsSelector, archivedPostsSelector } from '../../../../redux/industry/postSlice';
import { requestsSelector } from '../../../../redux/industry/requestSlice';

export default function Manage() {
  const displayedPosts = useSelector(displayedPostsSelector);
  const archivedPosts = useSelector(archivedPostsSelector);
  const requests = useSelector(requestsSelector);
  const history = useHistory();

  const dataToRow = ({ companyPostID, postTitle, companyName, lastUpdated }) => (
    <tr 
      key={companyPostID}
      onClick={() => history.push(`/admin/industry/posts/preview/${companyPostID}`)}
      className="clickable"
    >
      <td>{postTitle}</td>
      <td>{companyName}</td>
      <td>{lastUpdated.toLocaleDateString()}</td>
    </tr>
  );

  return (
    <Page title="Manage Industry Posts">
      <Link to="/admin/industry/posts/new">
        <button className="primary">New Industry Post</button>
      </Link>
      
      <section>
        <h3>Pending</h3>
        <Table
          headers={["Title", "Company", "Last Updated"]}
          data={requests}
          dataToRow={dataToRow}
          className="pending"
        />
      </section>
  
      <section>
        <h3>Displayed</h3>
        <Table
          headers={['Title', "Company", "Last Updated"]}
          data={displayedPosts}
          dataToRow={dataToRow}
        />
      </section>

      <section>
        <h3>Archived</h3>
        <Table
          headers={['Title', "Company", "Last Updated"]}
          data={archivedPosts}
          dataToRow={dataToRow}
          className="archived"
        />
      </section>
    </Page>
  )
}