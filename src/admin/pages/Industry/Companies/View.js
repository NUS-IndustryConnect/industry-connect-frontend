import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Page from '../../Page';
import Table from '../../Table';
import { companySelector } from '../../../../redux/industry/companySlice';
import { usersOfCompanySelector } from '../../../../redux/industry/userSlice';

export default function View() {
  const history = useHistory();
  const { id: companyID } = useParams();
  const data = useSelector(companySelector(companyID));
  const {
    companyName,
    companyTier,
    companyDescription,
    companyPosts = []
  } = data || {};
  const users = useSelector(usersOfCompanySelector(companyID));

  const usersDataToRow = ({ companyUserID, userEmail, lastLoggedIn }) => (
    <tr
      key={companyUserID}
      onClick={() => history.push(`/admin/industry/users/view/${companyUserID}`)}
      className="clickable"
    >
      <td>{userEmail}</td>
      <td>{lastLoggedIn.toLocaleDateString()}</td>
    </tr>
  );
  const postsDataToRow = ({ companyPostID, lastUpdated, postTitle }) => (
    <tr
      key={companyPostID}
      onClick={() => history.push(`/admin/industry/posts/preview/${companyPostID}`)}
      className="clickable"
    >
      <td>{postTitle}</td>
      <td>{lastUpdated.toLocaleDateString()}</td>
    </tr>
  );
  return (
    <Page title="View Company">
      { data
        ? <React.Fragment>
          <h3>{companyName}</h3>
          <section>
            <table className="vertical">
              <tbody>
                <tr>
                  <th>Tier</th>
                  <td>{companyTier}</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>{companyDescription}</td>
                </tr>
                <tr>
                  <th>Number of users</th>
                  <td>{users.length}</td>
                </tr>
                <tr>
                  <th>Number of posts</th>
                  <td>{companyPosts.length}</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section>
            <h4>Users</h4>
            <Table
              headers={["Email", "Last login"]}
              data={users}
              dataToRow={usersDataToRow}
            />
          </section>
          <section>
            <h4>Posts</h4>
            <Table
              headers={["Post Title", "Date"]}
              data={companyPosts}
              dataToRow={postsDataToRow}
            />
          </section>
        </React.Fragment>
        : <p>Company not found. Please select another company.</p> }
    </Page>
  );
}