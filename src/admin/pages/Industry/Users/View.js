import React from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Page from '../../Page';
import Table from '../../Table';
import { userSelector } from '../../../../redux/industry/userSlice';
import VerticalTable from '../../../../common/VerticalTable';

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
      <Link to={`/admin/industry/users/edit/${id}`}>
        <button className="secondary">Edit</button>
      </Link>
      <section>
        <h4>Posts</h4>
        <Table
          headers={["Post Title", "Date"]}
          data={userPosts}
          dataToRow={dataToRow}
        />
      </section>
    </Page>
  )
}