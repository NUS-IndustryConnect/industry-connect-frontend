import React from 'react';
<<<<<<< HEAD
import { useHistory } from 'react-router-dom';

import Page from '../../Page';
import Table from '../../Table';

const mockData = {
  email: "blah@example.com",
  companyName: "Shopee",
  lastLogin: new Date(),
  accountLocked: new Date(),
  postHistory: [
    { postID: "1", date: new Date(), title: "Shopee Design Thinking Workshop" },
    { postID: "2", date: new Date(), title: "Shopee Ultra Hackathon 2020" },
    { postID: "3", date: new Date(), title: "Shopee Summer Internship Positions are open now!" },
  ]
}

export default function View() {
  // TODO: link up to Redux (temporary placeholder)
  const { email, companyName, lastLogin, accountLocked, postHistory } = mockData;
  const history = useHistory();

  const dataToRow = ({ postID, date, title }) => (
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
    <Page title="View Company User">
      <table className="vertical">
        <tbody>
          <tr>
            <th>Email</th>
            <td>{email}</td>
          </tr>
          <tr>
            <th>Company</th>
            <td>{companyName}</td>
          </tr>
          <tr>
            <th>Last login</th>
            <td>{lastLogin.toLocaleDateString()}</td>
          </tr>
          <tr className="unlock-account">
            <th>Account locked</th>
            <td>
              {accountLocked.toLocaleDateString()}
              <button className="success">Unlock</button>
            </td>
          </tr>
        </tbody>
      </table>
=======
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import VerticalTable from '../../../../common/VerticalTable';
import ButtonLink from '../../../../common/ButtonLink';
import { userSelector } from '../../../../redux/industry/userSlice';
import Page from '../../Page';
import Table from '../../Table';

export default function View() {
  const { id } = useParams();
  const data = useSelector(userSelector(id));
  const {
    name,
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
    <Page
      title="View Company User"
      isError={!Boolean(data)}
      errorMessage={<p>User not found. Please select another user.</p>}
    >
      <VerticalTable data={[
        { header: "Name", data: name },
        { header: "Email", data: userEmail },
        { header: "Company", data: company.companyName },
        { header: "Last login", data: lastLoggedIn.toLocaleDateString() },
      ]}/>
      <ButtonLink to={`/admin/industry/users/edit/${id}`} label="Edit" className="secondary" />
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
      <section>
        <h4>Posts</h4>
        <Table
          headers={["Post Title", "Date"]}
<<<<<<< HEAD
          data={postHistory}
=======
          data={userPosts}
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
          dataToRow={dataToRow}
        />
      </section>
    </Page>
  )
}