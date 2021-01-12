import React from 'react';
<<<<<<< HEAD
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
=======
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import VerticalTable from '../../../../common/VerticalTable';
import ButtonLink from '../../../../common/ButtonLink';
import { companySelector } from '../../../../redux/industry/companySlice';
import { usersOfCompanySelector } from '../../../../redux/industry/userSlice';
import Page from '../../Page';
import Table from '../../Table';

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
    <Page
      title="View Company"
      isError={!Boolean(data)}
      errorMessage={<p>Company not found. Please select another company.</p>}
    >
      <h3>{companyName}</h3>
      <section>
        <VerticalTable data={[
          { header: "Tier", data: companyTier },
          { header: "Description", data: companyDescription },
          { header: "Number of users", data: users.length },
          { header: "Number of posts", data: companyPosts.length },
        ]} />
        <ButtonLink to={`/admin/industry/companies/edit/${companyID}`} label="Edit" className="secondary" />
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
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
<<<<<<< HEAD
          data={postHistory}
=======
          data={companyPosts}
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
          dataToRow={postsDataToRow}
        />
      </section>
    </Page>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
}