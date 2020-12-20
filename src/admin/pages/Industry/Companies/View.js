import React from 'react';
import { useHistory } from 'react-router-dom';

import Page from '../../Page';
import Table from '../../Table';

const mockData = {
  companyName: "Shopee",
  users: [
    { userID: "1", email: "blah1@example.com", lastLogin: new Date() },
    { userID: "2", email: "blah2@example.com", lastLogin: new Date() },
    { userID: "3", email: "blah3@example.com", lastLogin: new Date() }
  ],
  postHistory: [
    { postID: "1", date: new Date(), title: "Shopee Design Thinking Workshop" },
    { postID: "2", date: new Date(), title: "Shopee Ultra Hackathon 2020" },
    { postID: "3", date: new Date(), title: "Shopee Summer Internship Positions are open now!" },
  ]
}

export default function View() {
  // TODO: link up to Redux (temporary placeholder)
  const { companyName, users, postHistory } = mockData;
  const history = useHistory();

  const usersDataToRow = ({ userID, email, lastLogin }) => (
    <tr
      key={userID}
      onClick={() => history.push(`/admin/industry/users/view/${userID}`)}
      className="clickable"
    >
      <td>{email}</td>
      <td>{lastLogin.toLocaleDateString()}</td>
    </tr>
  )
  const postsDataToRow = ({ postID, date, title }) => (
    <tr
      key={postID}
      onClick={() => history.push(`/admin/industry/posts/preview/${postID}`)}
      className="clickable"
    >
      <td>{title}</td>
      <td>{date.toLocaleDateString()}</td>
    </tr>
  )
  return (
    <Page title="View Company">
      <h3>{companyName}</h3>
      <section>
        <table className="vertical">
          <tbody>
            <tr>
              <th>Number of users</th>
              <td>{users.length}</td>
            </tr>
            <tr>
              <th>Number of posts</th>
              <td>{postHistory.length}</td>
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
          data={postHistory}
          dataToRow={postsDataToRow}
        />
      </section>
    </Page>
  )
}