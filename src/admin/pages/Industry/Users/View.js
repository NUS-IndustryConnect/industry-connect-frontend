import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Page from '../../Page';
import Table from '../../Table';
import { userSelector } from '../../../../redux/industry/userSlice';

export default function View() {
  const { id } = useParams();
  const data = useSelector(userSelector(id));
  const {
    userEmail,
    company,
    lastLoggedIn,
    userPosts
  } = data || {};
  const history = useHistory();

  const dataToRow = ({ companyPostID, lastUpdated, postTitle }) => (
    <tr
      key={companyPostID}
      onClick={() => history.push(`/admin/industry/posts/preview/${companyPostID}`)}
      className="clickable"
    >
      <td>{postTitle}</td>
      <td>{lastUpdated.toLocaleDateString()}</td>
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
          <Table
            headers={["Post Title", "Date"]}
            data={userPosts}
            dataToRow={dataToRow}
          />
        </section>
      </React.Fragment> :
      <p>User not found. Please select another user.</p> }
    </Page>
  )
}