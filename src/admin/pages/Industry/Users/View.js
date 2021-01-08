import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Page from '../../Page';
import Table from '../../Table';
import { userSelector } from '../../../../redux/industry/userSlice';

export default function View() {
  // TODO: link up to Redux (temporary placeholder)
  const { id } = useParams();
  const data = useSelector(userSelector(id));
  const {
    userEmail,
    company,
    lastLoggedIn,
    userPosts // TODO: map from just postIDs to the full data and then uncomment the post history table
  } = data || {};
  const history = useHistory();

  const dataToRow = ({ companyPostID, date, title }) => (
    <tr
      key={companyPostID}
      onClick={() => history.push(`/admin/industry/posts/preview/${companyPostID}`)}
      className="clickable"
    >
      <td>{title}</td>
      <td>{date.toLocaleDateString()}</td>
    </tr>
  )
  return (
    <Page title="View Company User">
      { data ? <React.Fragment>
        <table className="vertical">
          <tbody>
            <tr>
              <th>Email</th>
              <td>{userEmail}</td>
            </tr>
            <tr>
              <th>Company</th>
              <td>{company.companyName}</td>
            </tr>
            <tr>
              <th>Last login</th>
              <td>{lastLoggedIn.toLocaleDateString()}</td>
            </tr>
            {/* <tr className="unlock-account">
              <th>Account locked</th>
              <td>
                {accountLocked.toLocaleDateString()}
                <button className="success">Unlock</button>
              </td>
            </tr> */}
          </tbody>
        </table>
        <section>
          <h4>Posts</h4>
          {/* <Table
            headers={["Post Title", "Date"]}
            data={userPosts}
            dataToRow={dataToRow}
          /> */}
        </section>
      </React.Fragment> :
      <p>User not found. Please select another user.</p> }
    </Page>
  )
}